import React from 'react'
import "./SubTotal.css"
function SubTotal() {
    return (
        <div className="SubTotal">
            <p> Subtotal ( 0 items ): <strong>$ 20.96 </strong> </p>
            <div className="Subtotal__giftwrapper">
                {/* checkbox */}
                <p className="Subtotal__gift"> This order contains a gift </p>
            </div>
            <button className="Subtotal__checkout"> Proceed to Checkout </button>
        </div>
    )
}

export default SubTotal
