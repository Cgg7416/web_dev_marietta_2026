import {
  Typography,
  Box,
  TextField,
  Button,
  Paper,
} from "@mui/material";

function RegisterCourse() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "secondary",
        color: "primary",
      }}
    >
        {/* Register Course Form */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 4,
            backgroundColor: "secondary",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              maxWidth: 600,
              margin: "0 auto",
              backgroundColor: "secondary",
              color: "primary",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              color='textPrimary'
            >
              Register Course
            </Typography>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                label="Student First Name"
                id="studentFirstName"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,
                }}
              />

              <TextField
                label="Student Last Name"
                id="studentLastName"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,
                }}
              />

              <TextField
                label="Semester and Year"
                id="semesterYear"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,
                }}
              />

              <TextField
                label="Course Prefix"
                id="coursePrefix"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,
                }}
              />

              <TextField
                label="Course Number"
                id="courseNumber"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,
                }}
              />

              <TextField
                label="Course Section"
                id="courseSection"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "primary",
                  color: "secondary",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "info",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

  );
}

export default RegisterCourse;