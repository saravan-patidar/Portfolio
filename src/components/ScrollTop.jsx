import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

const ScrollTop = ({
    showBelow,
}) => {

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.scrollY > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
        }
        return () => { window.removeEventListener(`scroll`, handleScroll) }

    },[show])

    return (
        <div >
            {show &&
                <div className='z-50 fixed bottom-10 right-3  sm:right-10 shadow-lg p-2 rounded-full bg-black cursor-pointer' onClick={handleClick}>
                    <FaHome className='text2xl sm:text-3xl text-amber-600' />
                </div>
            }
        </div>
    )
}
export default ScrollTop;