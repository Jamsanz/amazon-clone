import React from 'react'
import Image from 'next/image'
import {MenuIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline"

const Header = () => {
    return (
        <header>
        {/* Top nav */}
        <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
            <div className="mt-2 flex flex-grow sm:flex-grow-0">
            <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
             />
            </div>
            {/* Search */}
            <div className="hidden sm:flex h-10 cursor-pointer flex-grow items-center flex-shrink rounded-md bg-yellow-400 hover:bg-yellow-500">
            <input className="p-2 h-full w-6 rounded-l-md flex-grow shrink focus:outline-none" type="text" name="" id="" />
            <SearchIcon className="h-12 p-4"/>
            </div>
            {/* Right nav */}
            <div className="flex text-white space-x-6 text-xs items-center mx-6 whitespace-nowrap">
                <div className="link">
                <p>Hi Jamsanz</p>
                <p className="font-extrabold md:text-sm">Accounts & Lists</p>
                </div>
                <div className="link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div className="link flex items-center relative">
                <span className="absolute top-0 right-0 md:right-8 bg-yellow-400 rounded-full text-black font-bold h-4 w-4 text-center">0</span>
                <ShoppingCartIcon className="h-10"/>
                <p className="hidden md:inline font-extrabold mt-2 md:text-sm">Cart</p>
                </div>
            </div>
            </div>
            {/* Bottom Nav */}
            <div className="flex items-center space-x-3 bg-amazon_blue-light text-white py-2 pl-6">
                <p className="flex link items-center py-2">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">
                    Prime Video
                </p>
                <p className="link">
                    Amazon Business
                </p>
                <p className="link">
                    Today's Deal
                </p>
                <p className="link hidden lg:inline-flex">
                    Electronics
                </p>
                <p className="link hidden lg:inline-flex">
                    Food & Grocery
                </p>
                <p className="link hidden lg:inline-flex">
                    Prime
                </p>
                <p className="link hidden lg:inline-flex">
                    Buy Again
                </p>
                <p className="link hidden lg:inline-flex">
                    Shopper toolkit
                </p>
                <p className="link hidden lg:inline-flex">
                    Health & Personal Care
                </p>
            </div>
        </header>
    )
}

export default Header
