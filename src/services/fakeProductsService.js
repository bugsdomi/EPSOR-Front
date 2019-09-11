const produits = [
  {
    id: 0,
    uuid: "03125012-cafe-f4ce-b00k-baabs10ffe9h8",
    name: "Vil-Coyote",
    price: 5000,
    type: "computer",
    enable: true
  },
  {
    id: 1,
    uuid: "03125012-cafe-f4ce-b00k-baabs10ffe0i9",
    name: "Juggernauth",
    price: 6400,
    type: "computer",
    enable: false
  },
  {
    id: 2,
    uuid: "03125012-cafe-f4ce-b00k-b00bs10ff2d4",
    name: "MSI GT73eVR 7RF Titan Pro",
    price: 2200,
    type: "portable",
    enable: true
  },
  {
    id: 3,
    uuid: "03125012-cafe-f4ce-b00k-baabs10ffe8g7",
    name: "Cube-Video",
    price: 2000,
    type: "micro-computer",
    enable: false
  },
  {
    id: 4,
    uuid: "03125012-cafe-f4ce-b00k-b00bs10ff1c3",
    name: "Macbook Pro 13’’",
    price: 1990,
    type: "computer",
    enable: true
  },
  {
    id: 5,
    uuid: "03125012-cafe-f4ce-b00k-baabs10ffe7f6",
    name: "Apocalypto",
    price: 7000,
    type: "computer",
    enable: true
  }
];

export function getProducts(){
  return produits;
}

export function getProductById(id){
  return produits.find(produit => produit.id === id)
}

// export function postProduct(product){
//   const newProduct = {
//     id    : product.id,
//     uuid  : product.uuid,
//     name  : product.name,
//     price : product.price,
//     type  : product.type,
//     enable: product.enable 
//   }

//   return produits.find(produit => produit.id === id)
// }




// Référence de la fake BDD
// {
//   id: 0,
//   uuid: "03125012-cafe-f4ce-b00k-baabs10ffe9h8",
//   name: "Vil-Coyote",
//   price: 5000,
//   type: "computer",
//   enable: true
// },
// {
//   id: 1,
//   uuid: "03125012-cafe-f4ce-b00k-baabs10ffe0i9",
//   name: "Juggernauth",
//   price: 6400,
//   type: "computer",
//   enable: false
// },
// {
//   id: 2,
//   uuid: "03125012-cafe-f4ce-b00k-b00bs10ff2d4",
//   name: "MSI GT73eVR 7RF Titan Pro",
//   price: 2200,
//   type: "portable",
//   enable: true
// },
// {
//   id: 3,
//   uuid: "03125012-cafe-f4ce-b00k-baabs10ffe8g7",
//   name: "Cube-Video",
//   price: 2000,
//   type: "micro-computer",
//   enable: false
// },
// {
//   id: 4,
//   uuid: "03125012-cafe-f4ce-b00k-b00bs10ff1c3",
//   name: "Macbook Pro 13’’",
//   price: 1990,
//   type: "computer",
//   enable: true
// },
// {
//   id: 5,
//   uuid: "03125012-cafe-f4ce-b00k-baabs10ffe7f6",
//   name: "Apocalypto",
//   price: 7000,
//   type: "computer",
//   enable: true
// }
