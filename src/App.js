import './App.css';
import Task from './home/index';
import NavBar from './navbar/nav';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Data from './Data';
import React , { Component } from 'react';
import Solutions from './solutions/index';
import TopBar from './solutions/top';
import Submit from './submit/submit';
import Homeview from './Homeview/homeview';

//states


var index=1
class App extends Component {
    //state
    state = {
        index:index,
        review:false,
        submited:true,
        option:Data[index].Options, 
        dark:false,
    }
    correct=[this.state.correct] 
 handleToggle=(choice,options)=>{
      let opt=[...options]
      const index=opt.indexOf(choice)
      opt[index]={...choice}
      if(opt[index].active){
      opt[index].active=false;
      
      this.setState({onptio:opt});
      }
      else{
        opt[index].active=true;
        

      }
      this.setState({option:[...opt]})
     
    }
    render() { 
        const {option,dark,review,submited}=this.state
        
        const incrementpage=()=>{next()}
        const decrementpage=()=>{preve()}
        
        const  getscore =()=>{
            let br =[]
        
            for (let index = 0; index < Data.length; index++) 
            {
                const element = JSON.parse(localStorage.getItem(index))
            if(element){
                const nwbon= element.filter((elo)=>{
                    if (elo.active&&elo.correct) {
                        br.push(element)
                    }else{
                        return null
                    }
            })
            }else{
                br=[]
            }
            }
            return(br.length)
        }
        const  getquestion =()=>{
            let arr=[]

            for (let index = 0; index < Data.length; index++) 
            {
                const element = JSON.parse(window.localStorage.getItem(index))
                if(element){
                const nw= element.filter((ele)=>{
                    if (ele.correct) { return(element)}
                });

                let acti=false
                const nwb= element.filter((elo)=>{
                    if (elo.active) {
                        acti=true;
                        return(element)
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
        
            
                const questio=Data[index].question
                const ind=Data[index].index
                const top=Data[index].topic
                const data= 
                {
                    question:questio,
                    topic:top,
                    Options:element,
                    index:ind,
                    correctc:nw[0].text,
                    chosen:at(),
                }
                
                arr.push(data)}
                else{
                    const questio=Data[index].question
                    const ind=Data[index].index
                    const top=Data[index].topic
                    const data= 
                    {
                    question:questio,
                    topic:top,
                    index:ind,
                    correctc:null,
                    chosen:null,
                    }
                    arr.push(data)
                }
                }
            return(arr)
        }
    
        const submitmode=()=>{
            window.localStocrage.setItem(index,JSON.stringify(option))
        if(submited){
            this.setState({submited:false})

        }
        else{
            this.setState({submited:true})

        }
    
        }

        const  next=()=>
        {
            const {data,option}=this.state
            const stored=window.localStorage.setItem(index,JSON.stringify(option))

            
            if (index<Data.length-1) {
                index+=1
            } else {
                index=index
            }
            
            if(index < Data.length)
                {
                    if (JSON.parse(localStorage.getItem(index)) ){
                        
                        this.setState({option:JSON.parse(localStorage.getItem(index))}) 
                    }
                    else{
                        this.setState({option:Data[index].Options})
                        
                    }

                
                        
                }
            else{
                return null
                }
                        
         }

        const width=()=>{
            const wit=(Data[index].index/Data.length)*100
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
                const {data,option}=this.state
                index=index-1 
                if(index>=0)
                {
                this.setState({index:index})
                this.setState({option:JSON.parse(window.localStorage.getItem(index))}) 
                console.log('d'+option)
                }
                else
                {
                    index=0
                }
        }
    
        const coloring={
                darkbg:'black',
                lightbg:'white',
                darkcl:'black',
                lightcl:'white',
                darkbd:'',
                lightbd:''
        }
            
      
        return ( 
            <BrowserRouter>
                 
            <div className='App' style={dark?{backgroundColor:coloring.darkbg, color:coloring.lightcl}:{backgroundColor:coloring.lightbg , color:coloring.darkcl}}>
                
                <Routes >
                    <Route exact  path='/' element={submited?
                    <>
                    <NavBar 
                    darkmode={darkmode}
                    dark={dark}
                    submit={submitmode}
                    index={Data[index].index}
                    total={Data.length}
                    done={width}
                    />
                    <Task
                    question={Data[index].question}
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
                </Routes> 
             </div>
            </BrowserRouter>       
         );
        }
        
}
 
export default App;




