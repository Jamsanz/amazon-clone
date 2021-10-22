import React from 'react'
import Header from '../components/Header'
import Image from 'next/dist/client/image'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/checkoutProduct'
import { useSession } from 'next-auth/client'
import Currency from 'react-currency-formatter'

const Checkout = () => {
    const items=useSelector(selectItems);
    const total=useSelector(selectTotal);
    const session=useSession();
    console.log(session);
    return (
        <div className="bg-gray-100">
        <Header />
            <main className="lg:flex max-w-screen-xl mx-auto">
            {/* Left */}
            <div className="flex-grow m-5 shadow-sm">
                <Image 
                    src="https://links.papareact.com/ikj"
                    width={1020}
                    height={250}
                    objectFit="contain"
                />
                <div className="flex flex-col p-5 space-y-10 bg-white">
                    <h1 className="text-3xl border-b p-4">{items.length == 0 ? "Your Shopping Cart is Empty": "Shopping Cart"}</h1>
                    {items.map((item,i)=>(
                        <CheckoutProduct
                            key={i} 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            price={item.price}
                            category={item.category}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            {/* Right */}
            <div className="flex flex-col bg-white p-10 shadow-md">
                {items.length > 0 &&(
                    <>
                        <h2 className="whitespace-nowrap">
                            Subtotal ({items.length}) items:
                            <span className="font-bold">
                                <Currency 
                                    quantity={+(total * 412.198).toFixed()}
                                    currency="NGN"
                                />
                            </span>
                        </h2>
                        <button className={`button mt-2 ${session[0] ? "": "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                            {session[0] ? "Proceed to Checkout":"Sign in to Checkout" }
                        </button>
                    </>
                ) }
            </div>
            </main>
        </div>
    )
}

export default Checkout

// export const getServerSideProps= async ()=>{
//     const rate= await fetch(`https://api.fastforex.io/fetch-one?from=USD&to=NGN&api_key=${process.env.API_KEY}`).then(res=>res.json());
//     return{
//       props:{
//         rate
//       }
//     }
//   };