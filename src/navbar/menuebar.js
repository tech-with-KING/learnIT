import React from 'react';
import './menubar.css'
import { useState } from 'react';
import CountDown from './timer';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LoginIcon from '@mui/icons-material/Login';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Link} from 'react-router-dom'
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
const Bot=(props)=>{
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
                <div style={props.dark ?{backgroundColor:'black', color:'white'}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}}><h1>LEARNIT</h1><div style={props.dark?{backgroundColor:coloring.lightbg}:{backgroundColor:coloring.darkbg}} className='circle' ><div style={props.dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}} className='s_circle'>{props.index+'/'+props.total}</div></div></div>
                <div className='counter' style={props.dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}}>
                    <div className='timer'><AccessTimeIcon style={props.dark?{fontSize:'30px',color:coloring.lightbg,fontWeight:'bold'}:{fontSize:'30px',color:coloring.darkbg,fontWeight:'bold'}}/><div style={{marginTop:'15px',marginLeft:'0px'}}><CountDown minutes={30} submite={props.submit} review={props.review}/> </div></div>
                    <div className='line'><div className='s_line' ></div></div>
                </div>
                </div>
        </div>
       
      
     
        

    </>     
    )
}
export default Bot;
