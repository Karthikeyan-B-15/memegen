import React, { useEffect, useState } from 'react'
import '../css/section.css'


function Section() {
    const [img,setImg]=useState({
        topText:"",
        bottomText:"",
        initialImg:"https://i.imgflip.com/30b1gx.jpg"
    })
    const [allImg,setAllImg]=useState([])
    useEffect(()=>{
        async function getMeme(){
            const res=await fetch("https://api.imgflip.com/get_memes")
            const data =await res.json()
            setAllImg(data.data.memes)
    }getMeme()
},[])
    

    
    function getImage(){

        const ranNum=Math.floor(Math.random()*allImg.length)
        const url=allImg[ranNum].url
        setImg(prevImg=>({
                ...prevImg,
                topText:"",
                bottomText:"",
                initialImg:url
        }))
    
    }
    function inputChange(event){
        const {name,value}=event.target;
        setImg(prevImg=>({
            ...prevImg,
            [name]:value
        }))
    }
    
  return (
    <div>
        <form>
            <input  type="text" placeholder=" Enter top text" name='topText' value={img.topText} onChange={inputChange}/>
            <input  type="text" placeholder=" Enter bottom text" name='bottomText' value={img.bottomText} onChange={inputChange}/>
            <input type="button" value="Get a new meme image  🖼" onClick={getImage}/>
        </form>
        <div className='img-content'>
            <img src={img.initialImg} alt='' className='meme-img' />
            <div className='text'>
            <h2 className='top'>{img.topText}</h2>
            <h2 className='bottom'>{img.bottomText}</h2>
            </div>
        </div>

    </div>
  )
}

export default Section