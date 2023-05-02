import React from 'react'
import { footer } from './siteData'
import {v4 as uuid} from "uuid"


function Footer() {


  return (
    <div>
        <img
            src="/images/logo.svg"
            className=''
        />
        <div className="">
            <div>
                <div>Features</div>
                {footer.Features.map((items)=>{
                    return(
                        <div key={uuid()}>
                            <div  className="">{items}</div>
                        </ div>
                    )
                })}
            </div>
            <div>
                <div className="">Resources</div>
                <>
                    {footer.Resources.map((items)=>{
                        return(
                            <div key={uuid()} className="">{items}</div>
                        )
                    })}
                </>
            </div>
            <div>
                <div className="">Company</div>
                <>
                    {footer.Company.map((items)=>{
                        return(
                            <div key={uuid()}>
                                <div className="">{items}</div>
                            </div>
                        )
                    })}
                </>
            </div>
            <div className="bg-black">
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