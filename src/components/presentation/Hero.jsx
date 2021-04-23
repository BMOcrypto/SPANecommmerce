import React from "react";
import Nav from "./Nav";
import Content from "./Content";

import bubbles from "../../resource/img/bubbles.png";

function Hero(props) {
    const styles = {
        hero: {
            width: "100%",
            height: "100vh",
            backgroundColor: "#c2c2c2",
            backgroundImage: `url(${bubbles})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }
    };

    return (
        <div className="container-fluid" style={styles.hero}>
            <Nav />
            <Content />
        </div>
    );
}

export default Hero;
