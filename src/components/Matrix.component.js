import React from "react";
import Row from "./Row.component";

//Constants
import { matrix } from "../constants/matrix";

const Matrix = () => {
    return(
        <div className="matrix">
            {matrix.map( (row, index) => {
                return <Row key={`row-${index}`} row={row} h={matrix.length}/>
            })} 
        </div>
    );
}

export default Matrix; 