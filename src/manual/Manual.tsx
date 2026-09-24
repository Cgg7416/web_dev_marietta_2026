import '../index.css';
import React from 'react';
import {Box, Typography, Button, ButtonGroup, Accordion, Divider, AccordionSummary,AccordionDetails} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Material Imports
//import Stack from '@mui/material/Stack';

export default function Manual() {

      const [manual, setManual] = React.useState('user');

      return ( <>
                  <ManualIntroduction/>

                  <ButtonGroup sx={{alignSelf:'center', mt:1,mb:1}}>
                        <Button onClick={() => setManual("user")}>User Manual</Button>
                        <Button onClick={() => setManual("programmer")}>Programmer Manual</Button>
                  </ButtonGroup>

                  <Divider></Divider>
                  
                  <Box>
                        {manual == "user" && (<UserManual/>)} 
                        {manual == "programmer" && (<ProgrammerManual/>)}
                  </Box>
            </>
      )
}

function ManualIntroduction() {
      
      return(
            <Box>
                  <Typography variant="h1" >Manuals</Typography>

                  <br></br>
                  <Typography variant="body1">To navigate throughout this website use the bar at the top!</Typography>
                  <Typography variant="body2">Need help? Click on the "help" button in the bottom right corner of the page!</Typography>
                  
            </Box>
      )
}

function UserManual() {
      return (
            
            <Box sx={{textAlign:"left"}}>
                  
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography variant="body1">Managing Students</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2">To manage students, click on the "Students" button in the top navigation bar.</Typography>
                              <Typography variant="body2">To add a student, fill out the form and click submit at the bottom of the form.</Typography>
                              <Typography variant="body2">You will need to provide the student's first and last name along with their current year (freshman, sophomore, junior, senior). Then you will need to provide their email and major!</Typography>
                              <Typography variant="body2">Please be sure to fill out all fields correctly and completely.</Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography variant="body1">Managing Instructors</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2">Adding instructors is the same process as adding a student and is also found in the nav bar at the top!</Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography variant="body1">Managing Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2">To manage courses, click on the "Manage courses" button in the top navigation bar.</Typography>
                              <Typography variant="body2">To add a course, fill out the form and click submit at the bottom of the form.</Typography>
                              <Typography variant="body2">You will need to provide the course name, course number, the instructor's name, course prefix, Course year, and the room number</Typography>
                              <Typography variant="body2">You will also need to provide the year the course is offered as well as the enrollment cap. The cap will be between 10 and 40/</Typography>
                              <Typography variant="body2">Please be sure to be specific with the date abd time of when the course is offered. It will be on a MWF or TTH format and you will also need to provide the amount of credits each course is worth</Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography variant="body1">Register Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2">To register for courses, click on the "Register Courses" button in the top navigation bar.</Typography>
                  <Typography variant="body2">To register for a course you will need to provide the course prefix, number, your first and last name, and the year you are (freshman, sophomore, junior, senior).</Typography>
                        </AccordionDetails>
                  </Accordion>
                  <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                              <Typography variant="body1">Dropping a Course</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                              <Typography variant="body2">To drop a course, click on the "Drop Courses" button in the top navigation bar</Typography>
                              <Typography variant="body2">The process of dropping a course is the same as registering for a course</Typography>
                        </AccordionDetails>
                  </Accordion>
            </Box>
      )
}

function ProgrammerManual() {
      return (
      
            <Box>
                  <Typography>Programmer Manual</Typography>
            </Box>
      )
}