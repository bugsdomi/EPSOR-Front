import React, { Component, Fragment } from 'react';
import { getProducts } from '../../services/fakeProductsService';
import ProductsList from './ProductsList';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

// -------------------------------------------------------------------------
// Gestionnaire de produits  --> Composant chapeau de ProductsLists et ProductForm
// -------------------------------------------------------------------------
export default class ProductsMgr extends Component {
  state = {  
    // products : [],                                         // Pour tester le cas où il n'y a aucun produit dans la table
    products      : getProducts(),
    addMode       : true,                                           // Spécifie si nous sommes en mode "Edition" du produit ou en mode "Création" d'un produit (true = Ajout de produit, false = édition du produit)
    productToEdit : {}
  }
  
  // -------------------------------------------------------------------------
  // Effacement d'un produit
  // -------------------------------------------------------------------------
  handleDeleteProduct = productID => {
    const products = this.state.products.filter( pProductID => pProductID.id !== productID );
    // this.setState({ products : products});                 \
    this.setState({ products });                              // En JS moderne, lorsque la propriété et la valeur sont identiques, on peut représenter selon cette forme compacte
  };

  // -------------------------------------------------------------------------
  // Edition d'un produit
  // -------------------------------------------------------------------------
  handleEditProduct = (productID) => {
    this.setState( {  
      addMode       : false,
      productToEdit :  this.state.products[productID],
    } )
  };

  // -------------------------------------------------------------------------
  // Ajout d'un produit
  // -------------------------------------------------------------------------
  handleAddProduct = product => {
  }


  // -------------------------------------------------------------------------
  // Choix de la Form d'editon d'un produit selon qu'il s'agisse d'une Edition 
  // ou d'une Création de produit (sur la bas e de "state.addMode")
  // -------------------------------------------------------------------------
  chooseProductForm = (product?) => {
console.log('chooseProductForm - product : ',product)
    const formChoosed = this.state.addMode 
      ? (                                                     // Mode ajout de Produit
        <Fragment>                                             
          <AddProductForm width={"col-3"} />
          {/* <EditUserForm
          editing={editing}
          setEditing={setEditing}
          currentUser={currentUser}
          updateUser={updateUser}/> */}
        </Fragment>
        ) 
      : (                                                     // Mode édition de Produit
        <Fragment>
          <EditProductForm 
            width = {"col-3"}
            product = { this.state.productToEdit }
          />
          {/* editing={editing}
							setEditing={setEditing}
							currentUser={currentUser}
							updateUser={updateUser} */}
        </Fragment>
      )

    return formChoosed;
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-warning text-center">Test EPSOR</h1>
        <h3 className="text-secondary text-center">Gestion des produits</h3>
        <div className="row">
          { this.chooseProductForm() }

          <ProductsList 
            width={"col-9"}
            products  = { this.state.products } 
            onDelete  = { this.handleDeleteProduct }
            onEdit    = { this.handleEditProduct }/>
        </div>
      </div>
    )
  }
}
