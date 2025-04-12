import { useState } from "react"
import './MenuItem.css'

function MenuItem(props) {
    const [itemName, setItemName] = useState("Food");
    const [itemDesc, setItemDesc] = useState("Nil.");
    const [itemPrice, setItemPrice] = useState(Number(0.00));   

    return (
      <div className="menu-item">
        <div className="item-container">
            <h2 className="menu-item-name">{props.itemName}</h2>
            <p className="menu-item-desc"><i>{props.itemDesc}</i></p>
        </div>
        <div className="price-container">
            <p className="menu-item-price">USD {(props.itemPrice).toFixed(2)}</p>
        </div>
        
      </div>
    )
  }
  
  export default MenuItem;
  