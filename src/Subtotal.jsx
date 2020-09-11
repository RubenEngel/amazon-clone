import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'
import {subtotalAmount} from './reducer'

const Subtotal = () => {

const [state, dispatch] = useStateValue()

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal 
                            ({state.basket.length})
                            : <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />
                            <span className="subtotal__giftText">
                                This order contains a gift
                            </span>
                        </small>
                    </>
                )}
                decimalScale={2}
                value={subtotalAmount(state.basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />

                    <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
