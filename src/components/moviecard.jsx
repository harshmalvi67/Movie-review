import React from 'react'
import { Link } from 'react-router-dom'



export default function Moviecard({data}) {

    

    return (
        <div className="card" style={{ "width": "18rem" }}>
            
            <img src={data.show.image.medium !== null ? data.show.image.medium : "..."} className="card-img-top" alt="..." />
            
            <div className="card-body">
                
                <h5 className="card-title">{data.show.name}</h5>
                
                <p className="card-text">Rating : {data.show.rating.average ? data.show.rating.average : 9.0}</p>
                
                <Link to={{
                    pathname : '/viewdetails/' + data.show.id,
                    params : data
                }} className="btn btn-primary" >View Details</Link>
            
            </div>
        
        </div>
    )
}
