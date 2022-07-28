const txtUsuario= document.querySelector("#usuario");
const txtPwd= document.querySelector("#pwd");
const boton= document.querySelector("#boton");

boton.addEventListener('click', ()=> {
    login2()
})

document.addEventListener('DOMContentLoaded', ()=> {
    txtUsuario.value= '';
    txtPwd.value='';
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

function login2() {
    let flag= false;
    let id=0;

    eliminarTodosItem();

    // validar si existe el usuario y clave
    usuarios.forEach(element => {
        if (element.usuario==txtUsuario.value && element.pwd==txtPwd.value)
        {
            flag= true;
            id= element.id;
        }
    });

    if (flag) {
        let flag2= false;
        let sald= 0;
        cuentas.forEach(element => {
            if (element.id==id)
            {
                flag2= true;
                sald= element.saldo;
            }
        });
        if (flag2) {
            addItem('usuario', txtUsuario.value);
            addItem('id', id);
            addItem('saldo', sald);
    
            window.location.href = "principal.html";
            }
        else
            swal('Cuenta No Encontrada');
    } else {
        swal('Usuario y/o contraseña incorrecto')
    }

    txtUsuario.value='';
    txtPwd.value='';
}