import React from 'react'
import "./cart.css"
// import data from "../../object"

export default function Cart({ item }) {
  

  return (
    <>
      <div className='cartpage'>
        {
          item.cart.length===0?
          <div className='empty-cart'>Your Cart is Empty</div>
          :
          item.cart.map(ele => {

            return (
              <>
                <div className="cart-card">
                  <div className='cart-img'>
                    <img src={ele.image} alt="" />
                  </div>
                  <div className='cart-cont'>
                    <div className='prod-title'>{ele.prodName}</div>
                    <div className='cart-detail'>

                      <div className='cart-quantity'>{ele.quantity}</div>
                      <i className="fa fa-close"></i>
                      <div className='cart-price'>₹{ele.price}</div>
                      <i className="fa fa-arrow-right"></i>
                      <div className='cart-totPrice'>₹{ele.quantity * ele.price}</div>
                    </div>
                    <div className='cart-stock'><em>Stock:{ele.stock}</em></div>
                    <div className='cart-btns'>
                      <button className='add' onClick={() => item.addToCart(ele)}>+</button>
                      <button onClick={() => item.reduceQuantity(ele)}>-</button>
                    </div>
                    <div className='delete-btn'>
                      <button onClick={() => item.deleteItem(ele)}>Delete item</button>
                    </div>
                  </div>
                </div>
              </>

            )
          })

        }
        <div className='gr-tot'>Grand Total:₹{item.totCartPrice}</div>
      </div>

    </>
  )
}
