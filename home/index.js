
import './index.css'
import {MathJaxContext,MathJax} from 'better-react-mathjax'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from 'react';
import {BrowserRouter,Route,Routes,Switch,Link} from 'react-router-dom'
import React, { Component } from 'react';


class Task extends Component {
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
        const config = {
            "fast-preview": {
              disabled: true
            },
            tex2jax: {
              inlineMath: [
                ["$", "$"],
                ["\\(", "\\)"]
              ],
              displayMath: [
                ["$$", "$$"],
                ["\\[", "\\]"]
              ]
            },
            messageStyle: "none"
          };


        return ( 
        <div className='home' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}} >
           
                        <>
                        
                            <MathJaxContext version={2} config={config} onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)} className='problem' style={dark?{backgroundColor:coloring.darkbg,zIndex:'-1', color:coloring.lightcl}:{backgroundColor:coloring.lightbg , zIndex:'-1', color:coloring.darkcl}} >
                                <MathJax hideUntilTypeset={"first"}  dynamic className='question'>{question}</MathJax> 
                                <ul className='options' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}}>
                                {option.map(choice=>{
                                      return(
                                        // <p key={choice.id} ><button onClick={()=>{handleToggle(choice,option)}} style={choice.active?{backgroundColor:'green'}:{backgroundColor:'white'}}></button>{choice.text }</p>
                                        <MathJax key={choice.id} hideUntilTypeset={"first"}  dynamic className='p'><button onClick={()=>{handleToggle(choice,option)}} style={choice.active?{backgroundColor:'green'}:{backgroundColor:'white'}}></button> {choice.text }</MathJax>   
                                      )
                                  }) 
                                }
                                </ul>
                            </MathJaxContext>
                         
                         
                        </>
           <div className='d_bar' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}}><KeyboardDoubleArrowLeftIcon className='arrowforward' onClick={()=>{handlePreve()}} style={{fontSize:'50px',fontWeight:'bolder',width:'70px'}}/><KeyboardDoubleArrowRightIcon onClick={()=>{handleNext()}} className='arrowforward' style={{fontSize:'50px',fontWeight:'bolder',width:'70px',marginLeft:'10px'}}/> <button  className='submit'>SUBMIT</button></div>
        </div> 

         );
    }
}
 
export default Task;

   
   
    
