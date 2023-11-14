document.addEventListener('DOMContentLoaded', function () {
    function exibirPrompt() {
        let numberSecret = Math.floor(Math.random() * 1000) + 1;
        let maxShots = 7;

        for (let shots = 1; shots <= maxShots; shots++) {
            let shot = prompt('Tentativa ' + shots + ' de ' + maxShots + '\nDigite um número entre 1 e 1000');

            if (shot == numberSecret) {
                alert('Acertou!!');
                break;
            } else if (shot > numberSecret) {
                alert("Errou.. o número secreto é menor");
            } else {
                alert("Errou.. o número secreto é maior");
            }

            if (shots === maxShots) {
                alert('Suas tentativas acabaram. O número secreto era ' + numberSecret);
            }
        }
    }

    document.getElementById('alura-logo').addEventListener('click', exibirPrompt);
    document.getElementById('caelum-image').addEventListener('click', exibirPrompt);
});
