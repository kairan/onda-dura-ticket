const templateToWatch = (link) => `Olá Igreja. Segue o link para marcar presença e assistir o familiarizando de forma online. \n${link}`;
const templateToNonWatchers = (nome, link) => `Olá ${nome}. Vimos que você ainda não assistiu ao último familiarizando. É necessário que abra o link mesmo que já tenha assistido junto de alguém, assim podemos marcar sua presença e no final das 4 semanas liberar o teste para membresia. Caso não tenha mais o link, pode acessar aqui \n${link}`;
const templateToTest = (nome, link) => `Olá ${nome}. Segue o link para fazer a avaliação do familiarizando. \n${link}`;
module.exports = {
  templateToWatch,
  templateToNonWatchers,
  templateToTest
}