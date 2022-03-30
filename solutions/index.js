
import './style.css'
import {MathJaxContext,MathJax} from 'better-react-mathjax'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import React, { Component } from 'react';


class Solutions  extends Component {
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
          const dope=this.props.dope  
          
          const nope=dope()
          console.log(nope)



        return ( 
        <div className='home_' style={dark?{backgroundColor:'red', color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}} >
          <>
              {nope.map(poise=>{
                  return(
                        <MathJaxContext version={2} config={config} onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)} className='solution' style={dark?{backgroundColor:coloring.darkbg,zIndex:'-1', color:coloring.lightcl}:{backgroundColor:coloring.lightbg , zIndex:'-1', color:coloring.darkcl}} >
                          
                            <MathJax hideUntilTypeset={"first"}  dynamic className='question_asked'>{poise.question}</MathJax> 
                            <ul className='answer' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}}>
                              <MathJax  key={poise.index} hideUntilTypeset={"first"}  dynamic className='p'>your choice: {poise.correctc}</MathJax>
                              <MathJax key={poise.index} hideUntilTypeset={"first"}  dynamic className='p'>Answer: {poise.correctc}</MathJax>   
            
                            </ul>
                          </MathJaxContext> 
                                
                        )
                   })
              }
          </>
        </div> 

         );
    }
}
 
export default Solutions ;

   
   
    
