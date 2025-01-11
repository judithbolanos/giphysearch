export const getGifs = async(category) =>{
    let api_key = "" //agrega api key de https://developers.giphy.com/
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=9`;
    const resp = await fetch(url);
    const {data=[]} = await resp.json();
    const gifs = data.map(img=>({
        id:img.id,
        title:img.title,
        url: img.images.downsized_medium.url,
    }));
    //console.log("resp", gifs); 
    return gifs;
}