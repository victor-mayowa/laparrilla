import React from 'react'
import CoursesBody from '../Courses/CoursesBody'
import CoursesHeader from '../Courses/CoursesHeader'

const CoursesPage = () => {
  return (
    <div className= "relative md:ml-[60px] ml-0">
        <CoursesHeader/>
        <CoursesBody/>
        </div>
  )
}

export default CoursesPage