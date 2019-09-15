import React, { Component, Fragment } from 'react';

export default class EditProductForm extends Component{

  state = {
    product : this.props.product,
  }
  // addProduct(e){
  //   e.preventDefault();
  //   this.setState({
  //     userInput: '',
  //     produits: [...this.state.produits, this.state.userInput]
  //   });
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
console.log('----------------------------------------------')
console.log('handleInputChange - event.target : ',event.target)
console.log('handleInputChange - name : ',name,' --- value : ',value)
console.log('handleInputChange 1 - this.state.product : ',this.state.product[name])
this.setState( {product : ({ ...this.state.product, [name]: value })})
console.log('handleInputChange 2A - this.state.product : ',this.state.product[name])
  }


  render(){
// console.log('EditProductForm - this.state.product : ',this.state.product)



    return(
      <div className = { this.props.width } >
      <br/>
        <h3>Modifier un produit</h3>
        <form>
          <fieldset className="border p-2">
          <div className="form-group">
            <label className="mt-2 font-weight-bold">Nom du produit</label>
            <input type="text" name="name" placeholder="Nom du produit" value={ this.state.product.name } onChange={ this.handleInputChange }/>

            <label className="mt-3 font-weight-bold">Prix du produit</label>
            <div className="input-group-append">
              <input className="text-right" type="text" name="price" placeholder="Prix en euros" min="0" value={ this.state.product.price } onChange={ this.handleInputChange }/>
              <div className="input-group-text">€</div>
            </div>

            <label className="mt-3 font-weight-bold">Type de produit</label>
            <select className="custom-select my-1 mr-sm-2" value={this.state.product.type.value} onChange={ this.handleInputChange }>
              <option value="1">Computer</option>
              <option value="2">Portable</option>
              <option value="3">Micro-computer</option>
            </select>

            <div className="form-check">
              <label className="form-check-label mt-3 font-weight-bold">
                <input className="form-check-input mt-2" type="checkbox"/>
                En vente
              </label>
            </div>
          </div>
        </fieldset>

            <br/>
            <div className="row justify-content-between mx-2">
              <button type="reset" className="btn btn-danger mt-2 font-weight-bold" onClick={ event => { event.preventDefault() }}>Annuler</button>
              <button type="submit" className="btn btn-primary mt-2 ml-2 font-weight-bold" onSubmit={ event => { event.preventDefault() }}>Valider</button>
            </div>
      </form> 

         {/* props.updateProduct(product.id, product)  */}



      {/* <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange}/>
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button> */}



        {/* <form>
          <input 
            value={this.state.userInput} 
            type="text" 
            placehholder="Nom"
            onChange={this.onChange}/>
          {/* <input type="number" placeHolder="Prix"/>
          <input type="select" placeHolder="Type de produit"/>
          <input type="checkBox" placeHolder="En vente"/> */}
        {/* </form>
        <br/>
        <button>
          Créer un produit
        </button> */}
      </div> 
    )
  }
}
