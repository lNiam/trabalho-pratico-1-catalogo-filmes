const filmes = [
    {
      id: 1,
      titulo: "O Poderoso Chefão",
      descricao: "A saga da família Corleone.",
      detalhes: "Direção: Francis Ford Coppola | Ano: 1972 | Prêmios: 3 Oscars\nUm clássico do cinema que retrata a ascensão de Michael Corleone no mundo do crime organizado.",
      imagem: "https://br.web.img2.acsta.net/medias/nmedia/18/90/93/20/20120876.jpg",
      destaque: true, // NOVO CAMPO
      imagens_complementares: [ // NOVO CAMPO
        { src: "https://i0.wp.com/www.estilogangster.com.br/wp-content/uploads/2015/09/o-poderoso-chefao-historias-e-assassinatos-reais-parte-i.html.jpg?resize=730%2C430&ssl=1", descricao: "Marlon Brando como Don Corleone" },
        { src: "https://t.ctcdn.com.br/fQrkXz656XFnpNXyPZHBCAZDZ8c=/1024x0/smart/i386880.png", descricao: "Cena icônica do restaurante" }
      ]
    },
    {
      id: 2,
      titulo: "Interestelar",
      descricao: "Viagem espacial através de um buraco de minhoca.",
      detalhes: "Direção: Christopher Nolan | Ano: 2014 | Prêmios: Oscar de Efeitos Visuais\nUma jornada épica através do espaço em busca de um novo lar para a humanidade.",
      imagem: "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
      destaque: true, // NOVO CAMPO
      imagens_complementares: [ // NOVO CAMPO
        { src: "https://cdn.culturagenial.com/imagens/interestelar-gargantua-cke.jpg?class=article", descricao: "Cena da nave Endurance" },
        { src: "https://s2-techtudo.glbimg.com/n88U7XfMlsCb0jXxdVdFCJTO4-U=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/6/H/xIprUBTb6T1OR2SOaBDg/mv5bmtayoti5mtg5mdfeqtjeqwpwz15bbwu4mdyymjg4mtmx.-v1-.jpg", descricao: "Matthew McConaughey como Cooper" }
      ]
    },
    {
      id: 3,
      titulo: "Parasita",
      descricao: "Uma família pobre que se infiltra na casa de uma família rica.",
      detalhes: "Direção: Bong Joon-ho | Ano: 2019 | Prêmios: 4 Oscars\nUma sátira social brilhante que mistura comédia e suspense.",
      imagem: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      destaque: false, // NOVO CAMPO
      imagens_complementares: [ // NOVO CAMPO
        { src: "https://lh5.googleusercontent.com/tPpQP78hu2buLmflGCleDek9pf3Bm9N57W9LOQGYhgHcldF8fsSHXqKgslwnZ_z_6_cu8JhlG1kXVnOz-MdKdhMew1sGZXA_jhLjUjCqp3yxr_9L2moSBCuxpWWBVo316fYOomA1", descricao: "Cena da família no sofá" },
        { src: "https://i0.wp.com/imagens.formigaeletrica.com.br/2019/11/parasita-imagem-2.jpg?resize=800%2C295&ssl=1", descricao: "Cena da festa de aniversário" }
      ]
    },
    {
      id: 4,
      titulo: "Blade Runner 2049",
      descricao: "Um caçador de andróides descobre um segredo que ameaça a sociedade.",
      detalhes: "Direção: Denis Villeneuve | Ano: 2017 | Prêmios: 2 Oscars",
      imagem: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg",
      destaque: true, // NOVO CAMPO
      imagens_complementares: [ // NOVO CAMPO
        { src: "https://screenmusings.org/movie/blu-ray/Blade-Runner-2049/images/Blade-Runner-2049-1490.jpg", descricao: "Ryan Gosling como K" },
        { src: "https://images.theconversation.com/files/190029/original/file-20171012-31386-1l6tlgf.jpg?ixlib=rb-4.1.0&q=30&auto=format&w=600&h=353&fit=crop&dpr=2", descricao: "Cena da cidade futurista" }
      ]
    },
    {
      id: 5,
      titulo: "Duna",
      descricao: "Uma jornada épica no planeta desértico de Arrakis.",
      detalhes: "Direção: Denis Villeneuve | Ano: 2021 | Prêmios: 6 Oscars",
      imagem: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      destaque: false, // NOVO CAMPO
      imagens_complementares: [ // NOVO CAMPO
        { src: "https://img.odcdn.com.br/wp-content/uploads/2022/12/timothee-chalamet-duna-filmagens-instagram.jpg", descricao: "Timothée Chalamet como Paul Atreides" },
        { src: "https://super.abril.com.br/wp-content/uploads/2024/03/1203-vermes-areia-duna-site.jpg?quality=70&strip=info&w=1024&h=682&crop=1", descricao: "Cena do deserto de Arrakis" }
      ]
    }
  ];
  
  const homeView = document.getElementById('home-view');
  const detailView = document.getElementById('detail-view');
  const movieList = document.getElementById('movieList');
  const movieDetails = document.getElementById('movieDetails');
  const searchContainer = document.getElementById('search-container');
  const tituloPagina = document.getElementById('titulo-pagina');
  
  function renderizarFilmes(lista = filmes) {
    movieList.innerHTML = lista.map(filme => `
      <div class="movie-card" onclick="mostrarDetalhes(${filme.id})">
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <div class="movie-info">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
        </div>
      </div>
    `).join('');
  }
  
  function mostrarDetalhes(id) {
    const filme = filmes.find(f => f.id == id);
    if (filme) {
      homeView.style.display = 'none';
      searchContainer.style.display = 'none';
      detailView.style.display = 'block';
      tituloPagina.textContent = filme.titulo;
      
      movieDetails.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <h2>${filme.titulo}</h2>
        <p>${filme.descricao}</p>
        <pre>${filme.detalhes}</pre>
        <!-- NOVA SEÇÃO DE IMAGENS (ÚNICA ALTERAÇÃO AQUI) -->
        <div class="galeria">
          <h3>Galeria</h3>
          <div class="galeria-imagens">
            ${filme.imagens_complementares.map(img => `
              <img src="${img.src}" alt="${img.descricao}" title="${img.descricao}">
            `).join('')}
          </div>
        </div>
      `;
    }
  }
  
  function voltarParaHome() {
    homeView.style.display = 'block';
    searchContainer.style.display = 'flex';
    detailView.style.display = 'none';
    tituloPagina.textContent = 'Catálogo de Filmes';
  }
  
  function buscarFilme() {
    const termo = document.getElementById('searchInput').value.toLowerCase();
    const resultado = filmes.filter(filme => 
      filme.titulo.toLowerCase().includes(termo) || 
      filme.descricao.toLowerCase().includes(termo)
    );
    renderizarFilmes(resultado);
  }
  
  function criarCarrossel() {
    const destaques = filmes.filter(filme => filme.destaque);
    const carrossel = document.getElementById('carrossel-destaques');
    
    if (destaques.length > 0) {
      carrossel.innerHTML = `
        <h2 class="titulo-secao">Filmes em Destaque</h2>
        <div class="carrossel-container">
          ${destaques.map(filme => `
            <div class="destaque-item" onclick="mostrarDetalhes(${filme.id})">
              <img src="${filme.imagem}" alt="${filme.titulo}">
              <div class="destaque-info">
                <h3>${filme.titulo}</h3>
                <p>${filme.descricao}</p>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      carrossel.style.display = 'none';
    }
  }
  
  window.onload = () => {
    criarCarrossel(); // NOVA LINHA
    renderizarFilmes();
    
    document.getElementById('searchInput').addEventListener('keyup', (e) => {
      if (e.key === 'Enter') buscarFilme();
    });
  };
  
  window.buscarFilme = buscarFilme;
  window.voltarParaHome = voltarParaHome;
  window.mostrarDetalhes = mostrarDetalhes;
