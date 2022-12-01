function Aggregator(prop) {

    const updateCart = prop.updateCart;
    const cart = prop.cart;
    const total = prop.total;
    
    return (
        <div class="cart">
            <h2>Cart</h2>
                {cart.map((e, i) => <p key={i}>{e.name}  <button class="subtractButton" onClick={() => {console.log(i, cart.splice(i, 1)); updateCart([...cart])}}>-</button></p>)}
                <h4>Cart Total: ${total}</h4>
        </div>
    );
}

export default Aggregator;