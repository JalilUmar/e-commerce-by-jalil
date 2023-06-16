
import Image from "next/image"
import { BsShop } from "react-icons/bs";
import Link from "next/link";

export default function page() {
    return (
        <>
            <main className="my-[70px]">
                <section className="text-center mb-[20px] -mt-[30px]">
                    <h1 className="inline text-white md:text-2xl font-bold">Premium Collection For Kids</h1>
                </section>

                <section className="grid md:grid-cols-4 grid-cols-2 md:gap-[50px] gap-5 md:mx-0 mx-[10px]">

                    <div className="  flex">
                        <span className=" bg-slate-400 bg-opacity-30 md:p-3 p-[6px] md:rounded-2xl rounded-lg ">
                            <Image className="rounded-lg mx-auto md:w-[337px] w-[150px]" src='/home/ldr1.png' alt="tg" width={337} height={380} />
                            <div className="md:flex md:gap-9   justify-center">
                                <span className=" md:pr-[10px]">
                                    <p className="text-slate-400 md:mt-5 mt-2 md:text-base text-[10px]">@Seller Name</p>
                                    <h1 className="md:inline text-white md:text-lg text-base font-semibold ">Enter Product Name</h1>
                                </span>
                                <span className=" ">
                                    <p className="text-slate-400 md:mt-5 mt-1 md:text-base text-[10px]">price</p>
                                    <h1 className=" text-white  md:text-lg text-base  font-semibold ">234.12 ETH</h1>
                                </span>
                            </div>
                            <Link href='/productDetail' className=" " >
                                <button className="md:inline-flex flex items-center  bg-gradient-to-t from-[#671ae4] to-[#b75cff]  md:px-[85px] rounded-full px-[40px] md:py-3 py-[7px] text-white  font-semibold md:mt-5 mt-2 md:text-base text-[12px] "  ><BsShop className="mr-2 md:text-2xl text-xl " /> Buy Now</button>
                            </Link>
                        </span>
                    </div>
                </section>


            </main>
        </>
    )
}
