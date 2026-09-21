import {
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function AddInstructor() {
  return (
    <Box
      color="primary"
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "secondary",
        color: "primary",
      }}
    >
        {/* Add Instructor Form */}
        <Box
          color="secondary"
          component="main"
          sx={{
            flexGrow: 1,
            padding: 4,
          }}
        >
          <Paper
            elevation={3}
            color="primary"
            sx={{
              padding: 4,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            <Typography
              variant="h4"
              color="textPrimary"
              component="h1"
              gutterBottom
            >
              Add Instructor
            </Typography>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >

              {/* Instructor First Name */}
              <TextField
                label="Instructor First Name"
                id="instructorFirstName"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }}
              />

              {/* Instructor Last Name */}
              <TextField
                label="Instructor Last Name"
                id="instructorLastName"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }}
              />

              {/* Instructor Department */}
              <TextField
                label="Instructor Department"
                id="instructorDepartment"
                variant="outlined"
                fullWidth
                
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }}
              />

              {/* Instructor Rank */}
              <FormControl
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-root": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },

                  "& .MuiSelect-icon": {
                    color: "secondary",
                  },
                }}
              >
                <InputLabel id="instructor-rank-label">
                  Instructor Rank
                </InputLabel>

                <Select
                  labelId="instructor-rank-label"
                  id="instructorRank"
                  label="Instructor Rank"
                  defaultValue="Instructor"
                >
                  <MenuItem value="Instructor">
                    Instructor
                  </MenuItem>

                  <MenuItem value="Assistant Professor">
                    Assistant Professor
                  </MenuItem>

                  <MenuItem value="Associate Professor">
                    Associate Professor
                  </MenuItem>

                  <MenuItem value="Professor">
                    Professor
                  </MenuItem>
                </Select>
              </FormControl>

              {/* Instructor Email */}
              <TextField
                label="Instructor Email Address"
                id="instructorEmail"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "primary",
                  borderRadius: 1,

                  "& .MuiInputLabel-root": {
                    color: "secondary",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-input": {
                    color: "secondary",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary",
                  },

                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "primary",
                    },
                }}
              />

              {/* Submit Button */}
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

export default AddInstructor;