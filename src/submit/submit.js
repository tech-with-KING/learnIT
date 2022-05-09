import './style.css'
import {MathJaxContext,MathJax} from 'better-react-mathjax'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React, { Component } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import CloseIcon from '@mui/icons-material/Close'

class Submit  extends Component {
       
    render() { 
        const {dark} =this.props
        const coloring={
            darkbg:'rgb(1,12,50)',
            lightbg:'white',
            darkcl:'black',
            lightcl:'white',
            dbdleft:'3px solid rgb(1,12,50)',
            dbdright:'3px solid white'
        }
        const {review,score,total,submit} =this.props
        const percent=()=>{
            return(Math.ceil((score()/total)*100))
        }

    //     <div className='home_foo' style={dark?{borderLeft:coloring.dbdright,borderRight:coloring.dbdright}:{backgroundColor:coloring.lightbg }} >
    //     <div className='center_tab' style={!dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg }}>
    //         <h1 className='h_one_'>Hi there &#128640;</h1>
    //       <div className='tick'><CheckOutlinedIcon style={{fontSize:'100px',color:'rgb(34, 185, 102)',fontWeight:'lighter'}} /></div>
    //       <button onClick={()=>{clean_up()}} className='review' style={dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg ,color:'rgb(1,12,50)'}}>Start Test</button>
    //    </div>
    //   </div> 
        return ( 
        <div className='home_f' style={dark?{borderLeft:coloring.dbdright,borderRight:coloring.dbdright}:{backgroundColor:coloring.lightbg }}>
          <div className='center' style={!dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg }}>
              <h1 className='h_one_'>Great Job &#128640;</h1>
            <div className='tick'><CheckOutlinedIcon style={{fontSize:'100px',color:'rgb(34, 185, 102)',fontWeight:'lighter'}} /></div>
            <p style={{backgroundColor:"transparent"}}>{percent()+'%'}</p>
            <div className='line_'><div className='s_line_' style={{width:`${percent()}%`}}> </div></div>
            <p style={{backgroundColor:"transparent"}}>Your Score:{score()+"/"+total}</p>
            <button onClick={()=>{review(); submit();}} className='review' tyle={dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg ,color:'rgb(1,12,50)'}}>Review Now</button>
         </div>
        </div> 
         );
    }
    
}

export default Submit;
