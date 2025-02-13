import { useEffect } from 'react'
import { useState } from 'react'
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// import img1 from '../assets/us/img1.jpg'
import img2 from '../assets/us/img2.jpg'
import img3 from '../assets/us/img3.jpg'
import img4 from '../assets/us/img4.jpg'
// import img5 from '../assets/us/img5.jpg'
import img6 from '../assets/us/img6.jpg'
import img7 from '../assets/us/img7.jpg'
import img8 from '../assets/us/img8.jpg'
import img9 from '../assets/us/img9.jpg'
import img10 from '../assets/us/img10.jpg'
import img11 from '../assets/us/img11.jpg'
import img12 from '../assets/us/img12.jpg'
import img13 from '../assets/us/img13.jpg'
import img14 from '../assets/us/img14.jpg'
import img15 from '../assets/us/img15.jpg'
import img16 from '../assets/us/img16.jpg'
import img17 from '../assets/us/img17.jpg'
import img18 from '../assets/us/img18.jpg'
import img19 from '../assets/us/img19.jpg'
import img20 from '../assets/us/img20.jpg'
import img21 from '../assets/us/img21.jpg'
import img22 from '../assets/us/img22.jpg'
import img23 from '../assets/us/img23.jpg'
import img24 from '../assets/us/img24.jpg'
import img25 from '../assets/us/img25.jpg'
import img26 from '../assets/us/img26.jpg'

const Us = () => {
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    console.log(selectedImage)
    const images: string[] = [
        img2, img3, img4, img6,
        img7, img8, img9, img10, img11, img12,
        img13, img14, img15, img16, img17, img18, img19,
        img20, img21, img22, img23, img24, img25, img26
    ]


    const handleClickMessage = () => {
        navigate('/message')
    }

    useEffect(() => {
        const handleBack = () => {
            console.log("Back button was pressed!");
            window.history.back(); // Go back
        };

        window.addEventListener("popstate", handleBack);

        return () => {
            window.removeEventListener("popstate", handleBack);
        };
    }, []);

    const handleLeftClick = () => {
        setSelectedImage((prev) => prev ? prev <= 0 ? images.length - 1 : prev - 1 : images.length - 1)
    }

    const handlerighttClick = () => {
        setSelectedImage((prev) => prev ? prev === images.length - 1 ? 0 : prev + 1 : 1)
    }

    const cancelButton = () =>{
        setSelectedImage(null)
    }

    return (
        <>
             <div className='relative bg-gray-100 flex justify-center items-center w-[100%] h-screen'>
                    <div className='bg-white w-full h-screen rounded-lg flex justify-center items-center  sm:w-[90%] sm:h-auto   xl:w-[80%]'>

                        <div className='w-[90%]'>
                            <h4 className='custom-font text-xl text-pink-500 place-self-center m-5 xl:text-4xl'>You & Me</h4>

                            <div className='h-120 overflow-y-auto xl:h-150'>
                                <div className='grid grid-cols-2 place-items-center gap-5 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 '>
                                    {images.map((image, index) => (
                                        <img onClick={() => setSelectedImage(index)} className='w-60 h-auto rounded-3xl' key={index} src={image} alt="" />
                                    ))}

                                </div>
                            </div>

                            <h4 className='custom-font bg-pink-500 text-sm text-white place-self-center m-5 cursor-pointer px-5 py-2 rounded-3xl xl:text-xl' onClick={() => handleClickMessage()}>My Message</h4>
                        </div>

                    </div>



                    {selectedImage || selectedImage === 0 ?
                        <div className='absolute flex w-[80%] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black'>
                       
                            < FaCaretLeft className='absolute left-0 top-1/2  -translate-y-1/2' onClick={() => handleLeftClick()} size={35} color='white'/>
                            <img src={images[selectedImage]} className='w-full h-auto ' alt="" />
                            < FaCaretRight  className='absolute right-0 top-1/2  -translate-y-1/2' onClick={() => handlerighttClick()} size={35} color='white'/>

                            <button onClick={() => cancelButton()} className='absolute right-2 top-2 text-md text-black font-bold'>X</button>
                        </div> : ''}
                </div>


                
        </>
    )
}

export default Us
