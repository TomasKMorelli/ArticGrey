
import { Link } from "@remix-run/react"
import React from "react"



export const notFound: React.FC= ()=> {

return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
        <div className="text-center px-5 mx-5">
            <h1 className="text-9xl">404</h1>
            <p className="font-semibold text-xl">Not Found, we are sorry</p>
            <p className="font-light mb-4">
                <span>You can go back to </span>
                <Link to="/" className="font-normal hover:underline transition-all text-black border-[1px] rounded-tr-xs">Home</Link>
            </p>
        </div>
      
    </div>
)
}

export default notFound ;