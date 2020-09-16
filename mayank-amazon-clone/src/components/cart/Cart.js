import React from 'react'
import "./Cart.css"
import List from "./list/List"
import SubTotal from "./subtotal/SubTotal"
function Cart() {
    return (
        <div className="Cart">
            <div className="Cart__left">
                <img alt="" src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-aws.jpg?jwAuTeoLXQvDzDNGQ8Q3zDmWXndEqL8V&itok=tukEXkYJ"></img>
                <div className="Cart__list">
                    <h2 className="Cart_title"> Your Shoping Basket </h2>
                    <div className="Cart_title__divider"></div>
                    <List/>
                </div>
            </div>
            <div className="Cart__right">
                <SubTotal/>
            </div>
        </div>
    )
}

export default Cart
