import React,{useState} from 'react'
import axios from 'axios'
const Fetchnews = () => {
    const [news,setNews]=useState([])
    const fetchNews=()=>{
        // console.log("clicked");
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=2370b45295f440c59b98c8f36d21079e")
        .then((response)=>{
            // console.log(response);
            setNews(response.data.articles)
        })
    }
    return (
        <>
            <div className="flex flex-col items-center ">
                <button className='bg-blue-300 text-black text-xl p-3 rounded-md w-32 hover:scale-75' onClick={fetchNews}>Fetch news </button>
            </div>
            <div className="flex flex-col">
                {news.map((value)=>{
                    return(
                        <div className="flex pt-5 space-y-8 space-x-8 pl-5">
                        
                            <img src={value.urlToImage} className="w-1/4" alt=''/>
                        
                           <div className="flex flex-col ">
                           <div className="text-3xl">
                                {value.title}
                            </div> 
                            <div className="text-xl text-gray-500">
                                {value.description}
                            </div>
                           </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Fetchnews