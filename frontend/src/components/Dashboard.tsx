import { useEffect, useState } from 'react'
import couple_img from '../assets/couple-image.jpg'
import Us from './Us'
import FallingHearts from './FallingHearts'
const Dashboard = () => {
    const [days, setDays] = useState<number>()
    const [hours, setHours] = useState<number>()
    const [minutes, setMinutes] = useState<number>()
    const [seconds, setSeconds] = useState<number>()
    const [years, setYears] = useState<number>()
    const [months, setMonths] = useState<number>()
    const [isClick, setIsClick] = useState(false)

    const handleClick = () => {
        setIsClick(!isClick)
    }

    const date = '2021-12-14'
    useEffect(() => {
        // Your official date (in YYYY-MM-DD format or any valid date format)
        const officialDate: any = new Date(`${date}T00:00:00`);

        // Update the countdown every second
        setInterval(function () {
            // Get the current date
            const currentDate: any = new Date();

            // Calculate the difference in milliseconds
            const difference = currentDate - officialDate;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25))
            // const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))


            const getMonthsDifference = (startDate:any) => {
                const start = new Date(startDate);
                const now = new Date();
              
                const yearsDiff = now.getFullYear() - start.getFullYear();
                const monthsDiff = now.getMonth() - start.getMonth();
              

                let totalYears = yearsDiff;
                let totalMonths = monthsDiff;
              
                if (monthsDiff < 0) {
                  totalYears -= 1;
                  totalMonths += 12;
                }
                
                return totalMonths;
              };
              const months = getMonthsDifference(officialDate)
            //   console.log(getMonthsDifference("2021-12-14"));

            setDays(days)
            setHours(hours)
            setMinutes(minutes)
            setSeconds(seconds)
            setYears(years)
            setMonths(months)

        }, 1000);

    }, [])


    return (

        <>
            <FallingHearts />
            {isClick ? <Us /> : <div className='bg-gray-100 flex justify-center items-center w-full h-screen sm:bg-gray-100 h-screen xl:h-screen'>

                <div className='bg-white w-[90%] h-auto px-2 py-10 rounded-lg sm:w-[90%] lg:w-[80%] xl:w-[60%] xl:h-auto '>

                    <div className='flex justify-center items-center gap-5 sm:gap-24 xl:flex justify-center items-center'>
                        <div className="w-16 h-16 md:w-[80px] md:h-[80px] xl:w-[100px] h-[100px] flex items-center">
                            <img
                                className="rounded-full h-auto w-full border-2 sm:border-4 border-pink-500"
                                src={couple_img}
                                alt="Couple"
                            />
                        </div>

                        <h2 className='custom-font text-white bg-pink-500 px-5 py-3 text-sm rounded-4xl sm:text-lg md:font-normal xl:text-2xl'>How long have been together ?  </h2>
                    </div>
                    <h2 className='custom-font text-red-500 text-xl  mt-5 mb-5 place-self-center font-bold sm:text-2xl xl:text-3xl'>{years} YEARS & {months} MONTHS</h2>

                    <div className='flex justify-center w-[80%] mx-auto '>
                        {/* days */}
                        <div className=''>
                            <h1 className='custom-font font-bold text-pink-500 text-2xl place-self-center mb-2 sm:text-4xl xl:text-6xl'>{days}</h1>
                            <h6 className='custom-font font-bold text-pink-500 text-lg place-self-center sm:text-md xl:text-2xl'>Days</h6>
                        </div>

                        <h2 className='custom-font text-pink-500 text-lg sm:text-[35px] ml-3 mr-3 xl:text-6xl ml-5 mr-5 '>:</h2>
                        {/* hours */}
                        <div className=''>
                            <h1 className='custom-font font-bold text-pink-500 text-2xl place-self-center mb-2 sm:text-4xl xl:text-6xl'>{hours}</h1>
                            <h6 className='custom-font font-bold text-pink-500 text-lg place-self-center sm:text-md xl:text-2xl'>Hrs</h6>
                        </div>
                        <h2 className='custom-font text-pink-500 text-lg sm:text-[35px] ml-3 mr-3 xl:text-6xl ml-5 mr-5 '>:</h2>
                        {/* minutes */}
                        <div className=''>
                            <h1 className='custom-font font-bold text-pink-500  text-2xl place-self-center mb-2 sm:text-4xl xl:text-6xl'>{minutes}</h1>
                            <h3 className='custom-font font-bold text-pink-500 text-lg place-self-center xl:text-2xl'>Mins</h3>
                        </div>
                        <h2 className='custom-font text-pink-500 text-lg sm:text-[35px] ml-3 mr-3 xl:text-6xl ml-5 mr-5 '>:</h2>
                        {/* seconds */}
                        <div className=''>
                            <h1 className='custom-font font-bold text-pink-500  text-2xl place-self-center mb-2 sm:text-4xl xl:text-6xl'>{seconds}</h1>
                            <h3 className='custom-font font-bold text-pink-500 text-lg place-self-center xl:text-2xl'>Secs</h3>
                        </div>
                    </div>

                    <div className='w-[50%] mx-auto sm:w-[50%]'>
                        <h2 className='
                        custom-font
                        text-xs
                        text-white
                            bg-pink-500
                            font-bold
                            place-self-center 
                            px-5 py-2 rounded-3xl
                            mt-10 cursor-pointer
                            
                            sm:text-sm xl:text-2xl'
                            onClick={() => handleClick()}>Lori & Nick</h2>

                        <h2 className='mt-10 place-self-center text-xl'>💞 ❤️ 💞 ❤️</h2>
                    </div>

                </div>
            </div>}
        </>
    )
}

export default Dashboard
