import React from 'react'
import { footer } from './siteData'
import {v4 as uuid} from "uuid"


function Footer() {


  return (
    <div className="md:flex-row md:p-10   bg-black text-center gap-8  text-white flex flex-col items-center">
        <img
            src="/images/logo.svg"
            className='fill mt-7'
        />
        <div className="md:flex-row md:gap-32 p-5    flex flex-col gap-10">
            <div className="flex flex-col gap-3">
                <div className="font-bold text-lg mb-3" >Features</div>
                {footer.Features.map((items)=>{
                    return(
                        <div className='' key={uuid()}>
                            <div  className="hover:text-cyan-400 cursor-pointer">{items}</div>
                        </ div>
                    )
                })}
            </div>
            <div>
                <div className="font-bold text-lg mb-3">Resources</div>
                <div className="flex md:mt-5 flex-col gap-3">
                    {footer.Resources.map((items)=>{
                        return(
                            <div key={uuid()} className="hover:text-cyan-400 cursor-pointer">{items}</div>
                        )
                    })}
                </div>
            </div>
            <div>
                <div className="font-bold text-lg mb-3">Company</div>
                <div className="flex md:mt-5 flex-col gap-3">
                    {footer.Company.map((items)=>{
                        return(
                            <div key={uuid()}>
                                <div className="hover:text-cyan-400 cursor-pointer">{items}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=" md:gap-5   flex gap- mb-5">
                {footer.socials.map((items)=>{
                    return(
                        <img key={uuid()} className="md:h-5" src={items}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Footer