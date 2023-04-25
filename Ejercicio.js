//class Product Manager 
class ProductManager {
  constructor() {  // se define el constructor que devuelve un arreglo vacio
    this.products = []; //
  }


  getProducts() { // 
    return this.products;
  }


  addProduct(title, description, price, thumbnail, code, stock) { //Parametros requeridos para el arreglo, 
    if (this.products.some(product => product.code === code)) { //Verifica si existe un producto con el mismo codigo, si es asi devuelve "Codigo de producto repetido"
      throw new Error('Código de producto repetido');
    }   const id = Math.floor(Math.random() * 1000);// identifica un unico codigo, crea un nuevo objeto con sus parametros y lo envia a this.products
    const product = { id, title, description, price, thumbnail, code, stock };
    this.products.push(product);   
    return product; //devuelve el producto recien agregado  
  }


  getProductById(id) {
    const product = this.products.find(product => product.id === id); //el metodo find busca un producto con el mismo id
    if (!product) { // si el producto no coincide devuelve Producto no encontrado
      throw new Error('Producto no encontrado');
    }
    return product;
  }
}


const manager = new ProductManager();
console.log(manager.getProducts()); // []


const product = manager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
console.log(product); // { id: 123, title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }


console.log(manager.getProducts()); // [{ id: 123, title: 'producto prueba', description: 'Este es un producto prueba', price: 200, thumbnail: 'Sin imagen', code: 'abc123', stock: 25 }]

