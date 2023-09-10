let saldo = 1000000;

document.addEventListener('DOMContentLoaded', () => {
    const saldoElement = document.getElementById('saldo');
    const consultarBtn = document.getElementById('consultar');
    const depositarBtn = document.getElementById('depositar');
    const retirarBtn = document.getElementById('retirar');
    const salirBtn = document.getElementById('salir');

    consultarBtn.addEventListener('click', () => {
        saldoElement.textContent = `$${saldo}`;
    });

    depositarBtn.addEventListener('click', () => {
        const monto = parseFloat(prompt('Ingrese la cantidad a depositar:'));
        if (!isNaN(monto)) {
            saldo += monto;
            saldoElement.textContent = `$${saldo}`;
        } else {
            alert('Por favor, ingrese un monto válido.');
        }
    });

    retirarBtn.addEventListener('click', () => {
        const monto = parseFloat(prompt('Ingrese la cantidad a retirar:'));
        if (!isNaN(monto)) {
            if (monto <= saldo) {
                saldo -= monto;
                saldoElement.textContent = `$${saldo}`;
            } else {
                alert('Saldo insuficiente. No se pudo realizar la operación.');
            }
        } else {
            alert('Por favor, ingrese un monto válido.');
        }
    });

    salirBtn.addEventListener('click', () => {
        alert('Gracias por utilizar nuestro servicio. ¡Hasta pronto!');
    });
});
