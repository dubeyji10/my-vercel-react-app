import React from "react";

// status is true or false
// state hook on props example

export default function SquareComponent(props){
    // console.log("props : ",props);

    // console.log(">>square component rendered");
    let myStyle = {

        backgroundColor : props.status===false ? "#222222" : null,
        color : props.status===false ? "#adffa4" : null,
        fontSize : props.status===false ? "2em" : "1.44em",

    }

    return (
        <div style={myStyle} onClick={()=>props.handleClick(props.id)}>
            {props.status===false ? "X":"O"}
        </div>
    )
    // return (
    //     <div style={myStyle} onClick={()=>props.handleClick(props.id)}>
    //         {`${props.id}`}
    //     </div>
    // )
}