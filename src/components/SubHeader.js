import React from 'react'
import "./subheader.css"
import {Link} from 'react-router-dom'


export default function SubHeader({setInp}) {
   // console.log(input)
   function manageInp(e){
      // console.log(e.target.value)
      setInp.setInputState(e.target.value)
   }
  return (
    <>
        <div className='subHeader'>
           <div className='products'>
              {/* Products:<select className='items'>
                          <option>Watches</option>
                          <option>Shoes</option>
                       </select> */}
               <Link to="/watches" className='watch'><div>Watches</div></Link>
               <Link to="/shoes" className='shoe'><div>Shoes</div></Link>
           </div>
           <Link to='/' className='snap-logo'><img src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg" alt=""/></Link>
           
           <div className="searchInp">

              <input  type="text" placeholder="Search products and brands" onChange={manageInp}/>
              <button className='search-btn'>
                <i className="fa fa-search"></i>Search
              </button>
           </div>
           

           <div className='cart'>
            <Link to="/cartpage">Cart</Link>
              <i className="fa fa-shopping-cart"></i>
              <div>{setInp.cart.length}</div>
           </div>
           <div className='sign-in'>
              Sign In<i class="fa fa-user-circle-o"></i>
           </div>
        </div>
    </>
  )
}
