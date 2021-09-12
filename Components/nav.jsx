import React,{useState} from 'react';
import './nav.css'
import Data from './Data'
import List from './List';


function Page(){
    const [People , SetPeople]=useState(Data);
        return(
            <main>
                <h1>People</h1>
                <section className='container'>
                   <List People={People} />
                   <h3 className='h3'>{People.length} coupons won today</h3>
                   <button onClick={()=>SetPeople([])}>Add Date Here</button>

                </section>
            </main>
        )


}  
export default Page;