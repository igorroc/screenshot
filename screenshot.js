console.log("importou o script");

// Espera 1 segundo antes de começar a importar o script
setTimeout(() => {
    console.log("Iniciando importação do html2canvas após 1 segundo");

    // Adiciona o script html2canvas na página
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "no-referrer";
    console.log("Configurou");

    script.onload = function () {
        console.log("html2canvas carregado");

        // Função para tirar a captura de tela
        function takeScreenshot() {
            html2canvas(document.body).then(canvas => {
                console.log("Printou");
                const dataUrl = canvas.toDataURL();
                const img = document.createElement('img');
                img.src = dataUrl;
                document.body.appendChild(img);
                console.log("Apareceu o print");
            }).catch(error => {
                console.error("Erro ao tirar o print: ", error);
            });
        }

        if (document.readyState === 'complete') {
            console.log("Página já carregada");
            setTimeout(takeScreenshot, 1000);
        } else {
            // Espera 1 segundo após o carregamento completo da página
            window.addEventListener('load', () => {
                console.log("Carregou");
                setTimeout(takeScreenshot, 1000);
            });
        }
    };

    script.onerror = function (event) {
        console.error("Erro ao carregar o script html2canvas: ", event);
    };

    document.head.appendChild(script);
    console.log("Adicionou o script");
}, 1000);
