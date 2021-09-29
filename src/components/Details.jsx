import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'

const axios = require('axios').default;
export default function Details({data}) {
    let {id} = useParams();
    // let id = useParams().id;
    id = parseInt(id);
    console.log(id);
    const [data1, setData] = useState(data);
    useEffect(() => {

        const fetchdata = async () => {
            const data2 = await axios.get("https://api.tvmaze.com/search/shows?q=all");
            // console.log(data1);
            setData(data2.data);
            // console.log(data1.data);
            // console.log(data1.data[1].show.name);
        }
        fetchdata();
        console.log(data1);
    }, [data1]);
    const temp = data1.filter((value) => value.show.id === id);
    console.log(temp);
    return (
        <div>
           <div className = "row m-5">
            <div className = "col-6">
                <img src={temp[0].show.image.original} style = {{'height' : '600px', 'width' : '400px'}}></img>
            </div>
            <div className = "col-6">
                <div className = "row">
                    <h1>{temp[0].show.name}</h1>
                </div>
                <div className = "row">
                    <p>{temp[0].show.summary}</p>
                </div>
                <div className = "row">
                    <a href = {temp[0].show.url}><button>More details</button></a>
                </div>
            </div>
            </div> 
        </div>
    )
}
