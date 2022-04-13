import './style.css'
import {MathJaxContext,MathJax} from 'better-react-mathjax'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React, { Component } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import CloseIcon from '@mui/icons-material/Close'

class Submit  extends Component {
    constructor(props) {
        super(props);
    }    
    render() { 
        const {dark} =this.props
        const coloring={
            darkbg:'black',
            lightbg:'white',
            darkcl:'black',
            lightcl:'white',
            darkbd:'',
            lightbd:''
        }
        const {review,score,total,submit} =this.props
        const percent=()=>{
            return(Math.ceil((score()/total)*100))
        }

  
        return ( 
        <div className='home_f' style={dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg }} >
          <div className='center'>
              <h1 className='h_one_'>Great Job &#128640;</h1>
            <div className='tick'><CheckOutlinedIcon style={{fontSize:'100px',color:'rgb(34, 185, 102)',fontWeight:'lighter'}} /></div>
            <p>{percent()+'%'}</p>
            <div className='line_'><div className='s_line_' style={{width:`${percent()}%`}}> </div></div>
            <p>Your Score:{score()+"/"+total}</p>
            <button onClick={()=>{review();}} className='review'>Review Now</button>
         </div>
        </div> 
         );
    }
    
}

export default Submit;
