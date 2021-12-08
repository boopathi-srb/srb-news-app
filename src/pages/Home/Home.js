import React from 'react';
import classes from './Home.module.css';
import AppleCard from '../../components/apple/apple-card';
import TeslaCard from '../../components/tesla/tesla-card';
import TechcrunchCard from '../../components/techcrunch/techcrunch-card';
import UsaCard from '../../components/usa/usa-card';
import WsjCard from '../../components/wsj/wsj-card';
import IndiaCard from '../../components/india/india-card';
// import Apple from '../../components/apple/Apple';
// import India from '../../components/india/India';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Home(){
  return(
    <div className={classes.body}>
      <div className={classes.greeting}>
         {/* <h1>Welcome to SRB's news page</h1>
         <h3>Done using NewsAPI</h3> */}
      </div>
       <div className={classes.App}>
           <div>
             <AppleCard/>
            </div>
           <div>
             <IndiaCard/>
           </div>
           <div>
             <TeslaCard/>
           </div>
           <div>
             <TechcrunchCard/>
           </div>
           <div>
             <UsaCard/>
           </div>
           <div>
             <WsjCard/>
           </div>
        </div>
    </div>
  )
};

  


export default Home;