import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const drawerWidth = 240;

function EnrollStudent() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "#121212",
        color: "white",
      }}
    >
      {/* Header */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1e1e1e",
          color: "white",
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "white" }}
          >
            Course Registration System
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ display: "flex", flex: 1 }}>

        {/* Navigation */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,

            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#1e1e1e",
              color: "white",
            },
          }}
        >
          <Box sx={{ padding: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: "white" }}
            >
              Navigation
            </Typography>
          </Box>

          <List>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="/"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
              >
                <ListItemText
                  primary="Home"
                  slotProps={{
                    primary: {
                      sx: { color: "white" },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="/enroll-student"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
              >
                <ListItemText
                  primary="Enroll Student"
                  slotProps={{
                    primary: {
                      sx: { color: "white" },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="/add-instructor"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
              >
                <ListItemText
                  primary="Add Instructor"
                  slotProps={{
                    primary: {
                      sx: { color: "white" },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="/add-course"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
              >
                <ListItemText
                  primary="Add Course"
                  slotProps={{
                    primary: {
                      sx: { color: "white" },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="/register-course"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
              >
                <ListItemText
                  primary="Register Course"
                  slotProps={{
                    primary: {
                      sx: { color: "white" },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="/drop-course"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#333333",
                  },
                }}
              >
                <ListItemText
                  primary="Drop Course"
                  slotProps={{
                    primary: {
                      sx: { color: "white" },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>

          </List>
        </Drawer>

        {/* Enroll Student Form */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: 4,
            backgroundColor: "#121212",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              maxWidth: 600,
              margin: "0 auto",
              backgroundColor: "#1e1e1e",
              color: "white",
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                color: "white",
              }}
            >
              Enroll Student
            </Typography>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >

              {/* Student First Name */}
              <TextField
                label="Student's First Name"
                id="studentFirstName"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "black",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                }}
              />

              {/* Student Last Name */}
              <TextField
                label="Student's Last Name"
                id="studentLastName"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "black",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                }}
              />

              {/* Student Year */}
              <FormControl
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "black",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-root": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },

                  "& .MuiSelect-icon": {
                    color: "black",
                  },
                }}
              >
                <InputLabel id="student-year-label">
                  Student's Year
                </InputLabel>

                <Select
                  labelId="student-year-label"
                  id="studentYear"
                  label="Student's Year"
                  defaultValue="Freshman"
                >
                  <MenuItem value="Freshman">
                    Freshman
                  </MenuItem>

                  <MenuItem value="Sophomore">
                    Sophomore
                  </MenuItem>

                  <MenuItem value="Junior">
                    Junior
                  </MenuItem>

                  <MenuItem value="Senior">
                    Senior
                  </MenuItem>
                </Select>
              </FormControl>

              {/* Student Major */}
              <TextField
                label="Student's Major"
                id="studentMajor"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "black",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                }}
              />

              {/* Student Email */}
              <TextField
                label="Student's Email Address"
                id="studentEmail"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "black",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "black",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "white",
                    },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",

                  "&:hover": {
                    backgroundColor: "#dddddd",
                  },
                }}
              >
                Submit
              </Button>

            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          padding: 2,
          textAlign: "center",
          backgroundColor: "#1e1e1e",
          color: "white",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "white",
          }}
        >
          Group Members: Collin Gladen, Group Member 2, Group Member 3
        </Typography>
      </Box>
    </Box>
  );
}

export default EnrollStudent;