// import React, {Component} from 'react';

// Name ProductsList extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       userInput: '',
//       produits: this.props.produits
//     };

//     this.onChange = this.onChange.bind(this);
//     this.deleteProduct = this.deleteProduct.bind(this);
//   }

//   onChange(e){
//     this.setState({
//       userInput: e.target.value
//     });  
//   }


//   deleteProduct(e){
//     e.preventDefault();

//     const products = this.state.produits;
//     const index = products.indexOf(e.target.value);
//     console.log('index : ',index,' --- e : ',e)
//     products.splice(index,1);
//     this.setState({
//       produits: products
//     });
//   }

//   listProducts(){
//     return this.state.produits.map((product) => {
//       return(
//         <div key={product.id}>
//           Nom : {product.name} - Prix : {product.price} - Type : {product.type} - En vente : {product.enable}| <button onClick={this.deleteProduct}>X</button>
//         </div>
//       );
//     });
//   }


//   render(){
//     return(
//       <div>
//         <h1>Liste des produits</h1>
//         <div>
//           {this.listProducts()}
//         </div>
//           <button onClick={this.addProduct}>Créer un produit</button>
//       </div>
//     )
//   }
// }

// export default ProductsList;

import React, { Component } from 'react';
import { getProducts } from '../../services/fakeProductsService';

class ProductsList extends Component {
  state = {  
    produits : getProducts(),
  }

  renderProducts(){
    if (this.state.produits.length === 0){
      return <p>Il n'y a aucun produit actuellement</p>
    }

    return (
      this.state.produits.map(product => (
        <tr key={product.id}>
          <th className="text-center"  scope="row" >{ product.id }</th>
          <td className="text-right">{ product.price } €</td>
          <td className="text-center">{ product.type }</td>
          {this.getInSale(product.enable) }
        </tr>
      ))
  );
  }

  getInSale(enable){
    return enable ? <td className="text-center">En vente</td>
                  : <td className="table-danger text-center">hors-vente</td>;
  }

  render() { 
    return (
      <div>
        <h3 className="text-secondary text-center">Gestion des produits</h3>
        <table className="table table-striped table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th className="text-center" scope="col">N°</th>
              <th className="text-center" scope="col">Prix</th>
              <th className="text-center" scope="col">Type</th>
              <th className="text-center" scope="col">En vente</th>
            </tr>
          </thead>
          <tbody>
            {this.renderProducts()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductsList;