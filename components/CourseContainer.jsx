import React from 'react'
import CourseCard from './CourseCard'

const CourseContainer = () => {
  return (
    <div className='flex flex-col px-10 py-3'>
        <div className='flex w-full my-3'><h1 className='text-3xl font-semibold'>Our Courses</h1></div>
        <div className='grid grid-cols-4 gap-3 '>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
    </div>
  )
}

export default CourseContainer