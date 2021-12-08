import {  BrowserRouter as Router } from 'react-router-dom';
import classes from '../../App.css'
import Appleimage from './Apple.png'

const appleCard = ()=>{
  return(
    
    <Router className={classes.App}>
     <div className={classes.card}>
       <img src={Appleimage} alt='apple-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>Apple - Latest news</h1>
         <a href='./Apple'><button className={classes.Button} >See more!</button></a>
        </div>
     </div>
    </Router>
    
  )
}
export default appleCard