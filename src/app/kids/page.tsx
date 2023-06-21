

import Image from "next/image"
import { BsShop } from "react-icons/bs";
import Link from "next/link";
import AddToCartButton from "../Assets/addToCart";

import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";


export const getProductData = async () => {
    const res = await client.fetch(`*[_type=="products"]{
        _id,
      productImageMain,
        productTitle ,
        productPrice ,
        productDescription,
    }`)
    return res
}


export default async function page() {

    const productsData = await getProductData()

    return (
        <>
            <main className="my-[70px]">
                <section className="text-center md:mb-[40px] mb-[20px] -mt-[30px]">
                    <h1 className="inline text-white md:text-2xl font-bold">Premium Collection For Kids</h1>
                </section>

                <section className="grid md:grid-cols-4 grid-cols-2 md:gap-x-[80px] gap-x-8 md:mx-0 mx-[15px]">
                    {
                        productsData.map((items: any) => {
                            return (

                                <span key={items._id} className="inline bg-slate-400 bg-opacity-30 md:px-3 md:py-3 px-[7px] py-[6px]  md:rounded-2xl rounded-lg mb-3 md:mb-4 ">
                                    <Image className="rounded-lg md:w-[250px] w-[150px]" src={urlForImage(items.productImageMain).url()} alt="tg" width={250} height={300} />
                                    <div className="md:gap-0 justify-center">
                                        <span className="   ">
                                            <p className="text-slate-400 md:mt-3 mt-2 md:text-[12px] text-[10px]">@Seller Name</p>
                                            <h1 className="md:inline text-white md:text-lg text-base  ">{items.productTitle}</h1>
                                        </span>
                                        <span className=" ">
                                            <p className="text-slate-400  md:text-[12px] text-[10px]">Price</p>
                                            <h1 className=" text-white  md:text-lg text-base   ">${items.productPrice}</h1>
                                        </span>
                                    </div>

                                    <AddToCartButton />

                                    <Link href='/productDetail'  >
                                        <button className="md:inline-flex flex items-center text-center  bg-gradient-to-t from-[#671ae4] to-[#b75cff]  md:px-[70px] px-[35px] md:py-3 py-[7px] text-white rounded-full font-semibold md:mt-2 mt-[6px] md:text-base text-[12px] "   ><BsShop className="mr-2 md:text-2xl text-xl " /> Buy Now</button>
                                    </Link>
                                </span>
                            )
                        })
                    }

                </section>


            </main>
        </>
    )
}
