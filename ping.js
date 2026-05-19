async function pingAppwrite() {
  const PROJECT_ID = '6a02281700258ee8288b';
  const DB_ID = '6a032e7800162b4d61b4';
  const COLLECTION_ID = 'documents'; // O ID que acabámos de confirmar pela imagem
  const ENDPOINT = `https://sfo.cloud.appwrite.io/v1/databases/${DB_ID}/collections/${COLLECTION_ID}/documents`;

  try {
    const response = await fetch(ENDPOINT, {
      method: 'GET',
      headers: {
        'X-Appwrite-Project': PROJECT_ID,
      }
    });

    if (response.ok) {
      console.log(`✅ Ping realizado com sucesso no Appwrite! Status: ${response.status}`);
    } else {
      console.error(`⚠️ Falha no ping. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Erro de rede ao tentar fazer o ping:', error);
  }
}

pingAppwrite();