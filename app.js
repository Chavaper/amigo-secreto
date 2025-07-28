//Tareas                                    Done
//1. Capturar el nombre del amigo           [x]
//2. Añadir el amigo a la lista "amigos"    [x]
//3. Mostrar la lista en pantalla           [x]
//4. Elegir al azar un amigo de la lista    [x]

let amigos = [];
let amigosElegidos = [];
let intento = 0;
let listaHTML = document.getElementById('listaAmigos');
let resultadoHTML = document.getElementById('resultado');

function agregarAmigo(){
    //1. Capturar el nombre del amigo
    let amigo = document.getElementById('amigo');
    //2. Añadir el amigo a la lista "amigos"
    if( amigo.value.trim() == '' ) return;
    amigos.push(amigo.value.trim());
    
    //3. Mostrar la lista en pantalla
    mostrarLista()
    amigo.value = '';
}

function mostrarLista(){
    listaHTML.innerHTML = '';
    for( let nombre of amigos){
        let item = document.createElement('li');
        item.textContent = nombre;
        listaHTML.appendChild(item);
    }
}

function inicializacion(){
    listaHTML.innerHTML = ''; //para evitar duplicados
    amigosElegidos = [];
    intentos = 0;
}

//Esta función sortea de dos modos (descomentar el modo elegido):
//1. Cuando se elige un amigo, este se elimina de la lista
//2. Cuando se elige un amigo, este continúa en la lista
function sortearAmigo(){
    //Elegir un amigo al azar
    let elegido = amigos.at( Math.floor( Math.random()*amigos.length ) );
    
    //Modo 1: Si al sortear, el amigo elegido se elimina de la lista
    if( amigos.length == 0 ){ //caso base
        resultado.innerHTML = "Ya se sortearon todos los amigos"
        inicializacion();
        return;
    }
    amigos.splice( amigos.indexOf(elegido), 1 );
    mostrarLista();

    /*
    //Modo 2: Si al sortear, el amigo continúa en la lista
    if( intento == amigos.length ){ //caso base
        resultado.innerHTML = "Ya se sortearon todos los amigos"
        inicializacion();
        return;
    }
    intento++;
    */
    //Si ya fue elegido, elegir otro (aquí hay recursividad)
    if( amigosElegidos.includes(elegido) ) return sortearAmigo();
    
    resultadoHTML.innerHTML = elegido;
    amigosElegidos.push(elegido); //se agrega a la lista de elegidos al sorteado
}