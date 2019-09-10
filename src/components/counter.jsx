import React, { Component, Fragment } from 'react';

class Counter extends Component {
  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    count :0,
    products: 
    [
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
      //   enable: true
      // },
      // {
      //   id: 2,
      //   uuid: "03125012-cafe-f4ce-b00k-b00bs10ff2d4",
      //   name: "MSI GT73eVR 7RF Titan Pro",
      //   price: 2200,
      //   type: "computer",
      //   enable: true
      // },
      // {
      //   id: 3,
      //   uuid: "03125012-cafe-f4ce-b00k-baabs10ffe8g7",
      //   name: "Cube-Video",
      //   price: 2000,
      //   type: "computer",
      //   enable: true
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
    ]
  };

  formatCount(){
    const { count } = this.state;     // Destructuration = this.state.count
    return count === 0 ? 'Zero produit' : count;
  };

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  // styles = {               \
  //   fontSize: 20,            Cas 1
  //   fontWeight: "bold"     /
  // };

  renderProducts(){
    if (this.state.products.length === 0){
      return <p>Il n'y a aucun produit actuellement</p>
    }

    return (
      <ul>
        { this.state.products.map(product => <li key={product.id}>{ product.name }</li>) }
      </ul>
    );
  }

  handleIncrement = () => {
    // this.state.count++;
    this.setState({ count: this.state.count + 1 })
  }

  render() { 
    // let classes = 'badge m-2 badge-';                            \
    // classes += this.state.count === 0 ? 'warning' : 'primary';   /     Cas 3

    // let classes = this.getBadgeClasses();  // Créé automatiquement apres refactorisation automatique (avec la fonction "getBadgeClasses")

    return (
      <Fragment>
        {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()} </span>              // Cas 1 : Ebn utilisant un objet "styles"*/}   

        {/* <span style={{fontSize: 20 }} className="badge badge-primary m-2">{this.formatCount()} </span>          // Cas 2 : Style ecrit en dur*/}

        {/* <span className={classes}>{this.formatCount()} </span>                                                  // Cas 3 : En utilisant une variable "String"*/}

        {/* <span className={this.getBadgeClasses()}>{this.formatCount()} </span>                                   // Cas 4 : En appelant une fonction gérant les styles*/}

        {/* <button className="btn btn-danger btn-sm">Increment</button> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()} </span>                                   
        { this.renderProducts() }
        { this.state.products.length === 0 && "Veuillez en créer un nouveau..." }
        <hr />
        <p>
          <button 
          onClick = { this.handleIncrement }
          className="btn btn-danger btn-sm">Increment
          </button>
        </p>
      </Fragment>)
    ;
  }
}

export default Counter;