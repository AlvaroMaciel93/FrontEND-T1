// Importando jQuery
import $ from jquery;

// Definindo classes e objetos
class Noticia {
  titulo: string;
  link: string;

  constructor(titulo: string, link: string) {
    this.titulo = titulo;
    this.link = link;
  }
}

function buscarNoticias() {
  const urlNoticias = 'https://jokeapi.dev/joke/Any?type=single';
  
  $.ajax({
    url: urlNoticias,
    method: 'GET',
    success: (data: any) => {
      const noticia = new Noticia(data.joke, '');
      exibirNoticia(noticia);
    },
    error: (error: any) => {
      console.error('Erro ao buscar notícias:', error);
    }
  });
}

// Função para exibir notícias na página
function exibirNoticia(noticia: Noticia) {
  const noticiasDiv = $('.quadradonoticias'); // Div onde serão exibidas as notícias
  
  const noticiaHtml = `
    <h3>NOTÍCIAS</h3>
    <p>${noticia.titulo}</p>
  `;
  
  noticiasDiv.html(noticiaHtml);
}

// Chamada da função para buscar e exibir notícias
$(document).ready(() => {
  buscarNoticias();
});
