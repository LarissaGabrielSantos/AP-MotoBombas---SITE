 const header = document.querySelector('header');
            // Adiciona a classe 'transparent-header' logo no início
            if (window.scrollY === 0) {
                header.classList.add('transparent-header');
            }

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) { // Após rolar 50 pixels...
                    header.classList.remove('transparent-header');
                } else { // ...ou ao voltar para o topo
                    header.classList.add('transparent-header');
                }
            });
            document.addEventListener('DOMContentLoaded', function () {
                const typewriterElement = document.querySelector('.typewriter');
                const sloganElement = document.querySelector('.slogan');
                const h2Element = typewriterElement.parentElement;
                const text = typewriterElement.getAttribute('data-text');

                // Função principal que controla a animação
                function startTypewriterAnimation() {
                    // 1. Reseta o estado inicial
                    typewriterElement.innerHTML = '';
                    sloganElement.classList.remove('visible');
                    h2Element.classList.remove('typing-done');
                    let index = 0;

                    // 2. Função interna que escreve o texto letra por letra
                    function type() {
                        if (index < text.length) {
                            typewriterElement.innerHTML += text.charAt(index);
                            index++;
                            setTimeout(type, 150); // Velocidade da digitação
                        } else {
                            // 3. Quando a digitação termina, mostra o slogan
                            h2Element.classList.add('typing-done'); // Para o cursor de piscar
                            sloganElement.classList.add('visible'); // Mostra o slogan

                            // 4. Agenda a próxima animação para daqui a 5 segundos
                            setTimeout(startTypewriterAnimation, 5000); // 5000ms = 5 segundos
                        }
                    }

                    // Inicia a função de escrever
                    type();
                }

                // Inicia o ciclo da animação pela primeira vez
                startTypewriterAnimation();
            });