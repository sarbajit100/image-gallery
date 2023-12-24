import React from "react"
import { Link, useNavigate } from "react-router-dom"
import './Image.css';

function Image({image,id}){
    const navigate=useNavigate()
    
    const redirectToPage = () => {
        navigate(`/${id}`)
    }

    return(
    <Link to={`/photos/${id}`}>
    <div className="image">
            <img src={image} alt="" />
    </div>
    </Link>
    )
}

export default Image;
