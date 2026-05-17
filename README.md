# Projeto de Certificação Devstart 2026 - Postagem de blog 📝 

Projeto de certificação front-end que simula a criação de postagens de blog, consumindo uma API externa via `fetch`.

## 🚀 Como usar

1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `index.html` no navegador
3. Preencha o título e o conteúdo
4. Clique em **Publicar** — o post será enviado à API e exibido na tela

## 📁 Estrutura

```
├── index.html       # Estrutura da página
├── style.css        # Estilização
├── javascript.js    # Lógica e comunicação com a API
└── README.md
```

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3
- JavaScript (Fetch API)

## 🌐 API utilizada

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) — API gratuita para testes.

- **Endpoint:** `POST https://jsonplaceholder.typicode.com/posts`
- **Body enviado:**
```json
{
  "title": "Título do post",
  "body": "Conteúdo do post",
  "userId": 1
}
```

## 👨‍💻 Autor

Projeto desenvolvido para certificação de Desenvolvedor Web Front-End.
