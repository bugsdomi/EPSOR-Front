
import React, { Component, Fragment } from 'react';

// -------------------------------------------------------------------------
// Liste de produits
// -------------------------------------------------------------------------
export default class ProductsList extends Component {
  state = {
    products : this.props.products
  }

  // -------------------------------------------------------------------------
  // Affichage de la liste des produits dans une table
  // -------------------------------------------------------------------------
  listProducts(){
    return (
      this.props.products.map((product) => (
        <tr key={ product.id.toString() }>
          <th className="text-center"  scope="row" >{ product.id }</th>
          <td className="text-center">{ product.name }</td>
          <td className="text-center">{ product.type }</td>
          <td className="text-right">{ product.price } €</td>
          { this.getInSaleCellAttr(product.enable) }
          <td className="text-center">
            <button className="btn btn-danger btn-sm mx-2" onClick={ () => this.props.onDelete(product.id) }>Supprimer</button>
            <button className="btn btn-primary btn-sm mx-2" onClick={ () => this.props.onEdit(product.id) }>Modifier</button>
          </td>
        </tr>
      ))
    );
  }


  // -------------------------------------------------------------------------
  // Détermine le messaqge, et la couleur de la cellule en fonction de l'état 
  // du boolean "enable"
  // -------------------------------------------------------------------------
  getInSaleCellAttr(enable){
  return (
    <td className={'text-center'+(enable ? '' : ' table-danger')}>
      {enable ? 'En vente' : 'Hors-vente'}
    </td> 
    )
  }

  // -------------------------------------------------------------------------
  // Render principal de la liste de produits
  // -------------------------------------------------------------------------
  render() { 
    const { length: count} = this.props.products;             // Destructuration et chgt de nom de la propriété "length" en "count"

    if (count === 0){
      return <p>Il n'y a aucun produit actuellement</p>
    }

    return (
      <div className = { this.props.width } >
        <br />
        <h3>Liste des produits</h3>
        <p className="font-weight-bold">Il y a { count } {(count === 1 ? 'produit' : 'produits')} dans la base</p>

        {/* <table className="table table-striped table-bordered table-hover"> */}
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th className="text-center" scope="co">N°</th>
              <th className="text-center" scope="col">Nom</th>
              <th className="text-center" scope="col">Type</th>
              <th className="text-center" scope="col">Prix</th>
              <th className="text-center" scope="col">En vente</th>
              <th className="text-center" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.listProducts()}
          </tbody>
        </table>
        { this.props.products.length === 0 && "Veuillez en créer un nouveau..." }
      </div>
    )
  }
}
