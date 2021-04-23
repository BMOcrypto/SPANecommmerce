import React from 'react'

import '../../styles/how.css'

function Buy(){
  return(
    <div className="col-md-8 offset-md-2 mb-5">
      <div className="caja">
        <div className="number-right">
          1
        </div>
        <div className="row content1">
          <div className="col-md-6 offset-md-3 text-right">
            <h5 className="title">Shop</h5>
            <span className="subtitle">Add the products you wish to order to your cart as you would with any other online store.</span>
          </div>
          <div className="col-md-2 icon">

          </div>
        </div>
      </div>
      <div className="caja1">
        <div className="number-left">
          2
        </div>
        <div className="row content2">
          <div className="col-md-2 icon">

          </div>
          <div className="col-md-6 text-left">
            <h5 className="title">Checkout</h5>
            <span className="subtitle">Checkout has never been easier. Simply put in your banking or credit card information and click submit.</span>
          </div>
        </div>
      </div>
      <div className="caja2">
        <div className="number-right">
          3
        </div>
        <div className="row content3">
          <div className="col-md-6 offset-md-3 text-right">
            <h5 className="title">Wait</h5>
            <span className="subtitle">We will send you an order confirmation once your order has been processed. Upon final payment Flavorman will begin making your order.</span>
          </div>
          <div className="col-md-2 icon">

          </div>
        </div>
      </div>
      <div className="caja3">
        <div className="number-left">
          4
        </div>
        <div className="row content4">
          <div className="col-md-2 icon">

          </div>
          <div className="col-md-6 text-left">
            <h5 className="title">Create</h5>
            <span className="subtitle">Wait for your order to arrive and get back to changing what the world is drinking.</span>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Buy;