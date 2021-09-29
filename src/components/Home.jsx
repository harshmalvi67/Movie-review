import React, { useEffect, useState } from 'react'
import Moviecard from './moviecard.jsx';




export default function Home({data}) {
    

    return (
        <div>
            {/* <h1 className="m-4">Movie Reviews</h1> */}
            <div className="row">{
                data.map((p) => {
                    if (p.show.image) {
                        return <div className="m-2 col"><Moviecard data={p} /></div>;
                    }
                })
            }
            </div>
        </div>
    )
}
