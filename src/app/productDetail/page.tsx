'use client'

import Image from "next/image";
import Link from "next/link";
import { topBrands } from "../Comps/databaseLocal";
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { Separator } from "../../../components/ui/separator"



export default function ProductDetail() {

    const [Quantity, setQuantity] = useState(1)
    const [mainImage, setMainImage] = useState('/sProducts/m2.png')
    const [isHovered, setIsHovered] = useState(false);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (event: any) => {
        setIsHovered(true);
        setHoverPosition({
            x: event.nativeEvent.offsetX,
            y: event.nativeEvent.offsetY,
        });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const getBackgroundPosition = () => {
        const { x, y } = hoverPosition;
        const bgPosX = -x * 2;
        const bgPosY = -y * 2;
        return `${bgPosX}px ${bgPosY}px`;
    };

    const getZoomStyle = () => {
        if (isHovered) {
            const scale = 2;
            const zoomX = -hoverPosition.x * (scale - 1);
            const zoomY = -hoverPosition.y * (scale - 1);

            return {
                transform: `scale(${scale})`,
                transformOrigin: `${zoomX}px ${zoomY}px`,
            };
        }

        return {};
    };


    function incrementClick() {
        setQuantity(Quantity + 1)
    }
    function decrementClick() {
        if (Quantity > 1) {
            setQuantity(Quantity - 1)
        }
    }

    function setImage(imagePath: string) {
        setMainImage(imagePath)
    }


    return (
        <>
            <main>
                <section className="md:flex justify-center gap-[60px] mt-[70px] mb-[20px]">
                    <div>

                        <div className=" rounded-2xl  md:h-[330px] h-[400px] md:w-[300px] w-[350px] bg-white bg-opacity-25 p-1 md:ml-0 ml-[15px]  justify-center items-center border-[3px] border-blue-600 relative  overflow-hidden"
                            onMouseEnter={handleMouseEnter}
                            onMouseMove={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ willChange: 'transform' }}>

                            <div
                                className="h-full w-full rounded-lg bg-cover bg-no-repeat transition-transform duration-300 "
                                style={{
                                    backgroundImage: `url(${mainImage})`,
                                    backgroundPosition: isHovered ? getBackgroundPosition() : 'initial',
                                    ...getZoomStyle(),
                                }}
                            ></div>

                        </div>

                        <section className="md:mx-[200px] mx-4 md:mt-0 mt-7 md:hidden">
                            <div className="md:flex grid grid-cols-4  gap-2 ">

                                <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src={'/sProducts/m2.png'} onClick={() => setImage('/sProducts/m2.png')}alt="" width={100} height={100} />
                                <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src='/sProducts/m1.png' onClick={() => setImage('/sProducts/m1.png')} alt="" width={100} height={100} />
                                <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src='/sProducts/m3.png' onClick={() => setImage('/sProducts/m3.png')} alt="" width={100} height={100} />
                                <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src='/sProducts/c2.png' onClick={() => setImage('/sProducts/c2.png')} alt="" width={100} height={100} />
                                
                            </div>
                        </section>



                    </div>

                    <span className="md:inline block md:ml-10 ml-4 md:mt-0 mt-10">
                        <h1 className="text-white md:text-4xl text-2xl font-semibold">Product Name Here</h1>
                        <p className="text-white md:my-5 my-3 md:text-base text-sm">@Seller Name</p>



                        <div className="flex md:flex-col flex-row gap-10 md:gap-5 my-[30px]">
                            <h3 className="text-white md:text-2xl text-lg font-semibold "> Select Quantity</h3>
                            <span className="flex text-center ">
                                <button className="text-white  text-4xl" onClick={decrementClick}><AiFillMinusCircle /></button>
                                <p className="text-2xl text-white px-8 mx-3 border-2 border-white rounded-lg">{Quantity}</p>
                                <button className="text-white text-4xl" onClick={incrementClick}><AiFillPlusCircle /></button>
                            </span>
                        </div>

                        <section className="flex md:flex-row flex-col md:justify-center gap-10 mt-[40px] items-center">
                            <h1 className="text-white md:text-3xl text-5xl font-semibold text-center">234.12 ETH</h1>
                            <Link href='/productDetail' >
                                <button className="inline-flex items-center bg-gradient-to-t from-[#671ae4] to-[#b75cff] px-[110px] py-6 md:ml-0 -ml-6 text-white  rounded-full font-semibold "  ><FaCartPlus className="mr-2 text-2xl " /> Add To Cart</button>
                            </Link>

                        </section>

                    </span>


                </section>

                <section className="md:mx-[200px] md:flex hidden">
                    <div className="md:flex grid grid-cols-4  gap-2 ">

                        <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src={'/sProducts/m2.png'} onClick={() => setImage('/sProducts/m2.png')} alt="" width={100} height={100} />
                        <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src='/sProducts/m1.png' onClick={() => setImage('/sProducts/m1.png')} alt="" width={100} height={100} />
                        <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src='/sProducts/m3.png' onClick={() => setImage('/sProducts/m3.png')} alt="" width={100} height={100} />
                        <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src='/sProducts/c2.png' onClick={() => setImage('/sProducts/c2.png')} alt="" width={100} height={100} />
                        <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src='/sProducts/c3.png' onClick={() => setImage('/sProducts/c3.png')} alt="" width={100} height={100} />
                        <Image className="cursor-pointer hover:border-2 hover:border-blue-500 rounded-lg" src='/home/dr2.png' onClick={() => setImage('/home/dr2.png')} alt="" width={100} height={100} />
                    </div>
                </section>


                <section className="md:mx-[150px] mx-4">

                    <h3 className="text-white md:text-4xl text-3xl font-semibold mt-[50px] mb-[20px]">Product Detail:</h3>
                    <Separator className='md:w-[270px] w-[220px]  mt-[20px] mb-[50px] ' />
                    <h3 className="text-white md:text-2xl text-lg font-semibold mt-[50px] mb-[20px]"> Description:</h3>
                    <p className="text-white md:text-base text-sm my-5 md:mr-0 mr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>



            </main>


        </>
    )
}
