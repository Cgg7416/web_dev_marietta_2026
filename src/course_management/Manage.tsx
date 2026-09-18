import '../index.css';
import * as React from 'react';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import NumberField from '../mui_material_components/NumberField';
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";

// Material Imports
//import Stack from '@mui/material/Stack';

export default function Course_Management() {
      return (
            <>
            
            <Add_Course/>

            </>
      )
}

function Add_Course() {

      const [semester, setSemester] = React.useState('');
      const [daytime, setDayTime] = React.useState('');
      const [mwfTime, setMWFTime] = React.useState('');
      const [mwTime, setMWTime] = React.useState('');
      const [tthTime, setTTHTime] = React.useState('');
      const [singleDayTime, setSingleDayTime] = React.useState('');

      const handleSemesterChange = (event: SelectChangeEvent) => {
            setSemester(event.target.value);
      }

      const handleDayTimeChange = (event: SelectChangeEvent) => {
            setDayTime(event.target.value);
      }

      const handleMWFTimeChange = (event: SelectChangeEvent) => {
            setMWFTime(event.target.value);
      }

      const handleMWTimeChange = (event: SelectChangeEvent) => {
            setMWTime(event.target.value);
      }

      const handleTTHTimeChange = (event: SelectChangeEvent) => {
            setTTHTime(event.target.value);
      }

      const handleSingleDayTimeChange = (event: SelectChangeEvent) => {
            setSingleDayTime(event.target.value);
      }

      return ( 
            <Box component="form"
            sx={{backgroundColor:"white", pb:1/20}}>

                  <FormGroup>
                  <InputLabel id="semester">Semester</InputLabel>
                  <Select
                        labelId="semester"
                        id="semester_select"
                        value={semester}
                        label="Semester"
                        onChange={handleSemesterChange}
                  >
                        <MenuItem value="Spring">Spring</MenuItem>
                        <MenuItem value="Summer">Summer</MenuItem>
                        <MenuItem value="Fall">Fall</MenuItem>
                  </Select>

                <NumberField label="Course Year" id="courseYear" min={2008} max={2050} />
                
                </FormGroup>

            <FormGroup>
                <TextField id="coursePrefix" label="Course Prefix" variant="outlined" />

                <TextField id="courseNumber" label="Course Number" variant="outlined" />

                <TextField id="courseSection" label="Course Section" variant="outlined" />

                <TextField id="courseName" label="Course Name" variant="outlined" />

                <TextField id="room" label="Room" variant="outlined" />

            </FormGroup>

            <FormGroup>

                <InputLabel id="daysOffered">Days Offered</InputLabel>
                  <Select
                        labelId="daysOffered"
                        id="daysOfferedSelect"
                        value={daytime}
                        label="daysOffered"
                        onChange={handleDayTimeChange}
                  >
                        <MenuItem value="MWF">Monday, Wednesday, Friday</MenuItem>
                        <MenuItem value="MW">Monday, Wednesday</MenuItem>
                        <MenuItem value="TR">Tuesday, Thursday</MenuItem>
                        <MenuItem value="Monday">Monday</MenuItem>
                        <MenuItem value="Tuesday">Tuesday</MenuItem>
                        <MenuItem value="Wednesday">Wednesday</MenuItem>
                        <MenuItem value="Thursday">Thursday</MenuItem>
                  </Select>

                  <InputLabel id="timeMWF">Monday, Wednesday, Friday</InputLabel>
                  <Select
                        labelId="timeMWF"
                        id="timeMWFSelect"
                        value={mwfTime}
                        label="Monday, Wednesday, Friday"
                        onChange={handleMWFTimeChange}
                  >
                        <MenuItem value="8:00-8:50">8:00 AM to 8:50 AM</MenuItem>
                        <MenuItem value="9:00-9:50">9:00 AM to 9:50 AM</MenuItem>
                        <MenuItem value="10:00-10:50">10:00 AM to 10:50 AM</MenuItem>
                        <MenuItem value="11:00-11:50">11:00 AM to 11:50 AM</MenuItem>
                        <MenuItem value="12:00-12:50">12:00 PM to 12:50 PM</MenuItem>
                        <MenuItem value="1:00-1:50">1:00 PM to 1:50 PM</MenuItem>
                        <MenuItem value="2:00-2:50">2:00 PM to 2:50 PM</MenuItem>
                        <MenuItem value="3:00-3:50">3:00 PM to 3:50 PM</MenuItem>
                  </Select>

                <InputLabel id="timeMWF">Monday, Wednesday</InputLabel>
                  <Select
                        labelId="timeMW"
                        id="timeMWSelect"
                        value={mwTime}
                        label="Monday, Wednesday, Friday"
                        onChange={handleMWTimeChange}
                  >
                        <MenuItem value="9:00-10:50">9:00 AM to 10:50 AM</MenuItem>
                        <MenuItem value="1:00-2:15">1:00 PM to 2:15 PM</MenuItem>
                        <MenuItem value="1:00-2:50">1:00 PM to 2:50 PM</MenuItem>
                        <MenuItem value="2:00-3:15">2:00 PM to 3:15 PM</MenuItem>
                  </Select>

                <InputLabel id="timeTTH">Tuesday, Thursday</InputLabel>
                  <Select
                        labelId="timeTTH"
                        id="timeTTHSelect"
                        value={tthTime}
                        label="Tuesday, Thursday"
                        onChange={handleTTHTimeChange}
                  >
                        <MenuItem value="8:00-9:15">8:00 AM to 9:15 AM</MenuItem>
                        <MenuItem value="9:30-10:45">9:30 AM to 10:45 AM</MenuItem>
                        <MenuItem value="11:00-12:15">11:00 AM to 12:15 PM</MenuItem>
                        <MenuItem value="1:00-2:15">1:00 PM to 2:15 PM</MenuItem>
                        <MenuItem value="2:30-3:45">2:30 PM to 3:45 PM</MenuItem>
                  </Select>

                <InputLabel id="timeSingleDay">Single Day</InputLabel>
                  <Select
                        labelId="timeSingleDay"
                        id="timeSingleDaySelect"
                        value={singleDayTime}
                        label="Tuesday, Thursday"
                        onChange={handleSingleDayTimeChange}
                  >
                        <MenuItem value="1:00-4:00">1:00 PM to 4:00 PM</MenuItem>
                        <MenuItem value="2:00-5:00">2:00 PM to 5:00 PM</MenuItem>
                        <MenuItem value="7:00-9:30">7:00 PM to 9:30 PM</MenuItem>
                  </Select>

            </FormGroup>

            <FormGroup>

                <NumberField label="Credit Hours" id="creditHours" min={1} max={3} />

                <TextField id="instuctorFirstName" label="Instructor First Name" variant="outlined" />

                <TextField id="instructorLastName" label="Instructor Last Name" variant="outlined" />

                <NumberField label="Enrollment Cap" id="enrollmentCap" min={1} max={120} />

            </FormGroup>

                <Button variant="contained">Submit</Button>

            </Box>
      )
}