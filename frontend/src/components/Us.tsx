import{ useState } from 'react'
import couple_img from '../assets/couple-image.jpg'
import Message from './Message'
const Us = () => {
    const [isClick, setIsClick] = useState(false)
    const images = [
        couple_img, couple_img, couple_img, couple_img, couple_img, couple_img,
        couple_img, couple_img, couple_img, couple_img, couple_img, couple_img,
    ]


    const handleClickMessage = () => {
        setIsClick(!isClick)
    }
    return (
        <>
            {isClick ? <Message /> : <div className='bg-gray-100 flex justify-center items-center w-[100%] h-screen'>
                <div className='bg-white w-full h-auto rounded-lg flex justify-center items-center sm:w-[90%] xl:w-[80%]'>

                    <div className='w-[90%]'>
                        <h4 className='custom-font text-xl text-pink-500 place-self-center m-5 xl:text-4xl'>You & Me</h4>

                        <div className='h-120 overflow-y-auto xl:h-150'>
                            <div className='grid grid-cols-2 place-items-center gap-5 md:grid-cols-3 xl:grid-cols-4 '>
                                {images.map((image, index) => (
                                    <img className='w-60 h-auto rounded-3xl' key={index} src={image} alt="" />
                                ))}

                            </div>
                        </div>

                        <h4 className='custom-font bg-pink-500 text-md text-white place-self-center m-5 cursor-pointer px-5 py-2 rounded-3xl xl:text-xl' onClick={() => handleClickMessage()}>My Message</h4>
                    </div>

                </div>
            </div>}
        </>
    )
}

export default Us
