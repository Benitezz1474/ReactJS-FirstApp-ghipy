import { useEffect, useState } from "react";

const fetchApi =(category)=>{

    const [image, setImage] = useState();
    const [load, setLoad] = useState(false);

    const giffAPI =async(category)=>{

        const req = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=3ojzv6cJIpGAFcWfRrZf4U0ezDMCGhiN&q=${category}&limit=12`);
        const {data} = await req.json();

        console.log("<><><<>>")
        console.log(data)


        console.log(data[0].images.downsized_medium.url)

        const gif = data.map(index => index.images.downsized_medium.url);
        setImage(gif);
        console.log(gif)

        setLoad(true)

        return gif

    }

    useEffect(()=>{
       giffAPI(category);   
    },[]);

    return {
        image,
        load
    }
}

export default fetchApi;