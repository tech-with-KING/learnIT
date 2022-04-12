
import './homeiw.css'
import React, { Component } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import {Link} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'



class Homeview  extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        Active:true
     }

    
    render() { 
        const {Active}=this.state
        const {question,option}=this.props
        const {dark,handleToggle,handleNext,handlePreve} =this.props
        const coloring={
            darkbg:'black',
            lightbg:'white',
            darkcl:'black',
            lightcl:'white',
            darkbd:'',
            lightbd:''
        }
        const {review,score,total,reviewed} =this.props
        const percent=()=>{
            return(Math.ceil((score/total)*100))
        }

    

        return ( 
        <div className='home_fo' style={dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg }} >
          <div className='center_er'>
              <h2 className='h_one'>Thanks for taking the weekly test &#128640;</h2>
            <div className='tick'><CheckOutlinedIcon style={{fontSize:'100px',color:'rgb(34, 185, 102)',fontWeight:'lighter'}} /></div>
            <p>your score: {score()+'/'+total+percent()}</p>
            <div className='line_'><div className='s_line_'> </div></div>
            <Link to={"/solutions"} className='review_' onClick={()=>{if(!reviewed){review()}else{}}}>Review Now</Link>
         </div>
        </div> 
         );
    }
}
 
export default Homeview ;

   
   
    
