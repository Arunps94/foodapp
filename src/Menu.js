import React,{Component} from 'react';
import "./menu.css";
import {  Link } from "react-router-dom";

const url ="https://foodaapi.herokuapp.com/food"

class Menu extends Component{
   constructor(){
        super()

        this.state={
            products:"",
           count:0
            
        }
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
    }
    add() {
        this.setState({
            count: this.state.count + 1
        });
        
      }
    
      subtract() {
        if(this.state.count< 1){
            this.setState({
              count:0
            });
          }else {
            this.setState({
              count: this.state.count- 1
            });
          }
        
      }

    renderdata =(data)=> {  
        if (data) {
        return data.map((items,index) => {
        //    let totalPrice = this.state.count * {items.price};
        return(
            <div className="card">
                <img src={items.img} alt={items.name} className="cardImage"/>
                <h3 className="n">{items.name}</h3>
                <h4 className="n">Price: {items.price}</h4>
                 <h4 className="n"> Total items:{this.state.count}</h4>
                 <div className="btn-group" role="group" aria-label="Basic example">
                <button  className="plus btn" onClick={this.add}>+</button>
                <button className="minus btn" onClick={this.subtract}>-</button>
                </div>
               <div><Link to="/Checkout" className="checkout">Checkout</Link></div> 
            </div>
        )
    })}}

    render(){
        // console.log("data",this.state. products)
        return(
            <>
               {this.renderdata(this.state.products)}
            </>
        ) 
    }
    componentDidMount(){
        fetch(url, {method:'GET',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    })
        .then((res) => res.json())
        .then((data) => {
            this.setState({products:data})
        })
    }
}

export default Menu