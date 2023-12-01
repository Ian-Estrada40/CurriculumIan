 lenguajes = ['Python', 'java', 'c#','JavaScrip']

 estudiantes; 

function imprimeForbasico(_lenguajes){
    var salida= ''
    for(var i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + '\n'
    }
    alert(salida)
 }

function imprimeFor(_lenguajes){
    salida= ''
    for(i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + ' se encuentra en el indice ' + i + '\n'
    }
    alert(salida)
 }

function imprimeForechbasico(_lenguajes){
    var salida=''
    _lenguajes.forEach(element => 
        salida += element + '\n'
    )
    alert(salida)
}

function imprimeForech(_lenguajes){
    salida=''
    _lenguajes.forEach(function (_valor, _indice){
        salida += _valor + ' se encuentra en el indice ' + _indice + '\n'
        })

    alert(salida)
}

function tamañoArreglo(_lenguajes){
  var salida =lenguajes.length

  alert(salida)
}

function muestraElemento(){
  var salida = ''
  var elemento = prompt("Ingrese el indice del elemeto a recueperar: ");
  if(elemento < lenguajes.length){
    salida = lenguajes[elemento]
  }else{
    salida = 'El arreglo solo tiene ' + lenguajes.length + ' elige un indice difrente a ' + elemento
  }
  alert(salida)
}

function mostrarMenu(){
    var opcion = prompt('Seleccione una opción:' + 
    '\n1. Imprimir lenguajes con "for" básico.'+
    '\n2. Imprimir lenguajes con "for" y su índice.' + 
    '\n3. Imprimir lenguajes con "forEach" básico.'+
    '\n4. Imprimir lenguajes con "forEach" y su índice.' + 
    '\n5. Imprimir tamaño de arreglo.' +
    '\n4. Recuperar el elemeto del arreglo.' +
    '\nIngrese el número de la opción:');
  switch (opcion) {
    case '1':
      imprimeForbasico(lenguajes);
      break;
    case '2':
      imprimeFor(lenguajes);
      break;
    case '3':
      imprimeForechbasico(lenguajes);
      break;
    case '4':
      imprimeForech(lenguajes);
      break;
    case '5':
      tamañoArreglo(lenguajes);
      break;
    case '6':
        muestraElemento();
        break;
    default:
      alert('Opción inválida. Seleccione otra opción.');
      break;
  }
}

mostrarMenu()