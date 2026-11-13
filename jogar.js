
document.addEventListener("DOMContentLoaded", function () {

    const jogosDisponiveis = {
        //ao adicionar o jogo, é necessário criar a pasta com o index.html dentro da pasta jogos
        pokemon: "jogos/pokemon/index.html",
        mario: "jogos/mario/index.html",
        pacman: "jogos/pacman/index.html",
        pokemonEmerald: "jogos/pokemonEmerald/index.html",
        minecraft: "jogos/mine/index.html",
        tetris: "jogos/tetris/index.html",
    };

    const botaoJogar = document.getElementById("btn-jogar");

  
    botaoJogar.addEventListener("click", function () {

        const idJogo = botaoJogar.dataset.jogo;

        if (jogosDisponiveis[idJogo]) {
            window.location.href = jogosDisponiveis[idJogo];
        }

    });

    // Aguarda a abertura do modal para verificar o jogo
    const modal = document.getElementById("modal-jogo");

    document.querySelectorAll(".card-jogo").forEach(card => {

        card.addEventListener("click", function () {

            const idJogo = this.dataset.jogo;

            if (jogosDisponiveis[idJogo]) {
                botaoJogar.dataset.jogo = idJogo;
                botaoJogar.style.display = "block";
            } else {
                botaoJogar.style.display = "none";
                botaoJogar.dataset.jogo = "";
            }

        });

    });

});
