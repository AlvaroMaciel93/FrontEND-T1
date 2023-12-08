function inserirPacote() {
    const formulario = document.getElementById('formulario');

    // Capturando os valores do formulário
    const destino = formulario.destino.value;
    const imagem = formulario.imagem.value;
    const detalhes = formulario.detalhes.value;
    const preco = formulario.preco.value;
    const taxas = formulario.taxas.value;

    // Criando um novo elemento para inserir na lista
    const novoPacote = document.createElement('div');
    novoPacote.classList.add('roteiro-viagens');
    novoPacote.innerHTML = `
        <h2>${destino}</h2>
        <img src="${imagem}" alt="${destino}">
        <p>${detalhes}</p>
        <h3>Preço: ${preco}</h3>
        <h5>Taxas: ${taxas}</h5>
    `;

    // Inserindo o novo elemento na lista de destinos
    const containerDestinos = document.getElementById('containerDestinos');
    containerDestinos.appendChild(novoPacote);

    // Limpar o formulário após a inserção
    formulario.reset();
}
