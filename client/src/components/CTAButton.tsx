import React from "react"


export default function CTAButton({  ...rest }) {
   
    return (
        <button className={`mt-6 border-2  px-6 py-2 lg:px-4 lg:py-2 rounded-md transition-colors  ease-in cursor-pointer `} {...rest}>
           Contact Me.
        </button>
    );
}