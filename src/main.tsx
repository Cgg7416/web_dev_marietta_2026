import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';

// Page imports
import Home from "./Home.tsx";
import Course_Management from "./course_management/Manage.tsx";
import Course_Registration from "./course_management/Register.tsx";
import Drop_Course from "./course_management/Drop.tsx";
import Student_Management from "./user_management/Students.tsx";
import Instructor_Management from "./user_management/Instructors.tsx";
import Manual from "./manual/Manual.tsx";

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static" className="Navbar">
        <Toolbar>
          
            <Button href="/"><Typography sx={{color:'white',textDecoration: 'none'}}>Home</Typography></Button>
            <Button href="/enroll_student"><Typography sx={{color:'white',textDecoration: 'none'}}>Manage Students</Typography></Button>
            <Button href="/add_instructor"><Typography sx={{color:'white',textDecoration: 'none'}}>Manage Instructors</Typography></Button>
            <Button href="/add_course"><Typography sx={{color:'white',textDecoration: 'none'}}>Manage Courses</Typography></Button>
            <Button href="/register"><Typography sx={{color:'white',textDecoration: 'none'}}>Register for Courses</Typography></Button>
            <Button href="/drop"><Typography sx={{color:'white',textDecoration: 'none'}}>Drop Courses</Typography></Button>
          
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enroll_student" element={<Student_Management />} />
        <Route path="/add_instructor" element={<Instructor_Management />} />
        <Route path="/add_course" element={<Course_Management />}/>
        <Route path="/register" element={<Course_Registration />} />
        <Route path='/drop' element={<Drop_Course />} />
        <Route path="/manual" element={<Manual />}/>
      </Routes>
    </BrowserRouter>
  )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
