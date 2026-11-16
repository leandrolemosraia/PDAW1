const jogos = {
    pokemon: {
        nome: "Pokemon FireRed",
        nota: "9,3/10",
        preco: "R$ 109,90",
        descricao: "Pokemon FireRed é um RPG no mapa de Kanto. O jogador pode explorar diferentes cidades, capturar Pokemon, enfrentar treinadores.",
        resenha: "Um dos jogos mais clássicos da franquia Pokemon, com exploração, batalhas por turnos, evolução dos Pokemon e uma grande variedade de criaturas.",
        imagem: "imagensJOGOS/PokemonFireRed.jpg"
    },
    mario: {
        nome: "Super Mario Bros",
        nota: "9,5/10",
        preco: "R$ 150,00",
        descricao: "Super Mario Bros é um jogo de plataforma clássico onde o jogador controla Mario para salvar a Princesa Peach.",
        resenha: "Um dos jogos mais icônicos da história dos videojogos, com desafios divertidos e uma jogabilidade que se tornou uma referência para muitos jogos subsequentes.",
        imagem: "imagensJOGOS/Mario.jfif"
    },
    pacman: {
        nome: "Pacman",
        nota: "9,0/10",
        preco: "R$ 10,99",
        descricao: "Pacman é um jogo de arcade clássico onde o jogador controla um personagem amarelo enquanto evita fantasmas.",
        resenha: "Um dos jogos mais icônicos da história dos videojogos, com uma jogabilidade simples mas envolvente e uma identidade visual distintiva.",
        imagem: "imagensJOGOS/Pacman.png"
    },
    assasins: {
        nome: "Assassin's Creed Shadows",
        nota: "9,5/10",
        preco: "R$ 349,99",
        descricao: "Assassin's Creed Shadows é um jogo de ação e aventura ambientado na era dos samurais. O jogador assume o papel de um assassino habilidoso em um mundo aberto.",
        resenha: "O jogo oferece uma experiência imersiva com combates intensos, exploração de um mundo aberto e uma narrativa envolvente que mistura história e ficção.",
        imagem: "imagensJOGOS/Assassins_Creed_Shadows.jpg"
    },
    eld: {
        nome: "Elden Ring",
        nota: "9,8/10",
        preco: "R$ 249,99",
        descricao: "Elden Ring é um RPG de ação em mundo aberto desenvolvido pela FromSoftware. O jogador explora um vasto mundo cheio de desafios e inimigos poderosos.",
        resenha: "O jogo é conhecido por sua dificuldade, combate estratégico e exploração profunda. Com uma narrativa envolvente e um mundo interconectado.",
        imagem: "imagensJOGOS/Elden_Ring.jpg"
    },
    rdr: {
        nome: "Read Dead Redemption 2",
        nota: "9,7/10",
        preco: "R$ 249,99",
        descrição: "Read Dead redemption 2 é um jogo de mundo aberto ambientado no velho oeste. O seu personagem principal é Arthur Morgan, fora da lei e membro de uma gangue.",
        resenha: "O jogo tem uma boa narrativa com bom gráficos e mecânicas únicas com um mundo aberto muito rico em detalhes.",
        imagem: "imagensJOGOS/RDR2.jpg"
    },
    mhunter: {
        nome: "Monster Hunter Wilds",
        nota: "9,7/10",
        preco: "R$ 169,99",
        descrição: "Monster Hunter Wilds é um jogo de ação e aventura onde os jogadores assumem o papel de caçadores de monstros em um mundo selvagem.",
        resenha: "O jogo oferece uma experiência de caça intensa com mecânicas de combate estratégico e uma variedade de monstros para enfrentar.",
        imagem: "imagensJOGOS/Monster_Hunter_Wilds.png"
    },
    pokemonEmerald: {
        nome: "Pokemon Emerald",
        nota: "9,5/10",
        preco: "R$ 249,99",
        descrição: "Pokemon Emerald é um jogo de RPG da série Pokemon que oferece uma experiência envolvente com novos personagens e uma narrativa aprimorada.",
        resenha: "O jogo mantém o espírito da série original enquanto adiciona novos elementos e desafios para os fãs.",
        imagem: "imagensJOGOS/Pokemon_Emerald.jpg"
    },
    cs: {
        nome: "Counter Strike",
        nota: "9,6/10",
        preco: "Grátis",
        descrição: "Counter Strike é um jogo de tiro em primeira pessoa focado em combates entre equipes. Os jogadores assumem o papel de terroristas ou contra-terroristas.",
        resenha: "O jogo é conhecido por sua jogabilidade competitiva, mapas estratégicos e uma comunidade ativa de jogadores.",
        imagem: "imagensJOGOS/CS2.jpg"
    },
 
    pjctzomboid: {
        nome: "Project Zomboid",
        nota: "9,4/10",
        preco: "R$ 80,00",
        descrição: "Project Zomboid é um jogo de sobrevivência em mundo aberto onde os jogadores devem sobreviver a um apocalipse zumbi.",
        resenha: "O jogo oferece uma experiência desafiadora com mecânicas de sobrevivência, construção de abrigos e combate contra hordas de zumbis.",
        imagem: "imagensJOGOS/Project_Zomboid.jpg"
    },
    Terraria: {
        nome: "Terraria",
        nota: "9,5/10",
        preco: "R$ 49,99",
        descricao: "Terraria mistura exploração, construção, sobrevivência e combate em um mundo 2D gerado proceduralmente.",
        resenha: "A enorme quantidade de possibilidades torna Terraria um jogo bastante aberto e exploratório.",
        imagem: "imagensJOGOS/Terraria.png"
    },
    needfor: {
        nome: "Need for Speed Heat",
        nota: "8,5/10",
        preco: "R$ 129,99",
        descricao: "Need for Speed Heat é um jogo de corrida que mistura corridas oficiais durante o dia com disputas ilegais durante a noite.",
        resenha: "Um jogo focado em velocidade, personalização de carros e corridas em mundo aberto.",
        imagem: "imagensJOGOS/Need_for_Speed_Heat.png"

    },
    gtav: {
        nome: "Grand Theft Auto V",
        nota: "9,5/10",
        preco: "R$ 89,90",
        descricao: "GTA V apresenta um enorme mundo aberto e acompanha três protagonistas com histórias conectadas.",
        resenha: "O mundo aberto, a variedade de atividades e a campanha são alguns dos principais elementos do jogo.",
        imagem: "imagensJOGOS/Grand_Theft_Auto_V.png"
    },
    forza: {
        nome: "Forza Horizon 6",
        nota: "9,0/10",
        preco: "R$ 149,99",
        descricao: "Forza Horizon 6 é um jogo de corrida em mundo aberto focado em carros, exploração e competição.",
        resenha: "Uma experiência voltada para quem gosta de dirigir, explorar e personalizar veículos.",
        imagem: "imagensJOGOS/Forza_Horizon_6.jpg"
    },
    dmc5: {
        nome: "Devil May Cry 5",
        nota: "9,2/10",
        preco: "R$ 49,99",
        descricao: "Devil May Cry 5 é um jogo de ação focado em combates rápidos e estilizados contra diversos inimigos.",
        resenha: "O sistema de combate é o grande destaque, permitindo criar sequências de ataques bastante variadas.",
        imagem: "imagensJOGOS/Devil_May_Cry_5.jpg"
    },
    ark: {
        nome: "ARK: Survival Ascended",
        nota: "8,5/10",
        preco: "R$ 150,00",
        descricao: "ARK: Survival Ascended coloca o jogador em um ambiente selvagem onde é necessário sobreviver, construir e domesticar criaturas.",
        resenha: "A possibilidade de explorar o mundo e interagir com diversas criaturas é um dos principais atrativos.",
        imagem: "imagensJOGOS/Ark_Survival_Ascended.jpg"
    },
    bf: {
        nome: "Battlefield 1",
        nota: "9,0/10",
        preco: "R$ 149,99",
        descricao: "Battlefield 1 é um jogo de tiro em primeira pessoa ambientado na Primeira Guerra Mundial.",
        resenha: "O jogo se destaca pelas grandes batalhas, veículos e mapas amplos.",
        imagem: "imagensJOGOS/Battlefield_1.png"
    },
    metro: {
        nome: "Metro Exodus",
        nota: "9,0/10",
        preco: "R$ 49,99",
        descricao: "Metro Exodus é um jogo de tiro e sobrevivência ambientado em um mundo pós-apocalíptico.",
        resenha: "A combinação de exploração, combate e sobrevivência cria uma experiência bastante imersiva.",
        imagem: "imagensJOGOS/Metro_Exodus.png"


    },
    spiderman: {
        nome: "Spider-Man 2",
        nota: "9,2/10",
        preco: "R$ 249,99",
        descricao: "Spider-Man 2 coloca o jogador no controle de Peter Parker e Miles Morales em uma aventura pela cidade de Nova York.",
        resenha: "O deslocamento pela cidade e os combates são alguns dos pontos centrais da experiência.",
        imagem: "imagensJOGOS/Spider-Man_2_2023.jpg"
    },
    nomansky: {
        nome: "No Man's Sky",
        nota: "9,0/10",
        preco: "R$ 189,99",
        descricao: "No Man's Sky permite explorar um universo praticamente infinito com planetas, criaturas e recursos diferentes.",
        resenha: "Um jogo focado em exploração, sobrevivência, construção e descoberta.",
        imagem: "imagensJOGOS/No_man_sky.jpg"
    },
    factorio: {
        nome: "Factorio",
        nota: "9,5/10",
        preco: "R$ 49,99",
        descricao: "Factorio é um jogo de estratégia e automação no qual o jogador constrói e administra uma fábrica cada vez mais complexa.",
        resenha: "A evolução gradual das fábricas e a necessidade de otimizar processos são o grande destaque.",
        imagem: "imagensJOGOS/factorio.jpg"
    },
    minecraft: {
        nome: "Minecraft",
        nota: "9,0/10",
        preco: "R$ 119,99",
        descricao: "Minecraft é um jogo de sobrevivência e construção no qual o jogador explora um mundo gerado proceduralmente.",
        resenha: "A liberdade criativa e a possibilidade de construir qualquer coisa são os principais destaques.",
        imagem: "imagensJOGOS/minecraft.jfif"
    },

    tetris: {
        nome: "Tetris",
        nota: "9,0/10",
        preco: "R$ 49,99",
        descricao: "Tetris é um jogo de quebra-cabeça no qual o jogador organiza peças em linhas para eliminá-las.",
        resenha: "Um clássico que se mantém popular por sua simplicidade e desafio constante.",
        imagem: "imagensJOGOS/Tetris.jfif"
    },
};

const modal = document.getElementById("modal-jogo");
const botaoFechar = document.getElementById("fecharModal");

const modalTitle = document.getElementById("modal-title");
const modalRating = document.getElementById("modal-rating");
const modalDescription = document.getElementById("modal-description");
const modalReview = document.getElementById("modal-review");
const modalPreco = document.getElementById("modal-preco");
const modalImage = document.getElementById("modal-image");

const cards = document.querySelectorAll(".card-jogo");
const cardsjogavel = document.querySelectorAll(".card-jogavel");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const idJogo = card.getAttribute("data-jogo");

        const infoJogo = jogos[idJogo];

        if (infoJogo) {
            modalTitle.textContent = infoJogo.nome;
            modalRating.textContent = infoJogo.nota;
            modalPreco.textContent = infoJogo.preco || "Preço não disponível"; // Caso não tenha preço, mostra uma mensagem padrão

           
            modalDescription.textContent = infoJogo.descricao || infoJogo.descrição;
            modalReview.textContent = infoJogo.resenha;
            modalImage.src = infoJogo.imagem;
            modalImage.alt = "Capa de " + infoJogo.nome;

            modal.showModal();
            favoritarJogo(idJogo);
        }
    });
});


botaoFechar.addEventListener("click", () => {
    modal.close();
});


modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const clicouFora = (
        event.clientY < rect.top ||
        event.clientY > rect.bottom ||
        event.clientX < rect.left ||
        event.clientX > rect.right
    );
    if (clicouFora) {
        modal.close();
    }
});

//Conversão para dolar

(() => {
  let emDolar = false;
  let cotacaoDolar = 5.67;

  async function atualizarCotacaoDolar() {
    try {
      const resposta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
      if (!resposta.ok) return;
      const dados = await resposta.json();
      const valorApi = parseFloat(dados?.USDBRL?.bid);
      if (!Number.isNaN(valorApi) && valorApi > 0) {
        cotacaoDolar = valorApi;
      }
    } catch (_) {
    }
  }

  function extrairValorEmReal(texto) {
    const limpo = texto
      .replace(/R\$/gi, '')
      .replace(/\s+/g, '')
      .replace(/\./g, '')
      .replace(',', '.');
    return parseFloat(limpo);
  }

  function formatarParaDolar(valorEmReal) {
    const convertido = valorEmReal / cotacaoDolar;
    return `US$ ${convertido.toFixed(2).replace('.', ',')}`;
  }

  function obterElementoPreco(container) {
    const seletorDireto = container.querySelector('.preco, .card-preco, [data-preco]');
    if (seletorDireto) return seletorDireto;

    const candidatos = container.querySelectorAll('span, p, strong, small, div');
    for (const el of candidatos) {
      if (el.children.length === 0) {
        const texto = el.textContent.trim();
        if (/^(R\$|US:)/i.test(texto)) {
          return el;
        }
      }
    }
    return null;
  }

  function aplicarMoedaNoElemento(elementoPreco) {
    if (!elementoPreco) return;

    if (!elementoPreco.dataset.precoBrl) {
      elementoPreco.dataset.precoBrl = elementoPreco.textContent.trim();
    }

    const textoOriginal = elementoPreco.dataset.precoBrl;

    if (!emDolar) {
      elementoPreco.textContent = textoOriginal;
      return;
    }

    const valorNumerico = extrairValorEmReal(textoOriginal);
    if (Number.isNaN(valorNumerico) || valorNumerico <= 0) {
      elementoPreco.textContent = textoOriginal;
      return;
    }

    elementoPreco.textContent = formatarParaDolar(valorNumerico);
  }

  function atualizarPrecosNaTela() {
    const cards = document.querySelectorAll('.card-jogo');
    cards.forEach((card) => {
      const elementoPreco = obterElementoPreco(card);
      aplicarMoedaNoElemento(elementoPreco);
    });

    const modal = document.getElementById('modal-jogo');
    if (modal) {
      const precoModal = obterElementoPreco(modal);
      if (precoModal) {
        if (!emDolar && precoModal.dataset.precoBrl) {
          precoModal.textContent = precoModal.dataset.precoBrl;
        } else if (emDolar) {
          const textoAtual = precoModal.textContent.trim();
          if (/^R\$/i.test(textoAtual)) {
            precoModal.dataset.precoBrl = textoAtual;
          }
          aplicarMoedaNoElemento(precoModal);
        }
      }
    }
  }

  function configurarObservadorModal() {
    const modal = document.getElementById('modal-jogo');
    if (!modal) return;

    const observador = new MutationObserver(() => {
      if (!emDolar) return;
      const precoModal = obterElementoPreco(modal);
      if (!precoModal) return;
      const textoAtual = precoModal.textContent.trim();
      if (/^R\$/i.test(textoAtual)) {
        precoModal.dataset.precoBrl = textoAtual;
        aplicarMoedaNoElemento(precoModal);
      }
    });

    observador.observe(modal, {
      attributes: true,
      attributeFilter: ['open'],
      childList: true,
      subtree: true
    });
  }

  function iniciarConversorMoeda() {
    const botaoMoeda = document.getElementById('btn-converter-moeda');
    if (!botaoMoeda) return;

    atualizarCotacaoDolar();
    configurarObservadorModal();

    botaoMoeda.addEventListener('click', () => {
      emDolar = !emDolar;
      botaoMoeda.setAttribute('aria-pressed', String(emDolar));
      botaoMoeda.classList.toggle('ativo-usd', emDolar);
      botaoMoeda.textContent = emDolar ? 'US$ | R$' : 'R$ | US$';
      atualizarPrecosNaTela();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarConversorMoeda);
  } else {
    iniciarConversorMoeda();
  }
})();


function favoritarJogo(idJogo) {
    const favoritar = document.getElementById("favoritarModal");

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // Atualiza o coração ao abrir o modal
    favoritar.textContent = favoritos.includes(idJogo) ? "♥" : "♡";

    // Evita adicionar vários eventos ao mesmo botão
    favoritar.onclick = () => {
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        if (favoritos.includes(idJogo)) {
            favoritos = favoritos.filter(id => id !== idJogo);
            favoritar.textContent = "♡";
        } else {
            favoritos.push(idJogo);
            favoritar.textContent = "♥";
        }

        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    };
}

function favoritarJogo(idJogo) {
    const favoritar = document.getElementById("favoritarModal");

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    favoritar.textContent = favoritos.includes(idJogo) ? "♥" : "♡";

    favoritar.onclick = () => {
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        if (favoritos.includes(idJogo)) {
            favoritos = favoritos.filter(id => id !== idJogo);
            favoritar.textContent = "♡";
        } else {
            favoritos.push(idJogo);
            favoritar.textContent = "♥";
        }

        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    };
}

// Mostrar somente os favoritos
function mostrarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    mostrandoFavoritos = !mostrandoFavoritos;


    document.getElementById("ver-favoritos").classList.toggle("ativo", mostrandoFavoritos);
    document.querySelectorAll(".card-jogo").forEach(card => {
        const idJogo = card.dataset.jogo;

        card.style.display = favoritos.includes(idJogo) ? "" : "none";
    });

    modal.close();
}

const botaoFavoritos = document.getElementById("ver-favoritos");

let mostrandoFavoritos = false;

botaoFavoritos.addEventListener("click", () => {

    mostrandoFavoritos = !mostrandoFavoritos;

    botaoFavoritos.classList.toggle("ativo", mostrandoFavoritos);

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    document.querySelectorAll(".card-jogo").forEach(card => {
        const idJogo = card.dataset.jogo;

        card.style.display = mostrandoFavoritos
            ? (favoritos.includes(idJogo) ? "" : "none")
            : "";
    });

    modal.close();
});