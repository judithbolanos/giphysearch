import { useState } from "react";
import { AddCategory , GifGrid } from "./components";

export const GifExpertApp = ()=>{
    const [categories, setcategories] = useState(['Alice in wonderland']);
    const addCategory = (category)=>{
        if(categories.includes(category)) return;
        setcategories([category, ...categories]);
    }
    return(
        <>
            <div className="container-head">
                <img className="logo-icon" src="/logo.png" alt="logo"/> 
            </div>
            <div className="container-search">
                <AddCategory 
                onNewCategory={(value)=> addCategory(value)}
                />
            </div>
            
            {
                categories.map((category) =>  (
                    <div className="container-body">
                        <GifGrid key={category} category={category}/>
                    </div>
                ))
            }
        </>
    );
}