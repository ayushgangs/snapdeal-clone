import React from 'react'
import data from "../../object"
import "../content.css"

export default function Shoe({ info }) {
    let filteredData = data.filter(ele => ele.type === "shoe")
    // console.log(filteredData.length)
    return (
        <>
            <div className='content'>
                {
                    filteredData.map(ele => {
                        // console.log(ele)
                        return (
                            <div className='card' key={ele.id}>
                                <div className='prod-img'>
                                    <img src={ele.image} alt="" />
                                </div>
                                <div className='card-cont'>
                                    <div className='prod-name'>{ele.prodName}</div>
                                    <div className='price'>₹{ele.price}</div>
                                    <div className='stock'><em>Stock:{ele.stock}</em></div>
                                    <div className='addCart'>
                                        <button className='addCart-btn' onClick={() => info(ele)}>Add To Cart</button>
                                    </div>

                                </div>
                            </div>

                        )

                    })
                }
            </div>
        </>
    )
}
