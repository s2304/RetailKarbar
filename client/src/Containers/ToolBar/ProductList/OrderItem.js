import React from 'react';
import Aux from '../../../HOC/Auxiliary';
import classes from './OrderItem.module.css';

const OrderItem = (props) => {

    return(
        <Aux>
            <div 
                className ={classes.OrderItemDiv}
                style={props.style}>
                <div>
                    <p> {props.ProductName}</p>   
                </div>
                <div>
                    <p> {props.ProductPrice}</p>
                </div>
                <div>
                <button 
                    onClick={props.OnAddProductCount}
                    style={{
                        userSelect: "none",
                        fontSize: "20px"                        
                    }}>&#x2b;</button>
                    <input type="text" 
                        value={props.ItemCount}
                        onChange = {props.OrderItemChange}
                        style={{
                        fontSize: "15px",
                        verticalAlign:"center",
                        background: "transparent",
                        border: "none",
                        outline: "none",   
                        color:    "white"                                            
                    }}></input>
                    <button onClick={props.OnDelProductCount}
                        style={{
                            userSelect: "none",
                            fontSize: "20px"                         
                    }}>&#x2d;</button>
                </div>
                <div>
                    <button onClick={props.OnRemoveItem}
                        style={{
                            userSelect: "none",
                            fontSize: "10px"                         
                    }}>&#x274C;</button>                
                </div>               
            </div>
            <div className={classes.OrderItemForMobile}>
            <section>
                <div><strong>Product Name :</strong> {props.ProductName}</div>
                <div><strong>Price :</strong> {props.ProductPrice}</div>
                <div className={classes.OrderActionBar}>
                <div>
                    <button 
                        onClick={props.OnAddProductCount}
                       >&#x2b;</button>
                        <input type="text" 
                            value={props.ItemCount}
                            onChange = {props.OrderItemChange}
                            style={{
                            fontSize: "15px",
                            verticalAlign:"center",                           
                            border: "none",
                            outline: "none"                       
                        }}></input>
                        <button onClick={props.OnDelProductCount}
                         >&#x2d;</button>
                </div>
                <div>
                    <button onClick={props.OnRemoveItem}
                       >Delete</button>                
                </div>  
                </div>
                             
            </section>   
            </div>
        </Aux>
    )
}

export default OrderItem;