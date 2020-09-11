import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    
    const [state, dispatch] = useStateValue()

    function removeFromBasket() {
        dispatch ({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="checkoutProduct">
           <img src={image} alt="" className="checkoutProduct__image"/> 

           <div className="checkoutProduct__info">
               <p className="checkoutProduct__title">{title}</p>
               <p className="checkoutProduct__price">
                   <small>£</small>
                   <strong>{price}</strong>
               </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromBasket}>Remove</button>
           </div>
        </div>
    )
}

export default CheckoutProduct
