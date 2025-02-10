import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Pin = () => {
    const navigate = useNavigate()
    const [pin, setPin] = useState<number[]>([])
    const [errorPinMessage, setErrorPinMessage] = useState<string>('')
    console.log(pin)
    const correct = '1214'
    const handlePin = (pin: number) => {
        setPin((prev) => prev.length >= 4 ? prev : [...prev, pin])
    }

    const handleX = () => {
        setPin((prev) => {
            if (prev.length === 0) return prev;
            const newPin = [...prev];
            newPin.pop()
            return newPin;
        })
    }

    useEffect(() => {
        setErrorPinMessage('')
    },[pin])

    useEffect(() => {
        const f = () => {
            if (pin.length === 4) {
                if (pin.join('') === correct) {
                    console.log('correct')
                    navigate('/dashboard')

                } else {
                    console.log('wrong pin')
                    setErrorPinMessage('Incorrect pin')
                }
            }
        }
        f()
    }, [pin])

    return (
        <div className='bg-gray-100 flex justify-center items-center w-[100%] min-h-screen h-auto'>
            <div className='bg-white w-[70%] h-auto rounded-lg justify-center border-4 border-pink-500 items-center p-4 sm:w-[90%] md:w-[80%] h-100 xl:w-[50%]'>
                <input type="number" value={pin.join('')} className={`w-full h-10 bg-pink-500 rounded-lg text-white p-2 text-center ${errorPinMessage ? 'border-2 border-red-500' : ''}`} disabled placeholder='Enter Pin' />
                {errorPinMessage && <p className='m-0 p-0 text-red-500 text-xs text-center'>{errorPinMessage}</p>}
                <div className='flex justify-center w-full mt-4'>
                    <div className='grid grid-cols-3 gap-7'>
                        <button onClick={() => handlePin(1)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>1</button>
                        <button onClick={() => handlePin(2)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>2</button>
                        <button onClick={() => handlePin(3)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>3</button>
                        <button onClick={() => handlePin(4)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>4</button>
                        <button onClick={() => handlePin(5)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>5</button>
                        <button onClick={() => handlePin(6)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>6</button>
                        <button onClick={() => handlePin(7)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>7</button>
                        <button onClick={() => handlePin(8)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>8</button>
                        <button onClick={() => handlePin(9)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>9</button>
                        <button onClick={() => handlePin(10)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white opacity-0'></button>
                        <button onClick={() => handlePin(0)} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>0</button>
                        <button onClick={() => handleX()} className='bg-blue-400 h-10 w-11 rounded-2xl text-white'>x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pin
