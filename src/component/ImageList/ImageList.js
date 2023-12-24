import Image from '../Image/Image';
import ImageDetail from '../ImageDetail/ImageDetail'
import React, { useEffect, useState } from 'react';
import  axios from 'axios';
import './ImageList.css';

function ImageList() {
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function downloadImage() {
        const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos');
        const results = response.data.photos;
        const image = results.map((imgurl)=>{
          return {
            image:imgurl.url,
            id:imgurl.id,
            title:imgurl.title,
            description:imgurl.description
          }
        })
        
        
        
        console.log(results);
        setImageList(image)
        setIsLoading(false);
        
        
    }
    useEffect(() =>{
        downloadImage();
    }, []);
   
  return (
    
    <>
      <div className='heading'><h1>Image list</h1></div>
      <div className='image-list'>
      {(isLoading) ? 'Loading...' : 
      imageList.map((p)=><Image image={p.image} id={p.id} key={p.id} title={p.title} description={p.description} />)
      }
      </div> 
    </>
  )
}

export default ImageList
