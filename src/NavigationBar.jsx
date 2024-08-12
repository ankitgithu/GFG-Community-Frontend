import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faUserGraduate,
  faBriefcase,
  faBell,
  faChalkboardTeacher,
  faSchool,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return (
    <div>
        <div className="bg-white  h-96 w-60 mt-2 ml-2 flex  justify-start">

        <ul className='mt-2 space-y-2'>
      <li className='w-60 h-10 flex ml-2 hover:bg-gray-200'>
        <a to='/home' className='flex items-center w-full h-full'>
          <FontAwesomeIcon icon={faHome} className='mr-2' />
          <button className='w-full h-full text-left'>Home</button>
        </a>
      </li>
      <li className='w-60 h-10 flex ml-2 hover:bg-gray-200'>
        <a to='/freshers-job' className='flex items-center w-full h-full'>
          <FontAwesomeIcon icon={faUserGraduate} className='mr-2' />
          <button className='w-full h-full text-left'>Freshers Job</button>
        </a>
      </li>
      <li className='w-60 h-10 flex ml-2 hover:bg-gray-200'>
        <a to='/experienced-jobs' className='flex items-center w-full h-full'>
          <FontAwesomeIcon icon={faBriefcase} className='mr-2' />
          <button className='w-full h-full text-left'>Experienced Jobs</button>
        </a>
      </li>
      <li className='w-60 h-10 flex ml-2 hover:bg-gray-200'>
        <a to='/all-job-updates' className='flex items-center w-full h-full'>
          <FontAwesomeIcon icon={faBell} className='mr-2' />
          <button className='w-full h-full text-left'>All Job Updates</button>
        </a>
      </li>
      <li className='w-60 h-10 flex ml-2 hover:bg-gray-200'>
        <a to='/interview-experience' className='flex items-center w-full h-full'>
          <FontAwesomeIcon icon={faChalkboardTeacher} className='mr-2' />
          <button className='w-full h-full text-left'>Interview Experience</button>
        </a>
      </li>
      <li className='w-60 h-10 flex ml-2 hover:bg-gray-200'>
        <a to='/campus-experience' className='flex items-center w-full h-full'>
          <FontAwesomeIcon icon={faSchool} className='mr-2' />
          <button className='w-full h-full text-left'>Campus Experience</button>
        </a>
      </li>
      <li className='w-60 h-10 flex ml-2 hover:bg-gray-200'>
        <a to='/news' className='flex items-center w-full h-full'>
          <FontAwesomeIcon icon={faNewspaper} className='mr-2' />
          <button className='w-full h-full text-left'>News</button>
        </a>
      </li>
    </ul>


      
  
  
        </div>
      
    </div>
  )
}

export default NavigationBar
