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
            <div className="flex">
                <button className='bg-blue-300 text-black text-xl p-3 rounded-md' onClick={fetchNews}>Fetch news </button>
            </div>
            <div className="flex">
                {news.map((value)=>{
                    return(
                        <div className="flex">
                        {/* <div className="border-spacing-1"> */}
                            <img src={value.urlToImage} alt=''/>
                        {/* </div> */}
                           <div className="text-3xl">
                                {value.title}
                            </div> 
                            <div className="text-xl">
                                {value.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Fetchnews