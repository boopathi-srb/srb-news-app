import { BrowserRouter as Router } from 'react-router-dom';
import classes from '../news.module.css'
import usaimage from './usa.jpg'

const usaCard = ()=>{
  return(
    
    <Router className={classes.App}>
     <div className={classes.card}>
       <img src={usaimage} alt='usa-news'/>
       <div className={classes.cardcontent}>
         <h1 className={classes.card_title}>USA Headlines</h1>
         <a href='./usa'><button className={classes.Button} >See more!</button></a>
        </div>
     </div>
    </Router>
    
  )
}
export default usaCard