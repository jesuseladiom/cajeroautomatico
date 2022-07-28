const boxResultado= document.querySelector("#resultado");
const boxMontos= document.querySelector("#montos");
const boxMensajes= document.querySelector("#mensajes");
const user= document.querySelector("#user");

let saldo= 0;

document.addEventListener('DOMContentLoaded', ()=> {
    if (obtenerItem('usuario')==null || obtenerItem('id')==null || obtenerItem('saldo')==null)
        window.location.href = "index.html";
    user.textContent= obtenerItem('usuario');
})

function consultar() {
    //alert('consultar')

    limpiarHTML();
    consultarSaldo();
}

function depositar() {
    limpiarHTML();

    // formulario
    const mensaje= document.createElement('div');
    saldo= obtenerItem('saldo');
    mensaje.classList.add('bg-secondary','text-white','border-danger','p-2','text-center');
    mensaje.innerHTML= `
    <div class="row">
        <div class="col">
            <label for="importe">Importe a Depositar</label>
            <input type="number" class="form-control" id="txtDeposito" 
            placeholder="Importe" aria-label="First Name"
            min="1" max="1000">
        </div>

        <div class="col d-flex align-items-end">
            <button type="submit" class="btn btn-success w-100" id="botonDepositar" onclick="btnDeposita()">Depositar</button>
        </div>
    </div>

    `;

    boxResultado.appendChild(mensaje);
}

function retirar() {
    limpiarHTML();

    // formulario
    const mensaje= document.createElement('div');
    saldo= obtenerItem('saldo');
    mensaje.classList.add('bg-secondary','text-white','border-danger','p-2','text-center');
    mensaje.innerHTML= `
    <div class="row">
        <div class="col">
            <label for="txtRetiro">Importe a Retirar</label>
            <input type="number" class="form-control" id="txtRetiro" 
            placeholder="Importe" aria-label="First Name"
            min="0" max="1000">
        </div>

        <div class="col d-flex align-items-end">
            <button type="submit" class="btn btn-success w-100" id="botonRetirar" onclick="btnRetira()">Retirar</button>
        </div>
    </div>

    `;

    boxResultado.appendChild(mensaje);
                     

}

function salir() {
    eliminarTodosItem();
    window.location.href = "index.html";
}

function limpiarHTML() {
    while (boxResultado.firstChild) {
        boxResultado.firstChild.remove();
    }

    limpiarMontos();

    limpiarMensajes();
}

function limpiarMontos(){
    while (boxMontos.firstChild) {
        boxMontos.firstChild.remove();
    }
}

function limpiarMensajes(){
    while (boxMensajes.firstChild) {
        boxMensajes.firstChild.remove();
    }
}

function consultarSaldo() {
    const mensaje= document.createElement('div');
    saldo= obtenerItem('saldo');
    mensaje.classList.add('bg-info','text-white','border-danger','p-4','text-center');
    mensaje.textContent= `El saldo del cliente es: ${saldo}`;

    boxResultado.appendChild(mensaje);
}


function btnDeposita() 
{
    const txtDeposito= document.querySelector("#txtDeposito");
    saldo= Number(obtenerItem('saldo'));
    if (saldo + Number(txtDeposito.value) > 990)
        mensajeAlerta("Se excede del limite superior de $990");
    else {
        if (Number(txtDeposito.value) > 0)
        {
            // actualiza saldo
            addItem('saldo', saldo + Number(txtDeposito.value));

            //informar en pantalla
            limpiarMontos();
            const mensaje= document.createElement('div');
            mensaje.classList.add('bg-success','text-white','border-danger','p-4','text-center');
            mensaje.textContent= `El monto ingresado es ${Number(txtDeposito.value)} y el nuevo saldo es ${saldo + Number(txtDeposito.value)}`;
        
            boxMontos.appendChild(mensaje);
        }
        else 
            mensajeAlerta("Debes de capturar numero mayor a 0");
           
    }

    txtDeposito.value='';

}

function btnRetira() 
{
    const txtRetirar= document.querySelector("#txtRetiro");
    saldo= Number(obtenerItem('saldo'));
    if (saldo - Number(txtRetirar.value) < 10)
        mensajeAlerta("Se excede del limite inferior de $10");
    else {
        if (Number(txtRetirar.value) > 0)
        {
            // actualiza saldo
            addItem('saldo', saldo - Number(txtRetirar.value));

            //informar en pantalla
            limpiarMontos();

            const mensaje= document.createElement('div');
            mensaje.classList.add('bg-success','text-white','border-danger','p-4','text-center');
            mensaje.textContent= `El monto ingresado es ${Number(txtRetirar.value)} y el nuevo saldo es ${saldo - Number(txtRetirar.value)}`;
        
            boxMontos.appendChild(mensaje);
        }
        else
            mensajeAlerta("Debes de capturar numero mayor a 0");
           
    }

    txtRetirar.value='';
}


function mensajeAlerta(mensaj) {

    limpiarMensajes()
    const mensaje= document.createElement('div');
    //mensaje.classList.add('bg-danger','text-white','border-danger','p-4','text-center');
    mensaje.innerHTML= `
    <div class="alert alert-danger" role="alert">
        ${mensaj}
    </div>
    `;

    boxMensajes.appendChild(mensaje);

}

