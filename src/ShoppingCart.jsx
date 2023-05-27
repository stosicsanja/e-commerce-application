import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {

  constructor(props) {

    super(props);


    this.state = {
      products: []
    };
  }

  render() {


    return (
      <div>
        <h4>Shopping Cart</h4>


        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount(){
    fetch("http://localhost:5000/products", {method:"GET"})
    .then((resp)=> resp.json())
    .then((data)=> {
      console.log(data)
      
    this.setState({products:data})
     })
  }

  handleIncrement = (product,maxValue) => {
   let allProducts=[...this.state.products]
   let index =allProducts.indexOf(product)
   if (allProducts[index].quantity++ < maxValue) {
    this.setState({products: allProducts })
   }
   
  
  }
  handleDecrement = (product,minValue) => {
    let allProducts=[...this.state.products]
    let index =allProducts.indexOf(product)
    if (allProducts[index].quantity-- > minValue) {
     this.setState({products: allProducts })
    }
    
  }

  handleDelete = (product) => {
    let allProducts=[...this.state.products]
    let index =allProducts.indexOf(product)

    if(window.confirm("Are you sure to delete?")){
      allProducts.splice(index, 1)
    }
   
     this.setState({products: allProducts })
    }
   
  
}


  