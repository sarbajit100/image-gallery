import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import './ImageDetail.css';

function ImageDetail (){
    const[data,setData]=useState();
    const {id} = useParams()
    const getData=async()=>{
      const resp=await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      setData(resp.data.photo)
    }
    
    useEffect(()=>{
      getData()
    },[])
    return (
        <div className="main" id="singlePhoto">
          <div className="image">
            <img src={data?.url} alt="" />
          </div>     
          <div className="detail">
            <h1>{data?.title}</h1>
            <p>
              {data?.description}
            </p>
          </div>
        </div>
    )
}

export default ImageDetail;