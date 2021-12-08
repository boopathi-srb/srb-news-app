import {BrowserRouter as Router } from 'react-router-dom';

import classes from '../../App.css'
import techcrunchimage from './Techcrunch.png'

const techcrunchCard = ()=>{
  return(
    
    <Router className={classes.App}>
     <div className={classes.card}>
       <img src={techcrunchimage} alt='techcrunch-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>Techcrunch news</h1>
         <a href='./Techcrunch'><button className={classes.Button} >See more!</button></a>
        </div>
     </div>
    </Router>
    
  )
}
export default techcrunchCard