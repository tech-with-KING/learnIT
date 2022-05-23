
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
            darkbg:'rgb(1,12,50)',
            lightbg:'white',
            darkcl:'#000020',
            lightcl:'white',
            dbdleft:'3px solid rgb(1, 12, 50)',
            dbdright:'3px solid white'
        }
        const {review,score,total,reviewed} =this.props
        const percent=()=>{
            return(Math.ceil((score/total)*100))
        }

    

        return ( 
            <div className='home_fo' style={dark?{borderLeft:coloring.dbdright,borderRight:coloring.dbdright}:{backgroundColor:coloring.lightbg,borderLeft:coloring.dbdleft,borderRight:coloring.dbdleft }}>
                <div className='center' style={!dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg }}>
                     <h2 className='h_two'>Weldone on completing this weeks tests &#128640;</h2>
                    <div className='tick'><CheckOutlinedIcon style={{fontSize:'100px',color:'rgb(34, 185, 102)',fontWeight:'lighter'}} /></div>
                   
                    <p style={{backgroundColor:"transparent"}}>Your Score: {score()+'/'+total}</p>
                    <Link to={"/solutions"} className='review_' style={dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg ,color:'rgb(1,12,50)'}} onClick={()=>{if(!reviewed){review()}else{}}}>Review Now</Link>
             </div>
            </div> 
         );
    }
}
 
export default Homeview ;

   
   
    
