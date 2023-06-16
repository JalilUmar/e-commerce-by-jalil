'use client'

import Image from 'next/image'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { Button } from "../../../components/ui/button"
import Link from "next/link";
import { BsShop } from "react-icons/bs";




const sanityData = [
  {
    _id: '1',
    name: 'Product Name',
    seller: 'Seller Name',
    deliveryTime: '5 Working Days',
    price: '234.12 ETH',
    imageSrc: '/home/ldr1.png',
  },
  // Add more items as needed
];


export default function Cart() {


  const [Quantity, setQuantity] = useState(0)
  const [cartItems, setCartItems] = useState(sanityData);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);


  function handleDeleteItemClick(itemId : any) {
    setDeleteConfirmation(true);
    setDeleteItemId(itemId);
  }

  function handleDeleteConfirmed() {
    setCartItems(prevItems => prevItems.filter(item => item._id !== deleteItemId));
    setDeleteConfirmation(false);
    setDeleteItemId(null);
  }

  function handleCancelDelete() {
    setDeleteConfirmation(false);
    setDeleteItemId(null);
  }

  function incrementClick() {
    setQuantity(Quantity + 1)
  }
  function decrementClick() {
    if (Quantity > 0) {
      setQuantity(Quantity - 1)
    }
  }

  return (
    <>
      <main className="my-[70px] ">
        <h1 className="text-white font-bold text-5xl text-center md:mb-0 mb-[10px]">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <section className='text-center transition-transform duration-300'>
            <Image className='mx-auto md:w-[300px] w-[120px] md:my-0 my-[45px]' src='/home/cart.png' alt='cart' width={300} height={300} />
            <h1 className="text-white font-bold md:text-4xl text-xl">Your shopping bag is empty</h1>
          </section>
        ) : (
          cartItems.map(item => (
            <main className='md:flex grid'>
              <section key={item._id} className='inline-flex items-center md:my-[60px] my-[15px] md:mx-[70px] mx-4 bg-slate-400 bg-opacity-30 md:p-5 p-2 rounded-xl'>

                <span>
                  <Image className="rounded-lg mx-auto md:w-[200px] w-[100px]" src={item.imageSrc} alt="Product" width={200} height={250} />
                </span>

                <div className="justify-center md:mx-[60px] mx-[15px]">
                  <div className='grid'>
                    <h1 className="md:inline  text-white md:text-3xl font-semibold">{item.name}</h1>
                    <p className="text-slate-300 md:text-base text-[10px] md:mb-5 mb-3">@{item.seller}</p>
                  </div>

                  <span className='md:grid hidden'>
                    <h1 className="inline md:text-base text-[10px] font-semibold text-white ">Estimated Delivery Time</h1>
                    <p className="md:pt-3 md:text-base text-[9px] text-yellow-300">{item.deliveryTime}</p>
                  </span>

                  <span>
                    <p className="text-slate-300 md:mt-5 mt-1 md:text-base text-[10px]">Price</p>
                    <h1 className="text-white md:text-2xl text-[10px] font-semibold">{item.price}</h1>
                  </span>
                </div>


                <div className='grid md:ml-0 ml-[30px]'>
                  <div className=' relative self-center'>
                    <button className=" float-right md:mb-14 mb-3 md:mr-4  overflow-hidden text-white hover:text-red-500 md:text-4xl text-2xl" onClick={() => handleDeleteItemClick(item._id)}>
                      <BsFillTrash3Fill />
                    </button>
                  </div>

                  <span className="self-end">
                    <h3 className="text-white md:text-lg text-[11px] font-semibold md:mt-[50px] mt-[20px] md:mb-[15px] text-center">Select Quantity</h3>
                    <span className="flex text-center">
                      <button className="text-white md:text-4xl" onClick={decrementClick}><AiFillMinusCircle /></button>
                      <p className="md:text-2xl text-white md:px-8 px-4 md:mx-3 mx-1 border-2 border-white rounded-lg">{Quantity}</p>
                      <button className="text-white md:text-4xl" onClick={incrementClick}><AiFillPlusCircle /></button>
                    </span>
                  </span>
                </div>

              </section>

              <span className='inline bg-slate-400 bg-opacity-40 md:p-5 p-2 rounded-xl md:mx-0 mx-4 md:my-[60px] my-[25px] px-[30px]'>
                <div className='text-center'>
                  <h1 className="inline text-white md:text-3xl text-lg font-semibold  ">Order Summary</h1>
                </div>

                <div className='flex'>

                  <div className='grid md:mt-[35px] mt-[10px] md:gap-[40px] gap-[10px] text-left'>
                    <h3 className='md:text-xl text-white '>Quantity</h3>

                    <h3 className='md:text-xl text-white '>Total Amount</h3>
                  </div>

                  <div className='grid md:mt-[35px] mt-[10px] md:ml-[60px] ml-[110px] md:gap-[40px] gap-[10px] text-right'>
                    <h3 className='md:text-xl text-white '>{Quantity} <b className='text-lg'>item</b> </h3>
                    <h3 className='md:text-xl text-white '>234.12 <b className='text-lg'>ETH</b></h3>
                  </div>
                </div>
                <Link href='/collection' >
                  <button className="inline-flex text-center bg-gradient-to-t from-[#671ae4] to-[#b75cff]  px-[60px] py-3 text-white rounded-full shadow-lg font-semibold md:mt-8 mt-5 ml-2" >Proceed To Checkout</button>
                </Link>

              </span>
            </main>

          ))
        )}

        {deleteConfirmation && (
          <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transition-transform duration-500">
            <div className="bg-white md:p-7 p-3 md:mx-0 mx-2 rounded-lg">
              <p className="md:text-xl font-semibold">Are you sure you want to delete this item?</p>
              <div className="flex justify-end md:mt-4 mt-6 gap-2">
                <Button className="mr-2 px-6 py-2 font-semibold  text-black rounded-lg border-slate-500" onClick={handleCancelDelete} variant="outline">Cancel</Button>
                <Button className="mr-2 px-6 py-2 font-semibold  text-white rounded-lg" onClick={handleDeleteConfirmed}>Delete</Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
