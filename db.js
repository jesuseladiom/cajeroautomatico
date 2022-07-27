const cuentas= [
    {
        id: 1, nombre: 'jesus', saldo: 100
    },
    {
        id: 2, nombre: 'javier', saldo: 1010
    },
    {
        id: 3, nombre: 'diego', saldo: 1020
    }
]

const usuarios= [
    {id: 1 , usuario:'jesus', pwd:'1'},
    {id: 2 , usuario:'javier', pwd:'2'},
    {id: 3 , usuario:'diego', pwd:'3'}
]

//funciones localstorage

function addItem(key, item) {
    if (typeof item== 'string')
        localStorage.setItem(key, item);
    else
        localStorage.setItem(key, JSON.stringify(item));
}

//recuperar elementos del localStorage
/* function obtenerItem() {
    let nombre= localStorage.getItem('nombre');
    let array= json.parse(localStorage.getItem('array'));
    let asistente= json.parse(localStorage.getItem('asistentes'));
} */

function obtenerItem(key) {
    return localStorage.getItem(key);
}

function eliminarItem(key) {
    localStorage.removeItem(key);
}

function eliminarTodosItem() {
    localStorage.clear();
}
