// Definición de la clase Nodo
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.derecha = null;
      this.izquierda = null;
    }
  }
  
  // Definición de la clase Árbol
  class Arbol {
    constructor() {
      this.raiz = null;
    }
  
    // Función para agregar un nodo al árbol
    agregar(valor) {
      const nodo = new Nodo(valor);
  
      if (this.raiz === null) {
        this.raiz = nodo;
        alert("Nodo agregado como raíz del árbol.");
      } else {
        this.agregarNodo(this.raiz, nodo);
      }
    }
  
    agregarNodo(nodoPadre, nodoNuevo) {
      if (nodoNuevo.valor < nodoPadre.valor) {
        if (nodoPadre.derecha === null) {
          nodoPadre.derecha = nodoNuevo;
          alert("Nodo agregado a la derecha.");
        } else {
          this.agregarNodo(nodoPadre.derecha, nodoNuevo);
        }
      } else {
        if (nodoPadre.izquierda === null) {
          nodoPadre.izquierda = nodoNuevo;
          alert("Nodo agregado a la izquierda.");
        } else {
          this.agregarNodo(nodoPadre.izquierda, nodoNuevo);
        }
      }
    }
  
    // Función para buscar un nodo en el árbol
    buscar(valor) {
      const encontrado = this.buscarNodo(this.raiz, valor);
      if (encontrado) {
        alert("Nodo encontrado en el árbol.");
      } else {
        alert("Nodo no encontrado en el árbol.");
      }
    }
  
    buscarNodo(nodo, valor) {
      if (nodo === null) {
        return false;
      }
  
      if (valor === nodo.valor) {
        return true;
      } else if (valor < nodo.valor) {
        return this.buscarNodo(nodo.derecha, valor);
      } else {
        return this.buscarNodo(nodo.izquierda, valor);
      }
    }
  
    // Función para eliminar un nodo del árbol
    eliminar(valor) {
      if (this.raiz === null) {
        alert("El árbol está vacío.");
        return;
      }
  
      let encontrado = false;
      let nodoPadre = null;
      let nodoActual = this.raiz;
  
      while (nodoActual !== null) {
        if (valor === nodoActual.valor) {
          encontrado = true;
          break;
        } else if (valor < nodoActual.valor) {
          nodoPadre = nodoActual;
          nodoActual = nodoActual.derecha;
        } else {
          nodoPadre = nodoActual;
          nodoActual = nodoActual.izquierda;
        }
      }
  
      if (!encontrado) {
        alert("Nodo no encontrado en el árbol.");
        return;
      }
  
      if (nodoActual.derecha === null && nodoActual.izquierda === null) {
        if (nodoPadre === null) {
          this.raiz = null;
        } else if (nodoActual === nodoPadre.derecha) {
          nodoPadre.derecha = null;
        } else {
          nodoPadre.izquierda = null;
        }
        alert("Nodo eliminado del árbol.");
      } else if (nodoActual.derecha === null) {
        if (nodoPadre === null) {
          this.raiz = nodoActual.izaquierda;
        } else if (nodoActual === nodoPadre.derecha) {
          nodoPadre.izquierda = nodoActual.izquierda;
        } else {
          nodoPadre.izquierda = nodoActual.izquierda;
        }
        alert("Nodo eliminado del árbol.");
      } else if (nodoActual.izquierda === null) {
        if (nodoPadre === null) {
          this.raiz = nodoActual.derecha;
        } else if (nodoActual === nodoPadre.derecha) {
          nodoPadre.derecha = nodoActual.derecha;
        } else {
          nodoPadre.izquierda = nodoActual.izquierda;
        }
        alert("Nodo eliminado del árbol.");
      }    else {
        const nodoReemplazo = this.encontrarNodoReemplazo(nodoActual);
        if (nodoPadre === null) {
          this.raiz = nodoReemplazo;
        } else if (nodoActual === nodoPadre.derecha) {
          nodoPadre.derecha = nodoReemplazo;
        } else {
          nodoPadre.izquierda = nodoReemplazo;
        }
        nodoReemplazo.derecha = nodoActual.derecha;
        alert("Nodo eliminado del árbol.");
      }
    }
  
    encontrarNodoReemplazo(nodo) {
      let nodoPadreReemplazo = nodo;
      let nodoReemplazo = nodo;
      let nodoActual = nodo.izquierda;
  
      while (nodoActual !== null) {
        nodoPadreReemplazo = nodoReemplazo;
        nodoReemplazo = nodoActual;
        nodoActual = nodoActual.derecha;
      }
  
      if (nodoReemplazo !== nodo.izquierda) {
        nodoPadreReemplazo.derecha = nodoReemplazo.derecha;
        nodoReemplazo.izquierda = nodo.izquierda;
      }
  
      return nodoReemplazo;
    }
  
     // Función para mostrar el árbol
     mostrarArbol() {
      if (this.raiz === null) {
        alert("El árbol está vacío.");
        return;
      }
  
      this.mostrarNodo(this.raiz, "", "");
    }
  
    mostrarNodo(nodo, prefijo, descripcion) {
      if (nodo === null) {
        return;
      }
  
      alert(prefijo + descripcion + nodo.valor);
  
      const prefijoDerecho = prefijo + "├─ (D) ";
      const prefijoIzquierdo = prefijo + "└─ (I) ";
  
      this.mostrarNodo(nodo.derecho, prefijoDerecho, "Nodo derecho: ");
      this.mostrarNodo(nodo.izquierdo, prefijoIzquierdo, "Nodo izquierdo: ");
    }
  }
  
  // Crear un objeto Árbol
  const arbol = new Arbol();
  
  // Función para mostrar el menú
  function mostrarMenu() {
    const opcion = prompt(
      `Seleccione una opción:
      1. Agregar nodo
      2. Buscar nodo
      3. Eliminar nodo
      4. Mostrar árbol
      5. Salir
      Ingrese el número de la opción seleccionada:`
    );
  
    switch (opcion) {
      case "1":
        const valorAgregar = prompt("Ingrese el valor del nodo a agregar:");
        arbol.agregar(parseInt(valorAgregar));
        mostrarMenu();
        break;
      case "2":
        const valorBuscar = prompt("Ingrese el valor del nodo a buscar:");
        arbol.buscar(parseInt(valorBuscar));
        mostrarMenu();
        break;
      case "3":
        const valorEliminar = prompt("Ingrese el valor del nodo a eliminar:");
        arbol.eliminar(parseInt(valorEliminar));
        mostrarMenu();
        break;
      case "4":
        arbol.mostrarArbol();
        mostrarMenu();
        break;
      case "5":
        alert("¡Hasta luego!");
        break;
      default:
        alert("Opción inválida. Por favor, seleccione una opción válida.");
        mostrarMenu();
        break;
    }
  }
  
  // Iniciar el programa mostrando el menú
  mostrarMenu();