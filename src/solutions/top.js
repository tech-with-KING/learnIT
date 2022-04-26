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
import {Link} from 'react-router-dom'
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

const TopBar=(props)=>{
    const [toggle,settoggle]=useState(false)   
    
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
            
            <div onClick={()=>{toggle ?settoggle(false) :settoggle(true)}} className='ico' style={toggle ?{zIndex:'2',backgroundColor:'transparent'}:{zIndex:'2',backgroundColor:'transparent'}}>{toggle?<ClearTwoToneIcon  style={{fontSize:'30px',color:'white',backgroundColor:'transparent',fontWeight:'bold',zIndex:'1'}}/>:<MenuIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} />}
            
            </div>
            <div onClick={()=>{props.darkmode()}} className='light' style={props.dark?{backgroundColor:'transparent', color:coloring.lightcl,zIndex:'2'} : {backgroundColor:'transparent', color:coloring.darkcl}}>{props.dark?<LightModeIcon style={{fontSize:'30px',color:'white',backgroundColor:'black',fontWeight:'bold',zIndex:'1'}}/>:<DarkModeIcon style={{fontSize:'30px',fontWeight:'bold',transition:"0.5s ease-in"}} />}</div>
            <div className='menuebar' style={ toggle?{width:'60%'}:{width:'0',paddingLeft:'0'}}  >  
                  <Link className='li' to={'/'}> <HomeIcon style={{marginRight:'5px'}}/>Home</Link>   
                    <a className='li' href='https://drive.google.com/drive/folders/1q9ahRAe-SFAogpu43f0JeCTfNumFIcnN?usp=sharing' ><MenuBookTwoToneIcon style={{marginRight:'5px'}}/> Materials</a>
                    <Link className='li' to={'/solutions'}> <CreditScoreIcon style={{marginRight:'5px'}}/> My Scores</Link>
                    <a className='li' href='' ><LibraryBooksIcon style={{marginRight:'5px'}}/>Course Outline</a>
                    <Link to={""} className='li' ><InfoTwoToneIcon style={{marginRight:'5px'}} />About</Link>  
            </div>

            <div className='lower_bar' style={props.dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl} : {backgroundColor:coloring.lightbg , color:coloring.darkcl}}>
             <h1 >LEARNIT</h1>
            </div>
        </div>
       
      
     
        

    </>     
    )
}
export default TopBar;