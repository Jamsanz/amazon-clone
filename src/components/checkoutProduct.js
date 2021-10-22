import React from 'react'
import Product from './Product'
import Image from 'next/dist/client/image'
import StarsRating from 'react-star-rate'
import Currency from 'react-currency-formatter'
import { removeFromBasket } from '../slices/basketSlice'
import { useDispatch } from 'react-redux'

const CheckoutProduct = ({id,key, price, description, title, rating, image }) => {
    const dispatch =useDispatch();
    const removeItemFromCart=()=>{
    dispatch(removeFromBasket({id}))
    }
    return (
    <div className="grid grid-cols-5">
    <Image 
        src={image}
        width={200}
        height={200}
        objectFit="contain"
    />
    {/* Middle */}
    <div className="col-span-3 mx-5">
        <p>{title}</p>
        <StarsRating 
            value={rating.rate}
            disabled
        />
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency 
            quantity={Number((price * 412.198).toFixed()) }
            currency="NGN"
        />
    </div>
    <div className="flex flex-col my-auto space-y-2 justify-self-end">
        {/* <button className="button">Add to Cart</button> */}
        <button className="button p-3" onClick={removeItemFromCart}>Remove from Cart</button>
    </div>
    </div>
    )
}

export default CheckoutProduct
