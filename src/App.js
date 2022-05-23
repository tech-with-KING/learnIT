import './App.css';
import Task from './home/index';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Data from './Data';
import React , { Component } from 'react';
import Solutions from './solutions/index';
import TopBar from './solutions/top';
import Submit from './submit/submit';
import Homeview from './Homeview/homeview';
import Home_Bar from './entry_page/entry';
import Bot from './navbar/menuebar';

//states


let index=0
let me =[]
const love =Data
function so() {
    
    for (let i = 0; i < love.length;i+=3) {
        const element = love.slice(i,i+3)
        me.push(element)
    }
    return(me)
}

const lo=[...so()]
let li=[...lo]



class App extends Component {
    state = {
        index:index,
        review:false,
        submited:true,
        help:lo[index], 
        dark:false,
    };

    handleToggle=(no,choice,acti)=>
    {
        const {help}=this.state
        const all_questions=[...help]
        if(all_questions[no].Options[acti].active){
            all_questions[no].Options[acti].active=false;
            this.setState({help:all_questions})
        }
        else{
            all_questions[no].Options[acti].active=true;
            this.setState({help:all_questions})
        }
    }

    render() { 
        const {option,dark,review,submited}=this.state
        
        const incrementpage=()=>{next()}
        const decrementpage=()=>{preve()}
        
        const  getscore =()=>{
            // let br =[]
            // const {help}=this.state
            // let elem=[]
            // for (let index = 0; index < li.length; index++) {

            //     try {
            //         elem = [...elem,...JSON.parse(window.localStorage.getItem(index))];   
            //     } catch (error) {
            //         elem = [...elem,...li[index]];
            //     }
                 
                
            // }
    
            // for (let index = 0; index < elem.length; index++) 
            // {
                
            // if(elem){
            //     const nwbon= elem.filter((elo)=>{
            //         if (elo.active&&elo.correct) {
            //             br.push(elem)
            //         }else{
            //             return null
            //         }
            // })
            // }else{
            //     br=[]
            // }

            // }
            // return(br.length)
        }


        const  getquestion =()=>{
            let nebo=li
            let elem=[]
            let arr=[]
            for (let i = 0; i < li.length; i++) {
                let arr=[JSON.parse(window.localStorage.getItem(i))]
                let po=[...arr]
                if (JSON.parse(window.localStorage.getItem(i))) {
                    elem=[...elem,...JSON.parse(window.localStorage.getItem(i))]
                } else {
                    elem=[...elem,...nebo[i]]  
                } 
            }

            
            for (let a = 0; a < elem.length; a++) {
                const nw= elem[a].Options.filter((ele)=>{
                    if (ele.correct) { return(elem)}
                });
    
                let acti=false
                const nwb= elem[a].Options.filter((elo)=>{
                    if (elo.active) {
                        acti=true;
                        return(elem)
                    }else{
                        acti=false;
                    }
    
                })
            
                const at=()=>{
                    if (nwb[0]) {
                        return(nwb[0].text);
                    } else {
                        return(' ');
                    }
                }
        
            
                const questio=elem[a].question
                const ind=elem[a].index
                const top=elem[a].topic
                const data= 
                {
                    question:questio,
                    topic:top,
                    Options:elem,
                    index:ind,
                    correctc:nw[0].text,
                    chosen:at(),
                }
                arr.push(data) 
            }
        
          
            
            return(arr);
    
        }
       
        const submitmode=()=>{
            const {help}=this.state
            localStorage.setItem(index,JSON.stringify(help))
            if(submited){
                this.setState({submited:false})
            }
            else{
                this.setState({submited:true})
            }
    
        }

        const  next=()=>
        {
            const {help}=this.state
            const stored=window.localStorage.setItem(index,JSON.stringify(help)) 
            if (index<lo.length-1) {
                index+=1
            } else {
                index=index
            }
            if(index < li.length)
                {
                    if (JSON.parse(localStorage.getItem(index)) ){
                        
                        this.setState({help:JSON.parse(localStorage.getItem(index))}) 
                    }
                    else{
                        this.setState({help:lo[index]})
                    }
                }
            else{ return null }      
        }

        const width=()=>{
            const wit=(index/lo.length)*100
            return(wit)
        }

        const darkmode=()=>{
                if(dark){
                this.setState({dark:false}) 
                }else{
                this.setState({dark:true})
                }
            
        }
            //review
        const reviewmode=()=>{
                if(review){
                this.setState({review:false}) 
                }else{
                this.setState({review:true})
                }
            
        }
        
        const  preve=()=>
        {
            const {help}=this.state
            index=index-1 
            if(index>=0)
            {
            this.setState({index:index})
            if (JSON.parse(localStorage.getItem(index)) ){
                    
                this.setState({help:JSON.parse(localStorage.getItem(index))}) 
            }
            else{
                this.setState({help:li[index]})
                
            }
            console.log('d'+option)
            }
            else { index=0 }
        }
    
        const coloring=
        {
                darkbg:'black',
                lightbg:'white',
                darkcl:'black',
                lightcl:'white',
            
        }
            
      
        return ( 
            <BrowserRouter>
                 
            <div className='App' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}}>
                
                <Routes >
                    <Route exact  path='/question' element={submited?
                    <>
                    <Bot 
                    darkmode={darkmode}
                    dark={dark}
                    submit={submitmode}
                    index={Data[index].index}
                    total={Data.length}
                    done={width}
                    />
                    <Task
                    question={this.state.help}
                    topic={Data[index].topic}
                    index={Data[index].index}
                    opt={getquestion}
                    option={option}
                    handleNext={incrementpage}
                    handlePreve={decrementpage}
                    handleToggle={this.handleToggle}
                    dark={dark}
                    submit={submitmode}
                    />
                    </>:<>
                    <TopBar 
                       dark={dark}
                       darkmode={darkmode} 
                    />
                    <Homeview
                    question={Data[index].question}
                    key={index}
                    option={option}   
                    handleNext={incrementpage}
                    handlePreve={decrementpage}
                    handleToggle={this.handleToggle}
                    dark={dark}
                    reviewed={this.state.review}
                    score={getscore}
                    review={reviewmode}
                    total={Data.length}

                    /> </>

                    } />
                    <Route path='/solutions' element={!review?<>
                        <TopBar 
                           dark={dark}
                           darkmode={darkmode} 
                        />
                        <Submit
                        question={Data[index].question}
                        key={index}
                        option={option}   
                        handleNext={incrementpage}
                        handlePreve={decrementpage}
                        handleToggle={this.handleToggle}
                        dark={dark}
                        score={getscore}
                        review={reviewmode}
                        total={Data.length}
                        submit={submitmode}

                        /> </>:
                        <>
                        <TopBar 
                           dark={dark}
                           darkmode={darkmode} 
                        />
                        <Solutions
                        question={Data[index].question}
                        key={index}
                        option={option}   
                        handleNext={incrementpage}
                        handlePreve={decrementpage}
                        handleToggle={this.handleToggle}
                        dark={dark}
                        dope={getquestion}
                        topic={Data[index].topic}
                        index={index}
                    
                        
                        /> </> 
                         } />

            {/* home_route */}
                    <Route path='/' element={<>
                        <TopBar 
                           dark={dark}
                           darkmode={darkmode} 
                        />
                        <Home_Bar
                        question={Data[index].question}
                        key={index}
                        option={option}   
                        handleNext={incrementpage}
                        handlePreve={decrementpage}
                        handleToggle={this.handleToggle}
                        dark={dark}
                        score={getscore}
                        review={reviewmode}
                        total={Data.length}
                        submit={submitmode}

                        /> </>}
                        />
                </Routes> 
             </div>
            </BrowserRouter>       
         );
        }
        
};
 
export default App;




