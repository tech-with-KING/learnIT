
// import './entry.css'

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';


// class Home_Bar  extends Component {
    
//     render() { 
//         const {dark} =this.props
//         const coloring={
//             darkbg:'rgb(1,12,50)',
//             lightbg:'white',
//             darkcl:'black',
//             lightcl:'white',
//             dbdleft:'3px solid rgb(1, 12, 50)',
//             dbdright:'3px solid white'
//         }
//         const clean_up=()=>{
//             window.localStorage.clear()
//         }

//         return ( 
//         <div className='home_foo' style={dark?{borderLeft:coloring.dbdright,borderRight:coloring.dbdright}:{backgroundColor:coloring.lightbg }} >
//           <div className='center_tab' style={!dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg }}>
//               <h1 className='h_one_' >Hi there &#128640;</h1>
//               <h3>Take Preparotory Tests in :</h3>
//             <ul className='tick_'  >
//                 <li>Biology </li>
//                 <li>Chemistry</li>
//                 <li>Computer</li>
//                 <li>Maths </li>
//                 <li>Physics</li>

//             </ul>
//             <Link to={"/question"} onClick={()=>{clean_up()}} className='review' style={dark?{backgroundColor:coloring.darkbg}:{backgroundColor:coloring.lightbg ,color:'rgb(1,12,50)'}}>Start Test</Link>
//          </div>
//         </div> 
//          );
//     }
    
// }

// export default Home_Bar;

import React from 'react';
import './EntryPage.css';

const Home_Bar = () => {
  return (
    <div className="entry-page">
      <h1 className="entry-title">Learnit</h1>
      <p className="entry-description">Learn at your convenience</p>
    </div>
  );
};

export default Home_Bar;
