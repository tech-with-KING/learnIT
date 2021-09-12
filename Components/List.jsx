import React from 'react';  
import './list.css'
const List=({People})=>{
    
    return  (
        <>
        { People.map((Person)=>{
            const {id,name,photo,age}=Person;
            return  <article key={id} className='article'>
                 <img src='images/IMG-20200726-WA0000.jpg' className='image'></img>
                <h2> {name}</h2>
                <h3>Age: {age}</h3>
            </article>
        })}
        </>
       
    );
}

export default List;