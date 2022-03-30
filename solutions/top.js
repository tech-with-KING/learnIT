import React from 'react';
import './top.css'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

import LoginIcon from '@mui/icons-material/Login';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Switch,Link} from 'react-router-dom'
import LightModeIcon from '@mui/icons-material/LightMode';

const TopBar=(props)=>{
    const [toggle,settoggle]=useState(false)   
    const {dark} =props
    
    const coloring={
      darkbg:'black',
      lightbg:'white',
      darkcl:'black',
      lightcl:'white',
      darkbd:'',
      lightbd:''
  }
  

    return(
    <>
        
        <div className='top_bar' style={props.dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl,zIndex:'2'} : {backgroundColor:coloring.lightbg , color:coloring.darkcl,zIndex:'2'}} >
            
            <div onClick={()=>{toggle ?settoggle(false) :settoggle(true)}} className='ico' style={toggle ?{zIndex:'2',backgroundColor:'transparent'}:{zIndex:'2',backgroundColor:'transparent'}}>{toggle?<CancelIcon style={{fontSize:'40px',color:'white',backgroundColor:'transparent',fontWeight:'bold',zIndex:'1'}}/>:<MenuIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} />}
            
            </div>
            <div onClick={()=>{props.darkmode()}} className='light' style={props.dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl,zIndex:'2'} : {backgroundColor:coloring.lightbg , color:coloring.darkcl}}>{props.dark?<LightModeIcon style={{fontSize:'30px',color:'white',backgroundColor:'black',fontWeight:'bold',zIndex:'1'}}/>:<DarkModeIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} />}</div>
            <div className='menuebar' style={ toggle?{width:'60%'}:{width:'0',paddingLeft:'0'}}  >    
                    <Link className='li' to={'/solutions'}> <CreditScoreIcon/>My Scores</Link>
                    <Link className='li' to={'/solutions'}><LeaderboardIcon/> Leaderboards</Link>
                    <Link className='li' to={'./solutions'}><LibraryBooksIcon/>Materials</Link>
                    <Link className='li' to={'/solutions'}><LoginIcon />Sing up/login</Link>
            </div>

            <div className='lower_bar' style={props.dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl} : {backgroundColor:coloring.lightbg , color:coloring.darkcl}}>
             <h1 >LEARNIT</h1>
          
             <div className='reviews'><h2>Reviews</h2></div>
            </div>
        </div>
       
      
     
        

    </>     
    )
}
export default TopBar;