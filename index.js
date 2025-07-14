// Verifica se o navegador é o Safari
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Exibe o popup se estiver no Safari
if (isSafari) {
    window.onload = function() {
        alert("Para ter a experiencia  pretendida, considere usar Chrome, Firefox, ou Edge.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var currentSectionIndex = 0;
    var sections = document.querySelectorAll(".conteudo");
    var button = document.querySelector(".botao2");
    var buttonB = document.querySelector(".botao3");

    button.addEventListener("click", function () {
        // Oculta a seção atual
        sections[currentSectionIndex].style.display = "none";

        // Avança para a próxima seção
        currentSectionIndex++;
        
        // Se todas as seções foram exibidas, reinicia do início
        if (currentSectionIndex >= sections.length) {
            currentSectionIndex = 4;
        }

        // Exibe a próxima seção
        sections[currentSectionIndex].style.display = "block";
    });

    buttonB.addEventListener("click", function () {
        // Oculta a seção atual
        sections[currentSectionIndex].style.display = "none";

        // Avança para a próxima seção
        currentSectionIndex--;
        
        // Se todas as seções foram exibidas, reinicia do início
        if (currentSectionIndex >= sections.length) {
            currentSectionIndex = 0;
        }

        // Exibe a próxima seção
        sections[currentSectionIndex].style.display = "block";
    });

    button.addEventListener("click", function () {
        document.querySelector(".botao3").style.display="block";
});
buttonB.addEventListener("click", function () {
    if(currentSectionIndex==0){
        document.querySelector(".botao3").style.display="none";
    }
    
});
});

//footer
document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".botao1");

    button.addEventListener("click", function () {
        if (button.textContent === "Back") {
            // Reverter as alterações
            document.querySelector(".botao1").textContent = "About";
            document.querySelector(".fp").style.display = "none";
            document.querySelector(".identificacao").style.display = "none";

            setTimeout(function () {
            document.querySelector(".botao1").style.bottom = "";
            document.querySelector(".botao1").style.top = "";
        }, 600);
            document.querySelector("footer").style.height = "";
            setTimeout(function () {
            document.querySelector("footer").style.display = "none";
            }, 600);
        } else {
            // Aplicar as alterações
            document.querySelector(".botao1").textContent = "Back";
            document.querySelector(".botao1").style.bottom = "93%";
            document.querySelector("footer").style.display = "flex";

            // Adicionar atrasos para as alterações
            setTimeout(function () {
                document.querySelector(".botao1").style.top = "10px";
            }, 600);

            setTimeout(function () {
                document.querySelector("footer").style.height = "85vh";
            }, 500);

            setTimeout(function () {
                document.querySelector(".fp").style.display = "flex";
            }, 800);

            setTimeout(function () {
                document.querySelector(".identificacao").style.display = "flex";
            }, 900);
        }
    });
});

//mudança de tamanho e cores
document.addEventListener("DOMContentLoaded", function () {
    var tituloSpans = document.querySelector(".titulo").getElementsByTagName("span");
    var textSpans = document.querySelector(".texto").getElementsByTagName("span");

function getRandomColor() {
    var colors = ["red","orange", "yellow"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function applyRandomColor(span) {
    span.style.color = getRandomColor();
}

// Adiciona manipuladores de evento para aplicar cores aleatórias ao passar o mouse
for (var k = 0; k < tituloSpans.length; k++) {
    tituloSpans[k].addEventListener("mouseenter", function () {
        applyRandomColor(this);
    });

    tituloSpans[k].addEventListener("mouseleave", function () {
        this.style.color = "white";
    });
}
    for (var k = 0; k < textSpans.length; k++) {
        textSpans[k].addEventListener("mouseenter", function () {
            applyRandomColor(this);
        });

        textSpans[k].addEventListener("mouseleave", function () {
        this.style.color = "white";
    });
}

});