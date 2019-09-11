import React, { Component, Fragment } from 'react';

export default class ProductForm extends Component{
  constructor(){
    super();
    this.state = {
      userInput: '',
      produits: []
    };

    this.onChange = this.onChange.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  onChange(e){
    console.log(e.target.value);
  }

  addProduct(e){
    e.preventDefault();
    this.setState({
      userInput: '',
      produits: [...this.state.produits, this.state.userInput]
    });
  }


  render(){
    return(
      <Fragment>
        <p></p>
        <h3>Détail produit</h3>
        <form>
          <input 
            value={this.state.userInput} 
            type="text" 
            placehholder="Nom"
            onChange={this.onChange}/>
          {/* <input type="number" placeHolder="Prix"/>
          <input type="select" placeHolder="Type de produit"/>
          <input type="checkBox" placeHolder="En vente"/> */}
        </form>
        <button>
          Créer un produit
        </button>

      </Fragment>
    )
  }
}
