import React from "react"
import "./courses.css"
import { course } from "../../data"
import Heading from "../common/heading/Heading"

const Courses = () => {
  return (
    <>
      <div className='course'>
        <div className='container'>
          <Heading subtitle='COURSES THAT WE OFFER' />
          <div className='content '>
            {course.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  {/* <img src={val.hoverCover} alt='' className='show' /> */}
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses
