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
    <div>
        <div className="relative text-white text-center">

            <div className=" flex justify-between mt-4">
                <img 
                src="/images/logo.svg" 
                className=" object-fit w-28 h-7"
                />
                <div className={` ${isOpen ? "" : "hidden"} flex w-5/6 h-72 justify-center items-center min flex-col gap-3 text-xl absolute top-14 rounded-xl pt-5 pb-5 right-8`}>

                    <nav className={` flex flex-col gap-5 list-none`}>{header.nav.Links.map((items)=>{
                        return(
                            <li className="flex cursor-pointer flex-col gap-3" key={uuid()}>
                                <div>{items}</div>
                            </li>
                        )
                    })}</nav>
                    <hr className="bg-white"/>
                    <div className="flex flex-col gap-5">
                        {header.logs.Links.map((item)=>{
                            return(
                                <div key={uuid()} className="cursor-pointer last:bg-cyan-400 last:p-3 last:rounded-3xl w-64  text-center">{item}</div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
        <div className=" w-10 h-10 ">
            {isOpen ? (<button onClick={handleMenu}>
                <img className="absolute h-10 w-10 top-2 right-0 " src="/images/close.svg"/>
            </button>) :
            (<button onClick={handleMenu}>
                <img className="absolute h-10 w-10 top-2 right-0" src="/images/open.svg"/>
            </button>)}
        </div>
    </div>
  )
}

export default Header