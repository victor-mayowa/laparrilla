import React from 'react'
import AddCoursesModal from '../Courses/AddCoursesModal'
import CoursesBody from '../Courses/CoursesBody'
import CoursesHeader from '../Courses/CoursesHeader'
import DeleteCoursesModal from '../Courses/DeleteCoursesModal'
import EditCoursesModal from '../Courses/EditCoursesModal'
import Layout from "../Layout/Layout";

const CoursesPage = () => {
  return (
    <div>
      <Layout/>
      <AddCoursesModal/>
      <EditCoursesModal/>
      <DeleteCoursesModal/>
        <div className= "relative md:ml-[60px] ml-0">
        <CoursesHeader/>
        <CoursesBody/>
        </div>
    </div>
  
  )
}

export default CoursesPage