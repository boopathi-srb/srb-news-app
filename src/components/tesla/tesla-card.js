import {BrowserRouter as Router} from 'react-router-dom';
import classes from '../news.module.css'
import teslaimage from './tesla.png'


const teslaCard = ()=>{
  return(
    
    <Router className={classes.App}>
     <div className={classes.card}>
       <img src={teslaimage} alt='tesla-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>Tesla - Latest news</h1>
         <a href='./tesla'><button className={classes.Button} >See more!</button></a>
        </div>
     </div>
    </Router>
    
  )
}
export default teslaCard