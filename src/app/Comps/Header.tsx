'use client'
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { useSelector} from 'react-redux'



export default function Header() {
    const count = useSelector((e: any) => e.cartCounter.value)
  
    return (
        <>

            <div className="w-full">

                <nav className="flex md:mb-5 md:gap-[65px] gap-[180px] items-center justify-center">

                    <Link href='/' >
                        <Image className="md:w-[140px] w-[100px] md:h-[100px] h-[60px] mr-7 md:mr-0  -mt-3 md:mt-0" src='/home/styleUp.png' alt="StyleUp logo" width={140} height={100} />
                    </Link>

                    <span className="md:flex items-center relative hidden ">
                        <BsSearch className=" absolute w-5 h-5 ml-3  text-slate-400" />
                        <input className=" border-2 border-slate-400 rounded-full pl-10 px-5 py-3 w-[400px] focus:border-white text-white placeholder:text-slate-400 bg-transparent" type="search" placeholder="Search items, Fashion and Collections" />
                    </span>

                    <ul className="md:flex hidden items-center gap-[60px]">
                        <li className="text-white text-lg hover:text-xl"><Link href='/'>Home </Link></li>
                        <li className="text-white text-lg hover:text-xl"><Link href='/male'>Male </Link></li>
                        <li className="text-white text-lg hover:text-xl"><Link href='/female'>Female </Link></li>
                        <li className="text-white text-lg hover:text-xl"><Link href='/kids'>Kids </Link></li>
                        <li className="text-white text-lg hover:text-xl"><Link href='/collection'>Collection </Link></li>
                    </ul>


                    <span className="relative">
                        <p className="absolute top-0 right-0 bg-white  rounded-full text-[12px] px-[5px] font-semibold">{count}</p>
                        <Link href='/cart' >
                            <button className=" bg-gradient-to-t from-[#671ae4] to-[#b75cff] p-4 rounded-full md:text-2xl text-lg text-white inline"><ImCart /></button>
                        </Link>
                    </span>





                </nav>
                <ul className="flex md:hidden items-center gap-[40px] justify-center mt-5 bg-gradient-to-t from-[#671ae4] to-[#b75cff] py-2  w-full">
                    <li className="text-white text-lg hover:text-xl font-bold"><Link href='/male'>Male </Link></li>
                    <li className="text-white text-lg hover:text-xl font-bold"><Link href='/female'>Female </Link></li>
                    <li className="text-white text-lg hover:text-xl font-bold"><Link href='/kids'>Kids </Link></li>
                    <li className="text-white text-lg hover:text-xl font-bold"><Link href='/collection'>Collection </Link></li>
                </ul>

            </div>
        </>
    )
}
