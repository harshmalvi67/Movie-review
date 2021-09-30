import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

export default function Details({data}) {
    let {id} = useParams();
    // let id = useParams().id;
    id = parseInt(id);
    // console.log(id);
    const show = data.filter((value) => value.show.id === id);
    // console.log(show);
    return (
        <div>
           {show
    .map(() => {
               return (
                <div className = "row m-5">
                <div className = "col-lg-6">
                    <img src={show
                [0].show.image.medium} style = {{'width' : '400px'}}></img>
                </div>
                <div className = "col-lg-6" style = {{'alignContent' : 'center'}}>
                    <div className = "row">
                        <h1>{show
                [0].show.name}</h1>
                    </div>
                    <div className = "row">
                        <p>{show
                [0].show.summary}</p>
                    </div>
                    <div className = "row">
                        <a href = {show
                    [0].show.url}><button>More details</button></a>
                    </div>
                </div>
                </div> 
               );
           })}
        </div>
    )
}
