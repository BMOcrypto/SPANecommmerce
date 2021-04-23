import React from "react";

import bubbles from "../../resource/img/bubbles.png";

function Slogan(props) {
    const style = {
        slogan: {
            height: "175px",
            backgroundImage: `url(${bubbles})`
        }
    };

    return <div className="slogan mt-5 mb-5 pb-3" style={style.slogan}></div>;
}

export default Slogan;
