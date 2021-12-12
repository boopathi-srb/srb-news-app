import React, {useState, useEffect} from 'react'
import axios from 'axios';
import classes from '../news.module.css';
import {BrowserRouter as Router } from 'react-router-dom';

function render1(){
  return []
}
function Tesla() {
  const [News, setData] = useState(()=> render1());
  useEffect(()=>{
    const loadNews= async()=>{
      const resp = await axios.get
      ("https://newsapi.org/v2/everything?q=tesla&from=2021-11-12&sortBy=publishedAt&apiKey=18dde8a47aa34ac8b657a9c7a1a76592")
      setData(resp.data.articles);
    };
    loadNews();
  },[]);
  console.log(News, "NEWS")

  return (
    <Router>
     <h1 className={classes.greeting}>All Headlines related to Tesla</h1>
     {News && News.map((item)=>{
       return (
        <div className={classes.body}>
        <div className={classes.wrapper} >
         <img alt='news' src={item.urlToImage}/>
         <h3 className={classes.title}>{item.title}</h3>
         <p className={classes.description}>{item.description}</p>
         <a href={item.url} className={classes.Button_card} >Read More</a>
        </div> 
       </div>)
     }) }
    </Router>
  )
}

export default Tesla