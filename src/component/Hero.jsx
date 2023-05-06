import React, { useEffect, useState } from 'react'
import {v4 as uuid} from "uuid";
import HeroImage from "/images/illustration-working.svg"
import {section1} from "./siteData"
import {mainApp} from "./siteData"
import {section2} from "./siteData"
import {section3} from "./siteData"
import "../App.css"

function Hero() {

    const [text, setText]= useState([]);
    const [message, setMessage]= useState("");
    const [link, setLink]= useState([]);
    const [coppied, setIsCoppied]= useState(null);
    const [list, setList]= useState([{id:'', L1:"", L2:""}]);
    const api = `https://api.shrtco.de/v2/shorten?url=${text}`
    
    useEffect(()=>{
        const storedList = localStorage.getItem('list');
        if (storedList) {
          setList(JSON.parse(storedList));
        }
    }, [])

    const handleCopy = (link)=>{
        navigator.clipboard.writeText(link);
        setIsCoppied(link) 
    }

    async function getLink (){
        const req = await fetch(api);
        const res = await req?.json();
        setLink(res);
        if(list.length <= 3){

            setList([...list, {id:res.result.code, L1:res.result.short_link, L2:res.result.original_link}]);
            localStorage.setItem('list', JSON.stringify(list));
        }
    }

    const handleTyping = (e) =>{
        let value = e.target.value;
        setText(value);
    }
    const handleError = (text, message) =>{
        if(text == ""){
            setMessage(message);
        }
        else{
            setMessage("");
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        handleError(text, "Please add a link")
        getLink();
        setText("");

    }
    const handleDelete = (key) =>{
        const updatedList = list.filter((item)=>{
            return item.id!== key;
            
        })
        setList(updatedList)
        localStorage.setItem('list', JSON.stringify(updatedList));
        localStorage.removeItem(key);
    }

  return (
    <main className=" md:p-20 bg-slate-300/50 flex gap-10 p-4 pr-4 flex-col justify-center items-center">
        <section className="bg-white md:pt-10 md:pl-16 md:pr-16 md:pb-10 md:flex-row md:h-72     flex flex-col-reverse items-center">
            <div className='md:items-start md:w-2/4  flex flex-col items-center gap-5'>
                <div className="md:text-5xl md:text-left    font-extrabold text-4xl text-center">{section1.h1}</div>
                <div className="md:text-left text-center text-lg text-gray-400 tracking-wider leading-7 mt-2">{section1.p}</div>
                <div className=" bg-cyan-400 w-44 text-center p-2 rounded-xl text-lg font-bold text-white">{section1.btn1}</div>
            </div>
            <img className=" md:w-2/4 ml-28 w-96 " src={HeroImage} alt="Hero image"/>
        </section>
        <section className=" bg-white w-full h-aut0">
            <div className="md:block    shorten-desktop hidden ">
                <form
                    className="md:items-center md:justify-between  flex flex-row pl-5 pr-5 p-3 h-full gap-5" 
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text" 
                        value={text}
                        onChange={handleTyping} 
                        className="md:w-3/4 text-lg placeholder:ml-5 rounded-lg mt-1 mb-1 h-10 pl-5 "
                        placeholder='Shorten a link here...'
                    />
                    <div className=" text-red-900 italic">{message}</div>
                    <button type="submit" className="bg-cyan-400 w-44 text-center p-2 rounded-xl text-lg font-bold text-white">{mainApp.btn2}</button>
                </form>
            </div>
            <div className='hidden'></div>
            <div className='md:hidden shorten-mobile h-full rounded-lg flex flex-col'>
                <form
                    onSubmit={handleSubmit} 
                    className="flex flex-col pl-5 pr-5 p-3 h-full gap-5"
                >   
                    <div className='flex flex-col '>

                        <input type="text"
                            value={text}
                            className="rounded-lg mt-1 mb-1 h-10 text-lg pl-5 " 
                            onChange={handleTyping}
                            placeholder="Shorten a link here..."
                        />
                        <div className=" h-1  text-red-400 italic">{message}</div>
                    </div>
                    <button type="submit" className="bg-cyan-400 cursor-pointer w-full h-10 text-center p-1 rounded-lg text-lg font-bold text-white">{mainApp.btn2}</button>
                </form>
            </div>
            <div className='md:mt-7  gap-4  md:bg-inherit bg-white flex flex-col md:gap-7 '>
                { list.map((item) => (
                  item && item.L1 && (  <div key={item.code} className=" md:bg-white   md:flex-row md:justify-evenly flex flex-col gap-3 justify-center p-4">
                        <div className="md:flex md:gap-20 md:flex-row-reverse">

                            <div>{item.L1}</div>
                            <hr />
                            <div className="text-cyan-400">{item.L2.slice(0, 40) + "..."}</div>
                        </div>
                        <button
                            type="button"
                            onClick={()=>handleCopy(item.L1)} 
                            className={`md:w-44 md:rounded-lg    ${coppied===item.L1 ? " bg-purple-950":"bg-cyan-400"} font-bold text-lg text-white flex items-center p-2 rounded-xl justify-center`}
                        >{coppied === item.L1 ? "coppied!" : "copy"}</button>
                        <button
                            onClick={()=>handleDelete(item.id)} 
                            className="lg:block bg-red-400 lg:w-28 h-10 rounded-lg text-white "
                        >
                            Delet
                        </button>
                    </div> )
                ))}
            </div>
        </section>

        <section className='h-aut0'>
            <div className="md:pl-48 md:pr-48    flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-center">{section2.h1}</h1>
                <p className="text-center text-lg text-gray-400 tracking-wider leading-7">{section2.p}</p>
            </div>
            <div className="md:flex-row md:mt-20    flex gap-24 flex-col justify-center items-center">
                <article className='md:mb-10 md:p-5   relative pt-10 pb-10 bg-white mt-10 text-center gap-5    flex flex-col justify-center items-center'>
                    <img
                    src={section2.articles[0].img} 
                    className="articleImg " />
                    <div className="">
                        <div className=" font-bold text-lg">{section2.articles[0].h3}</div>
                        <div className="">{section2.articles[0].p}</div>

                    </div>
                </article>
                <article className='md:mt-20 md:p-5   relative pt-10 pb-10 bg-white text-center gap-5 flex flex-col justify-center items-center'>
                    <img
                    src={section2.articles[1].img} 
                    className="articleImg" />
                    <div className="">
                        <div className="lol font-bold text-lg"><span className="me  hidden md:block md:-left-12 md:top-10 md:rotate-90"></span>{section2.articles[1].h3}</div>
                        <div className="">{section2.articles[1].p}</div>

                    </div>
                </article>
                <article className='md:mt-32 md:p-5  relative pt-10 pb-10 bg-white text-center gap-5 flex flex-col justify-center items-center'>
                    <img
                    src={section2.articles[2].img} 
                    className="articleImg" />
                    <div className="">
                        <div className="font-bold text-lg"><span className='me hidden md:block md:-left-12 md:top-20 md:rotate-90'></span>{section2.articles[2].h3}</div>
                        <div className="">{section2.articles[2].p}</div>

                    </div>
                </article>
            </div>
        </section>
        <section>
            <div className="boost-desktop md:flex md:gap-5 flex-col justify-center items-center  hidden">
                <h1 className=" text-white font-bold text-3xl">Boost your links today</h1>
                <div className=" bg-cyan-400 rounded-xl p-2 flex justify-center items-center font-bold w-44">Get Started</div> 
            </div>
            <div className="md:hidden    boost-mobile flex flex-col justify-center gap-5 items-center">
                <h1 className="text-white font-bold text-3xl">Boost your links today</h1>
                <div className=" bg-cyan-400 rounded-xl p-2 flex justify-center items-center font-bold w-44">Get Started</div>
            </div>
        </section>
    </main>
  )
}

export default Hero