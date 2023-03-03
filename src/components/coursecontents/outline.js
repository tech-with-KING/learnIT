import React, { Component } from 'react';
import './outline.css'
import { Link } from 'react-router-dom';
class OutlineCard extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        
    }

    render() { 
        const courses = [
            {
                courseName:"Mathematics",
                courseCode:"FSC114",
                couseImage:"/Logos/mat2.jpeg",
                courseId:""

            },
            {
                courseName:"Biology",
                courseCode:"FSC111",
                couseImage:"/Logos/biology2.png",
                courseId:""

            },
            {
                courseName:"Zoology",
                courseCode:"fsc116",
                couseImage:"/Logos/zly4.jpeg",
                courseId:""

            },
            {
                courseName:"Physics",
                courseCode:"fsc115",
                couseImage:"/Logos/phs1.jpg",
                courseId:""

            },
            {
                courseName:"Chemistry",
                courseCode:"FSC112",
                couseImage:"/Logos/chm2.jpeg",
                courseId:""

            },
            {
                courseName:"Computer Science",
                courseCode:"FSC113",
                couseImage:"/Logos/cs6.jpeg",
                courseId:""

            }
        ]
        return (
            <>
              <div className="card_header_container">

            <h1 className='card_header'>Course Outlines</h1>
            <div className='card_container'>
            {
                courses.map((course)=>{
                    return(
                
                    <div class="card" >
                        <div className='image' style={{backgroundImage:`url(${course.couseImage})`}}></div>
                        <div className='course_description'>
                            <ul>
                                <li>Coure Name: {course.courseName}</li>
                                <li>Course Code: {course.courseCode}</li>
                                <Link className='drive_link' to={"/"}>View Course Materials</Link>
                            </ul>
                            
                        </div>        
                        
                    </div>
                
                    )
                })
            }
            </div>
            </div>             
             </>
         );
    }
}
 
export default OutlineCard;
