import React, { useState } from 'react'
import couple_img from '../assets/couple-image.jpg'
import Us from './Us'
import FallingHearts from './FallingHearts'
const Dashboard = () => {

    const [isClick, setIsClick] = useState(false)

    const handleClick = () => {
        setIsClick(!isClick)
    }
    return (

        <>
            {/* <FallingHearts /> */}
            {isClick ? <Us /> : <div className='bg-white flex justify-center items-center w-full h-screen sm:bg-gray-100 h-screen xl:h-screen'>

                <div className='bg-white w-full h-auto rounded-lg p-5 sm:w-[90%] xl:w-[60%] p-10'>

                    <div className='flex justify-center items-center gap-10 sm:gap-24 xl:flex justify-center items-center'>
                        <div className="w-16 h-16 md:w-[80px] md:h-[80px] xl:w-[100px] h-[100px] flex items-center">
                            <img
                                className="rounded-full h-auto w-full border-2 sm:border-4 border-pink-500"
                                src={couple_img}
                                alt="Couple"
                            />
                        </div>

                        <h2 className='custom-font text-white bg-pink-500 px-5 py-3 text-sm rounded-4xl sm:text-lg md:font-normal xl:text-2xl'>How long have been together ?  </h2>
                    </div>
                    <h2 className='custom-font text-red-500 text-xl  mt-15 mb-15 place-self-center font-bold sm:text-2xl xl:text-3xl'>1 YEARS & 2 MONTHS</h2>

                    <div className='flex justify-center w-[80%] mx-auto '>
                        {/* days */}
                        <div className=''>
                            <h1 className='custom-font font-bold text-pink-500 text-2xl place-self-center mb-2 sm:text-4xl xl:text-6xl'>500</h1>
                            <h6 className='custom-font font-bold text-pink-500 text-lg place-self-center sm:text-md xl:text-2xl'>Days</h6>
                        </div>

                        <h2 className='custom-font text-pink-500 text-lg sm:text-[35px] ml-3 mr-3 xl:text-6xl ml-5 mr-5 '>:</h2>
                        {/* hours */}
                        <div className=''>
                            <h1 className='custom-font font-bold text-pink-500 text-2xl place-self-center mb-2 sm:text-4xl xl:text-6xl'>12</h1>
                            <h6 className='custom-font font-bold text-pink-500 text-lg place-self-center sm:text-md xl:text-2xl'>Hrs</h6>
                        </div>
                        <h2 className='custom-font text-pink-500 text-lg sm:text-[35px] ml-3 mr-3 xl:text-6xl ml-5 mr-5 '>:</h2>
                        {/* minutes */}
                        <div className=''>
                            <h1 className='custom-font font-bold text-pink-500  text-2xl place-self-center mb-2 sm:text-4xl xl:text-6xl'>40</h1>
                            <h3 className='custom-font font-bold text-pink-500 text-lg place-self-center xl:text-2xl'>Mins</h3>
                        </div>
                        <h2 className='custom-font text-pink-500 text-lg sm:text-[35px] ml-3 mr-3 xl:text-6xl ml-5 mr-5 '>:</h2>
                        {/* seconds */}
                        <div className=''>
                            <h1 className='custom-font font-bold text-pink-500  text-2xl place-self-center mb-2 sm:text-4xl xl:text-6xl'>10</h1>
                            <h3 className='custom-font font-bold text-pink-500 text-lg place-self-center xl:text-2xl'>Secs</h3>
                        </div>
                    </div>

                    <div className='w-[50%] mx-auto sm:w-[50%]'>
                        <h2 className='
                        custom-font
                        text-sm 
                        text-white
                            bg-pink-500
                            font-bold
                            place-self-center 
                            px-5 py-2 rounded-3xl
                            mt-20 cursor-pointer
                            
                            sm:text-sm xl:text-2xl'
                            onClick={() => handleClick()}>Lori & Nick</h2>

                        <h2 className='mt-10 place-self-center text-2xl'>💞 ❤️ 💞 ❤️</h2>
                    </div>

                </div>
            </div>}
        </>
    )
}

export default Dashboard
