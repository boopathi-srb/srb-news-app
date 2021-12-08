import {  BrowserRouter as Router } from 'react-router-dom';

import classes from '../news.module.css'
import wsjimage from './wsj.png'

const wsjCard = ()=>{
  return(
    
    <Router className={classes.App}>
     <main className={classes.card}>
       <img src={wsjimage} alt='wsj-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>Latest from WSJ</h1>
         <a href='./wsj'><button className={classes.Button} >See more!</button></a>
        </div>
     </main>
    </Router>
    
  )
}
export default wsjCard