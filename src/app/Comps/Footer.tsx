
import Image from 'next/image'
import Link from 'next/link'
import { BsYoutube, BsGithub } from 'react-icons/bs'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import { Separator } from "../../../components/ui/separator"

export default function Footer() {
    return (
        <>
            <Separator className='md:w-[1250px] w-[320px] mx-auto  mt-[60px] md:mb-[50px] '/>
            <main className=' md:mt-[20px] grid md:grid-cols-4 pb-[30px] gap-5 justify-center'>
            
                <section className=' justify-center items-center '>
                    <Image className='md:mx-0 mx-auto ' src='/home/styleUp.png' alt='styleUp' width={120} height={100} />
                    <p className='text-white mt-5 md:px-0 px-5 text-center md:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </section>

                <section className='mt-5 md:ml-10 text-center md:text-left'>
                    <h3 className='text-white md:text-3xl text-4xl font-bold mb-5'>About</h3>
                    <ul className=' justify-center items-center'>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >Products</Link></li>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >Resources</Link></li>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >Terms & Conditions</Link></li>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >FAQs</Link></li>
                    </ul>
                </section>


                <section className='mt-5 md:ml-10  text-center md:text-left' >
                    <h3 className='text-white md:text-3xl text-4xl font-bold mb-5'>Company</h3>
                    <ul className=' justify-center items-center'>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >Our Team</Link></li>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >Partner With Us</Link></li>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >Privacy Policy</Link></li>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >Features</Link></li>
                    </ul>
                </section>


                <section className='mt-5  text-center md:text-left'>
                    <h3 className='text-white md:text-3xl text-4xl font-bold mb-5'>Contacts</h3>
                    <ul className=' justify-center items-center'>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >+92 321 3876575</Link></li>
                        <li className='text-white text-base my-6 hover:text-lg'><Link href='/' >jalil786.umer@gmail.com</Link></li>

                        <span className='text-white text-4xl flex md:ml-0 ml-[95px]'>
                            <Link className='mr-5  hover:text-5xl hover:text-red-500' href=''><BsYoutube /></Link>
                            <Link className='mr-5 hover:text-5xl hover:text-blue-500' href=''><BsGithub /></Link>
                            <Link className='mr-5 hover:text-5xl  hover:text-green-600' href=''><SiFiverr /></Link>
                            <Link className='mr-5 hover:text-5xl hover:text-green-400' href=''><SiUpwork /></Link>

                        </span>

                    </ul>
                </section>
            </main>
        </>
    )
}
