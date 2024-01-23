import React from 'react'

function Button() {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full w-48">
          Shop now
          <img
            src="/assets/icons/arrow-right.svg"
            alt="arrow right icon"
            className="ml-2 rounded-full w-5 h-5"
          />
        </button>
  )
}

export default Button