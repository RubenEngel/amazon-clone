import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

const Checkout = () => {

    const [state, dispatch] = useStateValue()

    return (
        <div className='checkout'>
            <div className="checkout__left">
            
                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>
                </div>

                {state.basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                )
                )}

            </div>
            
            <div className="checkout__right">
                <Subtotal/>
            </div>
            

        </div>
    )
}

export default Checkout
