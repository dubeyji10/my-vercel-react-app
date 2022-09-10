import React from "react";

// status is true or false
// state hook on props example

export default function SquareComponent(props){
    console.log(">>square component rendered");

    const[currStatus , setCurrStatus] = React.useState(props.status);

    let myStyle = {
        backgroundColor : currStatus===false ? "#222222" : null,
        color : currStatus===false ? "salmon" : null,
        fontSize : currStatus===false ? "2em" : "1.44em",


    }
    function toggle(){
        console.log("now switch is : ",(!currStatus ? "on":"off"));
        setCurrStatus(prevState=>!prevState);
    }

    return (
        <div style={myStyle} onClick={toggle}>
            {currStatus===false ? "X":"O"}
        </div>
    )

}