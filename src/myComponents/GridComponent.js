import boxes from "./boxes";
import SquareComponent from './squareComponent';
import React from "react";

/*

grid component renders again and again everytime a box is clicked

*/
// console.log('boxes imported ...',boxes);

export default function MyGridComponent() {
    const [currSquare, setCurrSqaure] = React.useState(boxes);

    function toggle(currSquareId) {
        console.log("clicked", currSquareId, " square");

        setCurrSqaure(prevSquares=>{
            return prevSquares.map((eachSq)=>{
                // a {id:current_id , switch : not of old switch status } else old square
                return eachSq.id===currSquareId ? {id:currSquareId , switch:!eachSq.switch} : eachSq
            })
        })

        /*
        setCurrSqaure(function(prevSquares){
            // return boxes[currSquareId]
            const newSquares = [];
            for(let i=0;i<prevSquares.length;i++){
                if(i===currSquareId){
                    newSquares.push({
                        id : currSquareId ,
                        switch: prevSquares[i].switch===true ? false : true
                    })
                }
                else{
                    newSquares.push(prevSquares[i])
                }
            }
            return newSquares;
        })
        */
    }

    console.log("--grid component rendered--");

    return (

        <div className="grid-boxes">
            {

                currSquare.map((box)=>{
                    return <SquareComponent key={box.id} handleClick={()=>toggle(box.id)} status = {box.switch}/>
                })

            }
        </div>
    )

    // return (

    //     <div className="grid-boxes">
    //         {
    //             currSquare.map((box) => {
    //                 return <SquareComponent handleClick={toggle} key={box.id.toString()} status={box.switch} id={box.id} />
    //             })
    //         }
    //     </div>
    // )
}