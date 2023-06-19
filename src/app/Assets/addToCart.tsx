'use client'

import { useDispatch } from 'react-redux'
import { addToCart } from "@/Store/itemCount/cartItemsCount";
import { ImCart } from "react-icons/im";


export default function AddToCartButton() {

    const dispatch = useDispatch()

    return (
        <>
            <button className="md:inline-flex flex items-center  bg-gradient-to-t from-[#181e41]  to-[#984D38] md:px-[75px] px-[32px] md:py-3 py-[7px] text-white rounded-full font-semibold md:mt-5 mt-2 md:text-base text-[12px] " onClick={() => dispatch(addToCart())} ><ImCart className="mr-2 md:text-2xl text-xl " /> Add to Cart</button>

        </>
    )
}
