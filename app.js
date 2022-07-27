const txtUsuario= document.querySelector("#usuario");
const txtPwd= document.querySelector("#pwd");
const boton= document.querySelector("#boton");

boton.addEventListener('click', ()=> {
    login()
})

function login() {
    const usuar= usuarios.filter(usu => usu.usuario==txtUsuario.value && usu.pwd==txtPwd.value);
    eliminarTodosItem();
    if (usuar.length > 0) {
        const cta= cuentas.filter(ct => ct.id==usuar[0].id);
        addItem('usuario', txtUsuario.value);
        addItem('id', usuar[0].id);
        if (cta.length>0)
            addItem('saldo', cta[0].saldo);
        else
            addItem('saldo', 0);

        window.location.href = "principal.html";
    } else {
        swal('Usuario y/o contraseña incorrecto')
    }
}