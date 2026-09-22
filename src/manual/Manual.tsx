import '../index.css';
import {Box, Typography} from "@mui/material";

// Material Imports
//import Stack from '@mui/material/Stack';

export default function Manual() {
      return ( <>
                  <h1>Documentation</h1>
                  <UserManual/>
                  <ProgrammerManual/>
            </>
      )
}

function UserManual() {
      return (
            <Box>
                  <Typography variant="h2">User Manual</Typography>
            </Box>
      )
}

function ProgrammerManual() {
      return (
            <h1>User Manual mine</h1>
            <Box>
                  <Typography variant="h2">Programmer Manual</Typography>
            </Box>
      )
}