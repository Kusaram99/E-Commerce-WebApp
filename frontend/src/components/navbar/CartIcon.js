import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const CartIcon = () => {
    const state = useSelector((item)=> item.buyProducts);

    console.log("catIcon: ", state)

    // When user will click to icon it will redirect to AddTocard Page
    const navigat = useNavigate();
    const cartHandler = async () => {
        navigat('addtocart')
    }

    return (
        <div className=' me-5'>
            <i
                onClick={cartHandler}
                role="button"
                className="bi bi-cart4 text-light fs-3 cursor-pointer position-relative">
                <span
                    className="position-absolute cart badge rounded-pill bg-danger">
                    {state.length}
                </span></i>
        </div>
    )
}

export default CartIcon