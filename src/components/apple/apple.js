import React, {useState, useEffect} from 'react';
import axios from 'axios';
import classes from '../../App.css';


function Apple() {
  const [News, setData] = useState([]);
  useEffect(()=>{
    const loadNews= async()=>{
      const resp = await axios.get
      ("https://newsapi.org/v2/everything?q=apple&from=2021-11-13&to=2021-11-13&sortBy=popularity&apiKey=18dde8a47aa34ac8b657a9c7a1a76592");
      setData(resp.data.articles);
    };
    loadNews( );
  },[]);
  console.log(News, "RESPONSE")

  return (
    <div className={classes.App} > 
    <h1 className={classes.greeting}>All Headlines related to Apple</h1>
     {News && News.map((item) => {
       return (
        <div className={classes.body}>
          
          <div className={classes.wrapper} >
           <img alt='news' src={item.urlToImage}/>
           <h3 className={classes.title}>{item.title}</h3>
           <p className={classes.description}>{item.description}</p>
           <a href={item.url} className={classes.Button_card}>Read More</a>
          </div> 
         </div>
         );
     }) }
    </div>
  )
}

export default Apple
