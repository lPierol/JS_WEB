class Producto {
    constructor (nombre, precio, id) {
      this.nombre = nombre;
      this.precio = precio;
      this.id = id
    }
  }
  
  const remera = new Producto ("Remera Vatic", 2500, 1);
  const pantalon = new Producto ("Pantalon", 8000, 2);
  const gorra = new Producto ("Gorra", 3000, 3);
  const medias = new Producto ("Medias", 1500, 4);
  
  const articulos = [remera, pantalon, gorra, medias];
  
  const arrayProductos = [];
  
  function elegirProducto () {
    let eleccionUser = parseInt(prompt("Escriba el número del producto que desea: "));
    let productoElegido = articulos.find (el => el.id === eleccionUser);
    console.log(productoElegido);
    if (productoElegido === undefined) {
      alert("Ingrese un número válido por favor");
      elegirProducto();
    }
    arrayProductos.push(productoElegido.precio);
  }
  
  function finalizarCompra () {
    let totalPrecio = arrayProductos.reduce((acumulador, producto) => acumulador + producto, 0);
    alert("El total de su compra es " + totalPrecio + "$")
    alert("Gracias por elegir nuestra tienda para adquirir ropa =)")
  };