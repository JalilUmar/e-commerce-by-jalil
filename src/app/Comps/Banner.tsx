
import Image from "next/image";
import Link from "next/link";
import { BsShop } from "react-icons/bs";


export default function BannerHome() {
    return (
        <>
            <main className="justify-center">

                <section className="md:flex  md:gap-[190px] md:mt-[100px] mt-[40px] justify-center ">
                    <div className="md:inline mt-[50px] text-center">
                        <h1 className="inline text-white md:text-6xl text-4xl  font-bold ">Clothes are the <br />Spirit of Fashion</h1>
                        <p className="text-slate-400 mt-8 ml-2 md:text-lg text-[15px] px-3">Lorem Ipsum has been the industry's standard dummy <br className="hidden md:flex" /> text ever since the 1500s, when an unknown printer took a <br className="hidden md:flex" />galley of type and scrambled it to make a type specimen book.</p>
                        <Link href='/collection' >
                            <button className="inline-flex items-center bg-gradient-to-t from-[#671ae4] to-[#b75cff]  px-5 py-3 text-white rounded-lg font-semibold mt-8 ml-2" ><BsShop className="mr-2 text-2xl " /> Shop Now</button>
                        </Link>

                        <div className="items-center  flex gap-10  md:mt-[60px] mt-[30px] md:mb-0 mb-12 justify-center">
                            <span className="text-center">
                                <h2 className=" md:text-3xl text-2xl font-bold text-white">100+</h2>
                                <p className="text-slate-400 font-semibold md:text-lg  text-[10px]">Brands</p>
                            </span>
                            <span className=" text-center">
                                <h2 className=" md:text-3xl text-2xl font-bold text-white">20k+</h2>
                                <p className="text-slate-400 font-semibold md:text-lg text-[10px]">Fashion Designers</p>
                            </span>
                            <span className="text-center">
                                <h2 className=" md:text-3xl text-2xl font-bold text-white">60+</h2>
                                <p className="text-slate-400 font-semibold md:text-lg  text-[10px]">Fashion Shows</p>
                            </span>

                        </div>

                    </div>

                    <div className="flex gap-5 items-center px-3">
                        <span className="grid">
                            <Image className="rounded-lg mb-3" src='/home/sh1.png' alt="sh1" width={187} height={140} />
                            <Image className="rounded-lg mb-3" src='/home/dr1.png' alt="dr1" width={187} height={220} />
                            <Image className="bg-[#64db50] rounded-lg" src='/home/sh3.png' alt="sh3" width={187} height={157} />
                        </span>

                        <span className="grid">
                            <Image className="rounded-lg mb-3" src='/home/sh2.png' alt="sh2" width={187} height={108} />
                            <Image className="rounded-lg mb-3" src='/home/dr2.png' alt="dr2" width={187} height={220} />
                            <Image className="bg-[#5200ff] rounded-lg" src='/home/dr3.png' alt="dr3" width={179} height={159} />
                        </span>

                        <span className="">
                            <Image className="rounded-lg" src='/home/dr4.png' alt="dr4" width={187} height={412} />
                        </span>
                    </div>
                </section>


                <section className="flex justify-center items-center md:my-[100px] my-[60px] md:gap-[250px] gap-[50px]">
                    <Image className="rounded-lg md:w-[170px] w-[70px]  " src='/home/br1.png' alt="br" width={170} height={103} />
                    <Image className="rounded-lg md:w-[170px] w-[70px] " src='/home/br2.png' alt="br" width={170} height={92} />
                    <Image className="rounded-lg md:w-[170px] w-[70px] " src='/home/br3.png' alt="br" width={170} height={91} />
                </section>

                <section className="md:flex md:gap-[190px] md:mt-[100px] justify-center my-[70px] md:mx-[150px]">

                    <div className="justify-center ">
                        <Image className="rounded-lg  md:w-[458px] w-[250px] md:mx-0 mx-auto" src='/home/dr5.png' alt="dr" width={458} height={560} />
                    </div>

                    <div className=" mt-[40px] md:items-center text-center md:text-left md:w-1/2 w-full">
                        <h1 className="md:inline text-white text-3xl font-bold ">Fashion That Speaks</h1>
                        <p className="text-slate-400 md:mt-10 mt-5 md:px-0 px-3 md:text-base text-[13px] md:pr-[100px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                        <Link href='/female'>
                            <button className="inline-flex items-center bg-gradient-to-t from-[#671ae4] to-[#b75cff]  md:px-5 px-10 py-3 text-white rounded-xl font-semibold md:mt-10 mt-5" >Show More</button>
                        </Link>

                    </div>

                </section>


                <section className="my-[70px]">

                    <div className="md:mt-[70px] md:mb-[70px] mb-[30px] text-center">
                        <h1 className="inline text-white md:text-4xl text-2xl font-bold ">All Collection</h1>
                        <p className="text-slate-400 mt-5  md:text-xl text-base">World's First Layer 2 Fashion Marketplace</p>
                    </div>

                    <div className="justify-center items-center md:flex grid md:gap-[150px] gap-[40px]">
                        <span className="text-center ">
                            <Image className="rounded-lg mx-auto" src='/home/tg1.png' alt="tg" width={75} height={75} />
                            <p className="text-white mt-5  text-lg">No Gas Fee</p>
                        </span>
                        <span className="text-center">
                            <Image className="rounded-lg mx-auto" src='/home/tg2.png' alt="tg" width={83} height={83} />
                            <p className="text-white mt-5  text-lg">Carbon Neutral NFTs</p>
                        </span>
                        <span className="text-center">
                            <Image className="rounded-lg mx-auto" src='/home/tg3.png' alt="tg" width={83} height={83} />
                            <p className="text-white mt-5  text-lg">Fast And Easy Transactions</p>
                        </span>
                    </div>
                </section>

                <div className="md:my-[100px] my-[50px] text-center">
                    <h1 className="md:inline text-white md:text-4xl text-2xl font-bold ">Our Premium Collection</h1>
                    <p className="text-slate-400 md:mt-5 mt-3  md:text-xl text-[12px] md:px-0 px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>


            </main>
        </>
    )
}
