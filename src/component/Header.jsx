import React, { useState } from 'react'
import {v4 as uuid} from "uuid";
import "../App.css"


function Header() {
    const [isOpen, setIsOpen] =useState(false)

    const handleMenu = ()=>{
        setIsOpen(!isOpen);
    }

    const header = {
        nav:{
            Links: ['Features', "Pricing", "Resources"]
        },
        logs:{
            Links:["Login", "Signup"]
        }
    }

  return (
    <div className='md:flex md:items-center'>
        <div className=" text-white text-center">

            <div className="md:mt-1 md:w-full md:h-24 md:justify-evenly   md:items-center pl-5 flex justify-between mt-4">
                <img 
                src="/images/logo.svg" 
                className=" object-fit w-28 h-7 mt-2"
                />
                <div className={`md:flex md:justify-between md:w-screen   md:text-black md:bg-transparent md:flex-row md:static    ${isOpen ? "lg:flex md:flex" : "lg:flex md:flex hidden"} flex w-5/6 h-72 justify-center items-center min flex-col gap-3 text-xl absolute top-14 rounded-xl pt-5 pb-5 right-8`}>

                    <nav className={`md:ml-16 md:flex-row flex flex-col gap-5 list-none`}>{header.nav.Links.map((items)=>{
                        return(
                            <li className="hover:text-cyan-400 flex cursor-pointer flex-col gap-3" key={uuid()}>
                                <div>{items}</div>
                            </li>
                        )
                    })}</nav>
                    <hr className="bg-white"/>
                    <div className="md:flex-row md:items-center md:pr-52 md:w-32 md:gap-5 flex flex-col gap-5">
                        {header.logs.Links.map((item)=>{
                            return(
                                <div key={uuid()} className="md:last:pl-4 md:last:pb-1 md:last:pt-1 md:last:flex md:last:justify-center md:last:items-center md:last:pr-4 md:last:w-32 md:last:text-white   cursor-pointer last:bg-cyan-400 last:p-3 last:rounded-3xl w-64  text-center">{item}</div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
        <div className=" w-10 h-10 md:hidden lg:hidden">
            {isOpen ? (<button onClick={handleMenu}>
                <img className="absolute h-10 w-10 top-1 right-5 " src="/images/close.svg"/>
            </button>) :
            (<button onClick={handleMenu}>
                <img className="absolute h-10 w-10 top-1 right-5" src="/images/open.svg"/>
            </button>)}
        </div>
    </div>
  )
}

export default Header