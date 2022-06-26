import React from 'react'
import "./header.css"

export default function Header() {
  
  return (
    <>
        <div className='header'>
            <div id='bwq'>
                Brand Waali Quality, Bazaar Waali Deal!
            </div>
            <div id='someDivs'>
                <div>Impact@Snapdeal</div>
                <div>Gift Cards</div>
                <div>Help Center</div>
                <div>Sell On Snapdeal</div>
                <div className='download'>

                    <i className="fa fa-mobile-phone"></i>Download App
                </div>
            </div>
        </div>
    
    </>
  )
}
