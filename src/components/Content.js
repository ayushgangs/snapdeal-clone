import React from 'react'
import "./content.css"
import data from '../object'

export default function Content({inp}){
    // console.log(data)
    let filteredData = data.filter(ele=> ele.type.includes(inp.inputState.toLowerCase()))
    // console.log(filteredData.length)
    return(
        <>
            <div className='content'>
                {
                    filteredData.length==0?
                        data.map(ele=>{
                            // console.log(ele)
                            return(
                                <div className='card' key={ele.id}>
                                    <div className='prod-img'>
                                        <img src={ele.image} alt=""/>
                                    </div>
                                    <div className='card-cont'>
                                        <div className='prod-name'>{ele.prodName}</div>
                                        <div className='price'>₹{ele.price}</div>
                                        <div className='stock'><em>Stock:{ele.stock}</em></div>
                                        <div className='addCart'>
                                            <button className='addCart-btn' onClick={()=>inp.addToCart(ele)}>Add To Cart</button>
                                        </div>
                                        
                                    </div>
                                </div>

                            )
                            
                        })

                        :filteredData.map(ele=>{
                            // console.log(ele)
                            return(
                                <div className='card' key={ele.id}>
                                    <div className='prod-img'>
                                        <img src={ele.image} alt=""/>
                                    </div>
                                    <div className='card-cont'>
                                        <div className='prod-name'>{ele.prodName}</div>
                                        <div className='price'>₹{ele.price}</div>
                                        <div className='stock'><em>Stock:{ele.stock}</em></div>
                                        <div className='addCart'>
                                            <button className='addCart-btn' onClick={()=>inp.addToCart(ele)}>Add To Cart</button>
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