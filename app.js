/* const myPromisse = new Promise((resolve, reject) => {

    if() {
        resolve('success');
    }else {
        reject('Falha');
    }
});

myPromisse.then(result => {
    console.log(result);
});

myPromisse.catch(error => {
    console.log(error);
}); */

const loadData = document.querySelector('#loadData');
const btnExer = document.querySelector('button');

btnExer.addEventListener('click', async () => {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Dados carregados');
            }, 3000);
        });
        loadData.textContent = data;
    } catch (error) { 
        loadData.textContent = `Error ao carregar os dados: ${error}`;
    }

    try {
        const secondData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Segunda Promisse executada');
            }, 4000);
        });
        loadData.textContent = secondData;
    }
    catch (error) {
        loadData.textContent = `Erro na segunda promisse ${error}`;
    }
});