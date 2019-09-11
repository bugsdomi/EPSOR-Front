import React, { Component } from 'react';
import { getProducts } from '../../services/fakeProductsService';
import ProductsList from './ProductsList';
import ProductForm from './ProductForm';



// -------------------------------------------------------------------------
// Gestionnairtre de produits  --> Composant chapeau de ProductsLists et ProductForm
// -------------------------------------------------------------------------
export default class ProductsMgr extends Component {
  state = {  
    products : getProducts(),
    // products : [],                                         // Pour tester le cas où il n'y a aucun produit dans la table
  }
  
  // const editProduct = product => {
  //   setEditing(true)
  
  //   setCurrentUser({ id: user.id, name: user.name, username: user.username })
  // }
  

  // -------------------------------------------------------------------------
  // Effacement d'un produit
  // -------------------------------------------------------------------------
  handleDeleteProduct = product => {
    console.log('Delete Called',product)
    const products = this.state.products.filter( pProduct => pProduct.id !== product.id);
    // this.setState({ products : products});                \
    this.setState({ products });                             // En JS moderne, lorsque la propriété et la valeur sont identiques, on peut représenter selon cette forme compacte
  };

  // -------------------------------------------------------------------------
  // Edition d'un produit
  // -------------------------------------------------------------------------
  handleEditProduct = (product) => {
    console.log('Edit Called')
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-warning text-center">Test EPSOR</h1>
        <h3 className="text-secondary text-center">Gestion des produits</h3>
        <div className="row">
          <div className="col-4">
            <ProductForm />
          </div>
          
          <div className="col-8">
            <p></p>
            <h3>Liste des produits</h3>

            <ProductsList 
              products  = { this.state.products } 
              onDelete  = { this.handleDeleteProduct }
              onEdit    = { this.handleEditProduct }/>
          </div>
        </div>
      </div>
    )
  }
}
