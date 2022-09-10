import boxes from "./boxes";
import SquareComponent from './squareComponent';

// console.log('boxes imported ...',boxes);

export default function MyGridComponent(){
    console.log("grid component rendered");
    return (
    
        <div className="grid-boxes">
            {
                boxes.map((box)=>{
                    return <SquareComponent key={box.id.toString()} status={box.switch} id={`box-${box.id}`}/>
                })
            }
        </div>
    )
}