import { useEffect } from "react"

const Message = () => {

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
    return (
        <div className='bg-gray-100 flex justify-center items-center w-[100%] min-h-screen h-auto'>
            <div className='bg-white w-full h-auto rounded-lg  justify-center items-center p-4 sm:w-[90%] md:w-[80%] h-100 xl:w-[50%]'>
                <h2 className="text-xl text-pink-500 place-self-center my-5 custom-font">Happy Valentine's Day</h2>
                <div className="p-5 border-3 border-pink-500 shadow-lg min-h-100 h-auto w-[90%] rounded-2xl mx-auto">
                    <p className="text-black text-sm custom-font">
                        Good morning baby🤗❤️, Happy Valentine's Day po🥰 and Happy 2 Years and 11 Months po satin😚❤️, I love you grabee ang tagal na natin, sana mag patuloy pa to at sana magtagal pa tayo, stay strong lang satin palagi🤗❤️,love na love po kita sobraa🥰 wag na tayo mag away palagi,
                        enjoyin lang natin tong araw na to na mag kasama🤗, see you po I love you mwaa🤗❤️
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Message
