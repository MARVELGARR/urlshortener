import React from 'react'
import {v4 as uuid} from "uuid";
import HeroImage from "/images/illustration-working.svg"
import {section1} from "./siteData"
import {mainApp} from "./siteData"
import {section2} from "./siteData"
import {section3} from "./siteData"
import "../App.css"

function Hero() {



  return (
    <main className="flex gap-10 p-4 pr-4 flex-col justify-center items-center">
        <section className="flex flex-col-reverse items-center">
            <div className='flex flex-col items-center gap-5'>
                <div className=" font-extrabold text-4xl text-center">{section1.h1}</div>
                <div className="text-center text-lg text-gray-400 tracking-wider leading-7 mt-2">{section1.p}</div>
                <div className=" bg-cyan-400 w-44 text-center p-2 rounded-xl text-lg font-bold text-white">{section1.btn1}</div>
            </div>
            <img className="ml-28 w-96 " src={HeroImage} alt="Hero image"/>
        </section>
        <section className="w-full h-32">
            <div className="shorten-desktop hidden ">
                <form >
                    <input type="text"/>
                    <button type="submit" className="bg-cyan-400 w-44 text-center p-2 rounded-xl text-lg font-bold text-white">{mainApp.btn2}</button>
                </form>
            </div>
            <div className='hidden'></div>
            <div className='shorten-mobile h-full rounded-lg'>
                <form className="flex flex-col pl-5 pr-5 p-3 h-full gap-5">
                    <input type="text" className="rounded-lg h-10" />
                    <button type="submit" className="bg-cyan-400 w-full h-10 text-center p-1 rounded-lg text-lg font-bold text-white">{mainApp.btn2}</button>
                </form>
            </div>
            <div className=''></div>
        </section>

        <section>
            <div className="">
                <h1 className="text-3xl font-bold text-center">{section2.h1}</h1>
                <p className="text-center text-lg text-gray-400 tracking-wider leading-7">{section2.p}</p>
            </div>
            <div className="">
                <article className=''>
                    <img
                    src={section2.articles[0].img} 
                    className="" />
                    <div className="">
                        <div className="">{section2.articles[0].h3}</div>
                        <div className="">{section2.articles[0].p}</div>

                    </div>
                </article>
                <article className=''>
                <img
                    src={section2.articles[1].img} 
                    className="" />
                    <div className="">
                        <div className="">{section2.articles[1].h3}</div>
                        <div className="">{section2.articles[1].p}</div>

                    </div>
                </article>
                <article className=''>
                <img
                    src={section2.articles[2].img} 
                    className="" />
                    <div className="">
                        <div className="">{section2.articles[2].h3}</div>
                        <div className="">{section2.articles[2].p}</div>

                    </div>
                </article>
            </div>
        </section>
        <section>
            <div className="boost-desktop hidden"></div>
            <div className="boost-mobile "></div>
        </section>
    </main>
  )
}

export default Hero