import './entry.css'

import React, { Component } from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'


class Home_Bar  extends Component {
       
    render() { 
        const {dark} =this.props
        const coloring={
            darkbg:'rgb(1,12,50)',
            lightbg:'white',
            darkcl:'black',
            lightcl:'white',
            dbdleft:'3px solid rgb(1, 12, 50)',
            dbdright:'3px solid white'
        }
        const {review,score,total} =this.props
        const percent=()=>{
            return(Math.ceil((score()/total)*100))
        }

  
        return ( 
        <div className='home_foo' style={dark?{borderLeft:coloring.dbdright,borderRight:coloring.dbdright}:{backgroundColor:coloring.lightbg }} >
          <div className='center_tab' style={!dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg }}>
              <h1 className='h_one_'>Hi there &#128640;</h1>
            <div className='tick'><CheckOutlinedIcon style={{fontSize:'100px',color:'rgb(34, 185, 102)',fontWeight:'lighter'}} /></div>
            <button onClick={()=>{review();}} className='review'>Start Test</button>
         </div>
        </div> 
         );
    }
    
}

export default Home_Bar;
