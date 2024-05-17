import "./Cart.module.css"
import Button from "./Button";

function Cart( { title, description }){
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button/>
        </div>
    )
}

export default Cart;