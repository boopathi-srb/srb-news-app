import {  BrowserRouter as Router } from 'react-router-dom';
import classes from '../news.module.css'
import indiaimage from './india.png'
import React from 'react';


const indiaCard=()=> {
  return(
    
    <Router className={classes.App}>
     <div className={classes.card}>
       <img src={indiaimage} alt='indiua-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>India - Latest news</h1>
         <a href='./india'><button className={classes.Button} >See more!</button></a>
        </div>
     </div>
    </Router>
    
  )
}

export default indiaCard