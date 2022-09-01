
import './index.css'
import {MathJaxContext,MathJax} from 'better-react-mathjax'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {Link} from 'react-router-dom'
import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        Active:true
     }

    
    render() { 
      // props
        const {question,submit,dark,handleToggle,handleNext,handlePreve}=this.props
       
        
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
        <div className='home' style={dark?{backgroundColor:'transparent', color:coloring.lightcl}:{backgroundColor:'transparent' , color:coloring.darkcl}} >
                        <>    
                        
                          {
                            
                            question.map(pol=>{
                              const option=pol.Options
                               return(
                            <div className='olk'>   
                               <MathJaxContext  version={2} config={config} onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 1)}  key={question.indexOf(pol)} >
                                <MathJax hideUntilTypeset={"first"} key={pol.index} dynamic className='question'><div>{pol.index}</div>{pol.question}</MathJax> 
                                    <ul className='options' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}}>
                                {option.map(choice=>{
                                      
                                      return(
                                              <MathJax key={pol.index+'ol'+choice.id} hideUntilTypeset={"first"}  dynamic className='p'>
                                                <button onClick={()=>{handleToggle(question.indexOf(pol),choice,choice.id)}} style={choice.active?{backgroundColor:'green'}:{backgroundColor:'white'}}>
                                                </button> {choice.text }
                                              </MathJax>   
                                      )
                                  }) 
                                }
                                </ul>
                            </MathJaxContext>
                            </div>
                               )

                            })
                          }
                        </>
          <div className='d_bar' style={dark?{backgroundColor:'transparent', color:coloring.lightcl}:{backgroundColor:'transparent' , color:coloring.darkcl}}>
            <KeyboardDoubleArrowLeftIcon className='arrowforward' onClick={()=>{handlePreve()}} style={{fontSize:'50px',fontWeight:'bolder',height:'35px',width:'70px'}}/>
           <KeyboardDoubleArrowRightIcon onClick={()=>{handleNext()}} className='arrowforward' style={{fontSize:'50px',fontWeight:'bolder',height:'35px',width:'70px',marginLeft:'10px'}}/>
          <Link to={"/solutions"} className='submit' >submit</Link>
          </div>
        </div> 

         );
    }
}
 
export default Task;

   
   
    
