import React from "react";

const Square = ({color, h, w}) => {

//console.log(color);

    return (
        <div className="square" style={
            {backgroundColor: `#${color}`,
            width: `${100/w}vw`,
            height: `${100/h}vh`}
        }/>
    );
}

export default Square;