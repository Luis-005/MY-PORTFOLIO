document.addEventListener('DOMContentLoaded', () => {
    const piedraBtn = document.getElementById('piedra');
    const papelBtn = document.getElementById('papel');
    const tijeraBtn = document.getElementById('tijera');
    const resultadoElement = document.getElementById('resultado');

    piedraBtn.addEventListener('click', () => jugar('piedra'));
    papelBtn.addEventListener('click', () => jugar('papel'));
    tijeraBtn.addEventListener('click', () => jugar('tijera'));

    function jugar(opcionUsuario) {
        const opciones = ['piedra', 'papel', 'tijera'];
        const opcionComputadora = opciones[Math.floor(Math.random() * 3)];

        resultadoElement.textContent = `Elegiste ${opcionUsuario}. La computadora eligió ${opcionComputadora}.`;

        if (opcionUsuario === opcionComputadora) {
            resultadoElement.textContent += ' Es un empate.';
        } else if (
            (opcionUsuario === 'piedra' && opcionComputadora === 'tijera') ||
            (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
            (opcionUsuario === 'tijera' && opcionComputadora === 'papel')
        ) {
            resultadoElement.textContent += ' ¡Ganaste!';
        } else {
            resultadoElement.textContent += ' ¡La computadora ganó!';
        }
    }
});
