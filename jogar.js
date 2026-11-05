document.addEventListener("DOMContentLoaded", function () {

    const botaoJogar = document.getElementById("btn-jogar");

    let jogoSelecionado = null;

    // Cadastro dos jogos disponíveis
    const jogos = {

        pokemon: {
            arquivo: "jogos/pokemon/index.html"
        },

        assasins: {
            arquivo: "jogos/assassins/index.html"
        },

        eld: {
            arquivo: "jogos/eldenring/index.html"
        },

        rdr: {
            arquivo: "jogos/reddead/index.html"
        },

        Terraria: {
            arquivo: "jogos/terraria/index.html"
        }

    };

    // Identifica o jogo selecionado
    document.querySelectorAll(".card-jogo").forEach(card => {

        card.addEventListener("click", function () {

            jogoSelecionado = this.dataset.jogo;

        });

    });

    // Abre o jogo em outro HTML
    botaoJogar.addEventListener("click", function () {

        if (!jogoSelecionado || !jogos[jogoSelecionado]) {

            alert("Este jogo ainda não está disponível!");

            return;
        }

        window.location.href = jogos[jogoSelecionado].arquivo;

    });

});