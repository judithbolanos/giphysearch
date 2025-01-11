import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getgifs";

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const getImages = async ()=>{
        let arr_gifs = await getGifs(category);
        setimages(arr_gifs);
        setisLoading(false);
    }
    useEffect(()=>{
        getImages();
    },[])
  return {
    images:images,
    isLoading:isLoading
  }
}
