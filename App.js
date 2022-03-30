
import './App.css'
import Task from './home/index'
import Solution from './solutions/index'
import NavBar from './navbar/nav';
import {BrowserRouter,Route,Routes,Switch} from 'react-router-dom'
import Data from './Data';
import React , { Component } from 'react';
import Solutions from './solutions/index';
import TopBar from './solutions/top';

//states


let index=0
class App extends Component {
    constructor(props) { 
        super(props);
        
    }
    //state
    state = {
        index:index,
        option:Data[index].Options,
        pied:[],
        db:[],
        saved:[],   
        dark:false
    }


    //darkmode
  
  
 
    correct=[this.state.correct]
    // makeCorrect=(me)=>{
    //     let {pied}=this.state
    //     const option=[...op]
    //     this.pied=pied.push(me)
    //     console.log(option)
    //    }
    
   handleToggle=async(choice,options)=>{
      let{option}=this.state
      console.log(option)
      let opt=[...options]
      const index=opt.indexOf(choice)
      opt[index]={...choice}
      if(opt[index].active){
    //   console.log(opt[index].active)
      opt[index].active=false;
      
      this.setState({onptio:opt});
      }
      else{
        opt[index].active=true;
        

      }
      this.setState({option:[...opt]})
      console.log(option)
     
    }
     
    render() { 
       const {option,dark,db,saved}=this.state
       const incrementpage=()=>{next()}
       const decrementpage=()=>{preve()}
    const  getquestion =()=>{

           let arr=[]
           const {saved}=this.state
           
           for (let index = 0; index < Data.length; index++) 
           {
               



               const element = JSON.parse(localStorage.getItem(index)) 
               const is_correct=()=>{
                   return element.correct===true;
               }
               console.log(element.find(is_correct))
               const nw= element.filter((ele)=>{
                   if (ele.correct) {
                      
                       const text=ele
                       const boy ={e:ele.text}
                    //    console.log(boy)


                       return(element)
                   }
               })
               const nwb= element.filter((elo)=>{
                if (elo.active) {

                    
                }
            })
               
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
                chosen:nwb
              }
            arr.push(data)
            }
        //    this.setState({saved:arr})
           return(arr)
       }
// console.log(getquestion())
     const  next=()=>
     {
        const {data,option}=this.state
        const stored=window.localStorage.setItem(index,JSON.stringify(option))

           index+=1
           
         if(index < Data.length)
            {
                if (JSON.parse(localStorage.getItem(index)) ){
                    
                    this.setState({option:JSON.parse(localStorage.getItem(index))}) 
                    console.log('yes')
                    console.log(option)
                }
                else{
                    this.setState({option:Data[index].Options})
                    console.log('no')
                }

               
                    
            }
        else{
             return null
            }
                    console.log(index)
    }



        const darkmode=()=>{
            if(dark){
             this.setState({dark:false}) 
            }else{
             this.setState({dark:true})
            }
            console.log(this.state.dark)
        }

        const  preve=()=>
        {
            const {data,option}=this.state
            index=index-1 
            if(index>0)
            {
              this.setState({index:index})
              this.setState({option:JSON.parse(localStorage.getItem(index))}) 
              console.log('d'+option)
            }
            else
            {
                return null
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
                    <Route exact  path='/' element={
                    <>
                    <NavBar 
                    darkmode={darkmode}
                    dark={dark}
                    total={Data.length}
                />
                 <Task
                    question={Data[index].question}
                    key={index}
                    option={option}
                    handleNext={incrementpage}
                    handlePreve={decrementpage}
                    handleToggle={this.handleToggle}
                    dark={dark}
                    // getquestion={getquestion}
                    />
                    </>
                    } />
                    <Route path='/solutions' element={<>
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
                     />
                    </>  } />
                </Routes>
             </div>
            </BrowserRouter>       
         );
    }
}
 
export default App;




