import React from 'react'
import { footer } from './siteData'
import {v4 as uuid} from "uuid"


function Footer() {


  return (
    <div className="bg-black text-center gap-8  text-white flex flex-col items-center">
        <img
            src="/images/logo.svg"
            className='fill mt-7'
        />
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
                <div className="font-bold text-lg mb-3" >Features</div>
                {footer.Features.map((items)=>{
                    return(
                        <div key={uuid()}>
                            <div  className="">{items}</div>
                        </ div>
                    )
                })}
            </div>
            <div>
                <div className="font-bold text-lg mb-3">Resources</div>
                <div className="flex flex-col gap-3">
                    {footer.Resources.map((items)=>{
                        return(
                            <div key={uuid()} className="">{items}</div>
                        )
                    })}
                </div>
            </div>
            <div>
                <div className="font-bold text-lg mb-3">Company</div>
                <div className="flex flex-col gap-3">
                    {footer.Company.map((items)=>{
                        return(
                            <div key={uuid()}>
                                <div className="">{items}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex gap-5 mb-5">
                {footer.socials.map((items)=>{
                    return(
                        <img key={uuid()} className="" src={items}/>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Footer