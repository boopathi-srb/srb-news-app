import React, {useState, useEffect} from 'react'
import axios from 'axios';
import classes from '../../App.css';

function render1(){
  return []
}
function India() {
  const [News, setData] = useState(()=> render1());
  useEffect(()=>{
    const loadNews= async()=>{
      const resp = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=18dde8a47aa34ac8b657a9c7a1a76592")
      setData(resp.data.articles);
    };
    loadNews();
  },[]);
  console.log(News, "NEWS")

  return (
    <div>
      <h1 className={classes.greeting}>All Headlines related to India</h1>
      
     {News && News.map((item)=>{
       return (
        <div className={classes.body}>
          <div className={classes.wrapper} >
           <img alt='news' src={item.urlToImage}/>
           <h3 className={classes.title}>{item.title}</h3>
           <p className={classes.description}>{item.description}</p>
           <a href={item.url}><button className={classes.Button_card} type='primary'>Read More</button></a>
          </div> 
         </div>)
     }) }
    </div>
  )
}

export default India