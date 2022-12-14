import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-9 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest font-semibold text-gray-600'>
                    LET'S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Become a  <span className='text-[#f00]'>Skilled Software Engineer,</span>Without Prior Knowledge.
                </h1>

                <p className='py-4 text-gray-600 max-w-[70%] m-auto'> Get the skills and experience you need to become a Software Engineer, in today’s global market.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Main