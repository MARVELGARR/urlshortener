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
    <main className="flex p-4 pr-4 flex-col justify-center items-center">
        <section className="flex flex-col-reverse items-center">
            <div className=''>
                <div className=" font-extrabold text-4xl text-center">{section1.h1}</div>
                <div className="text-center text-lg text-gray-400 tracking-wider leading-7 mt-2">{section1.p}</div>
                <div className="">{section1.btn1}</div>
            </div>
            <img className="ml-28 w-96 " src={HeroImage} alt="Hero image"/>
        </section>
        <section>
            <div className="shorten-desktop hidden">
                <form >
                    <input type="text"/>
                    <button type="submit" className="">{mainApp.btn2}</button>
                </form>
            </div>
            <div className=''></div>
            <div className='shorten-mobile'>
                <form >
                    <input type="text"/>
                    <button type="submit" className="">{mainApp.btn2}</button>
                </form>
            </div>
            <div className=''></div>
        </section>

        <section>
            <div className="">
                <h1 className="">{section2.h1}</h1>
                <p className="">{section2.p}</p>
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