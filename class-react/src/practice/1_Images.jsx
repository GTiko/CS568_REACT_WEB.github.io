import { useState } from "react";

function Image(){
    let [img, setImg] = useState("");

    return(
        <>
            <img src={img} alt=""/><br/>
            <button className="btn btn-secondary btn-sm m-2" onClick={()=>{setImg(randomImage)}}>show Image</button>
            <button className="btn btn-secondary btn-sm m-2" onClick={()=>{setImg("")}}>delete Image</button>
        </>
    );
}

function randomImage(){
    return `https://picsum.photos/20${Math.floor(Math.random()*10)}`;
}

export default Image;