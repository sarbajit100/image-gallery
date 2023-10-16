import Image from '../Image/Image';
import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';

function ImageList() {
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function downloadImage() {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos');
        const results = response.data.photos;
        const image = results.map((imgurl)=>{
          return imgurl.url
        })
        
        
        
        console.log(image);
        
        setIsLoading(false);
        
        
    }
    useEffect(() =>{
        downloadImage();
    }, []);
   
  return (
    
    <div>
      <div>Image list</div>
      {(isLoading) ? 'Loading...' : 'downloaded' }
      
    </div>
  )
}

export default ImageList
