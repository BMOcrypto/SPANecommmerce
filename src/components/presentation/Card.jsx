import React from "react";

import StateCart from "../../state/state-cart";

function Card(props) {
    const style = {
        card: {
            height: "155px",
            boxShadow: "0px 3px 7px -8px #000000"
        },
        info: {
            padding: "10px",
            textAlign: "center"
        },
        title: {
            fontFamily: "inter-medium",
            fontSize: "18px",
            color: "#52acf4"
        },
        price: {
            fontFamily: "inter-bold",
            fontSize: "16px"
        },
        buttonOrange: {
            backgroundColor: "white",
            height: 38,
            borderRadius: 29,
            border: "2px solid #52acf4",
            width: 120,
            color: "#004987",
            fontFamily: "inter-bold",
            fontSize: 13,
            boxShadow: "rgb(0, 0, 0) 0px 2px 5px -8px"
        }
    };

    let cant = {
        id: props.product.id,
        cantidad: 1,
        total: props.product.price,
        producto: props.product
    };

    return (
        <StateCart.Consumer>
            {(cart) => {
                if (props.mode === "vertical") {
                    return (
                        <div className="col-md-3">
                            <div
                                className="card d-flex flex-column align-items-center mt-4"
                                style={style.card}
                            >
                                <div className="info" style={style.info}>
                                    <span style={style.title}>
                                        {props.product.title.slice(0, 22)}
                                    </span>
                                    <p style={style.price}>
                                        $ {props.product.price}/
                                        <small> 1 gal</small>{" "}
                                    </p>
                                    <button
                                        style={style.buttonOrange}
                                        onClick={() => {
                                            const found = cart.cart.find(
                                                (element) =>
                                                    element.id ===
                                                    props.product.id
                                            );
                                            if (found) {
                                                cant.cantidad =
                                                    found.cantidad + 1;
                                                cart.setCart(
                                                    cart.cart.filter(
                                                        (objeto) =>
                                                            objeto.id !==
                                                            props.product.id
                                                    )
                                                );
                                                cart.setCart((cart) =>
                                                    cart.concat(cant)
                                                );
                                            } else {
                                                cart.setCart((cart) =>
                                                    cart.concat(cant)
                                                );
                                            }
                                        }}
                                        //onClick={() => cart.setCart(cart=>cart.concat(props.product))}
                                        //onClick={() => carts.setCart(cart.count + 1)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return <div className="card">juanes</div>;
                }
            }}
        </StateCart.Consumer>
    );
}

export default Card;
