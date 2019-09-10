import React, {Component} from 'react';

class ProductForm extends Component{
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
      <div>
        <h1>Liste des produits</h1>
        <form>
          <input 
            value={this.state.userInput} 
            type="text" 
            placeHolder="Nom"
            onChange={this.onChange}/>
          {/* <input type="number" placeHolder="Prix"/>
          <input type="select" placeHolder="Type de produit"/>
          <input type="checkBox" placeHolder="En vente"/> */}
          <button>
            Créer un produit
          </button>

        </form>
      </div>
    )
  }
}

export default ProductForm;