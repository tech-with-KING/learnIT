import React, { Component } from 'react';
import './contents.css'
import { Link } from 'react-router-dom';
class CourseCard extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        
    }

    render() { 
        const courses = [
            {
                courseName:"physics",
                courseCode:"fsc115",
                couseImage:"",
                courseId:""

            },
            {
                courseName:"physics",
                courseCode:"fsc115",
                couseImage:"",
                courseId:""

            },
            {
                courseName:"physics",
                courseCode:"fsc115",
                couseImage:"",
                courseId:""

            },
            {
                courseName:"physics",
                courseCode:"fsc115",
                couseImage:"",
                courseId:""

            },
            {
                courseName:"physics",
                courseCode:"fsc115",
                couseImage:"",
                courseId:""

            },
            {
                courseName:"physics",
                courseCode:"fsc115",
                couseImage:"",
                courseId:""

            }
        ]
        return (
            <>
              <div className="card_header_container">

            <h1 className='card_header'>Course Materials</h1>
            <div className='card_container'>
            {
                courses.map((course)=>{
                    return(
                
                    <div class="card" >
                        {course.courseName}
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
 
export default CourseCard;
