class Cajero {
    constructor() {
      this.encendido = false;
      this.saldo = 0;
      this.contrasena = "1234";
    }
  
    verificarContrasena(contrasenaIngresada) {
      return contrasenaIngresada === this.contrasena;
    }
  
    encender() {
      this.encendido = true;
      return "Cajero encendido";
    }
  
    apagar() {
      this.encendido = false;
      return "Cajero apagado";
    }
  
    retirar(monto, contrasenaIngresada) {
      if (!this.encendido) {
        return "El cajero está apagado";
      }
      if (!this.verificarContrasena(contrasenaIngresada)) {
        return "Contraseña incorrecta";
      }
      if (this.saldo < monto) {
        return "No hay suficiente saldo disponible";
      }
      this.saldo -= monto;
      return `Retiraste ${monto}. Tu nuevo saldo es ${this.saldo}`;
    }
  
    depositar(monto, contrasenaIngresada) {
      if (!this.encendido) {
        return "El cajero está apagado";
      }
      if (!this.verificarContrasena(contrasenaIngresada)) {
        return "Contraseña incorrecta";
      }
      this.saldo += monto;
      return `Depositaste ${monto}. Tu nuevo saldo es ${this.saldo}`;
    }
  }
  
  let cajero = new Cajero();
  let resultado = document.getElementById("resultado");
  
  document.getElementById("encender").onclick = function () {
    resultado.textContent = cajero.encender();
  };
  
  document.getElementById("apagar").onclick = function () {
    resultado.textContent = cajero.apagar();
  };
  
  document.getElementById("retirar").onclick = function () {
    let monto = parseInt(document.getElementById("monto").value);
    let contrasenaIngresada = document.getElementById("contrasena").value;
    resultado.textContent = cajero.retirar(monto, contrasenaIngresada);
  };
  
  document.getElementById("depositar").onclick = function () {
    let monto = parseInt(document.getElementById("monto").value);
    let contrasenaIngresada = document.getElementById("contrasena").value;
    resultado.textContent = cajero.depositar(monto, contrasenaIngresada);
  };