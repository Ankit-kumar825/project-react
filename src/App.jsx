import React, { Component } from 'react';
import './App.css';
import CourseCard from './CourseCard';


export default class App extends Component {
  constructor(){
    super();
    this.state = {courses:[
      {name:"Data Structure and Algorithm",duration:"40hrs", price:"RS.100",img:"/project-react/4.png"},
      {name:"Java Programming",duration:"30hrs", price:"RS.180",img:"/project-react/2.png"},
      {name:"React JS",duration:"40hrs", price:"RS.120",img:"/project-react/3.png"},
      {name:"Machine Learning",duration:"35hrs", price:"RS.200",img:"/project-react/1.png"},
    ]};
  }
  render() {
    const{courses} = this.state;
    return (
      <div>
        <div className='app'>
          <div className='header'>Course Catalog - 2500030825 - ANKIT </div>
          <div className='section'>
            {courses.map((data)=>(
              <CourseCard data = {data} />
            ))}
          </div>
          <div className='footer'>Copyright @2026. All Rights Reserved. SACHIN KUMAR</div>
        </div>
      </div>
    )
  }
}