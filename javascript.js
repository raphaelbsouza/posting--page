const form = document.querySelector('#post-form');
const titulo = document.querySelector('#titulo');
const conteudo = document.querySelector('#conteudo');
const btnSubmit = document.querySelector('#btn-submit');

const tituloRenderizar = document.querySelector('#renderizador-titulo');
const conteudoRenderizar = document.querySelector('#renderizador-conteudo');
const useridRenderizar = document.querySelector('#renderizador-userid');
const idRenderizar = document.querySelector('#renderizador-id');

const postCard = document.querySelector('#post-card');
const estadoInicial = document.querySelector('#estado-inicial');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!titulo.value.trim() || !conteudo.value.trim()) {
    alert('Por favor, preencha o título e o conteúdo antes de publicar.');
    return;
  }

  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1,
  };

  btnSubmit.disabled = true;
  btnSubmit.querySelector('.btn-text').textContent = 'Publicando...';

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log('Resposta da API:', json);

      tituloRenderizar.innerHTML = data.title;
      conteudoRenderizar.innerHTML = data.body;
      useridRenderizar.innerHTML = json.userId;
      idRenderizar.innerHTML = json.id;

      estadoInicial.style.display = 'none';
      postCard.classList.remove('hidden');

      form.reset();
    })
    .catch(function (erro) {
      console.error('Erro na requisição:', erro);
      alert('Ocorreu um erro ao publicar o post. Tente novamente.');
    })
    .finally(function () {
      btnSubmit.disabled = false;
      btnSubmit.querySelector('.btn-text').textContent = 'Publicar';
    });
});
