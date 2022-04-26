//Arquivo Base
'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Nicolas",
    email: "nicolas@nicolas",
    celular: "11123459876",
    cidade: "Volta Redonda"
}

const getLocalStorage = () =>
    JSON.parse(localStorage.getItem('db_client')) ?? []

const setLocalStorage = (dbClient) =>
    localStorage.setItem('db_client', JSON.stringify(dbClient))

const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index, 1);
    setLocalStorage(dbClient);
}
const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient)

}
const readClient = () => getLocalStorage()

const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
}
//Interação com o layout

const isValidFields = () => {
    //Validação de Formulários
    return document.getElementById('form').reportValidity();
}
const saveClient = () => {
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client);
    }
}
//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient);