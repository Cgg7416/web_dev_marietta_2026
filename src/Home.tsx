import { Box, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function WebInterface() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#121212",
        color: "white",
        p: 4,
      }}
    >
      <Paper
        sx={{
          bgcolor: "#1e1e1e",
          color: "white",
          p: 4,
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: 3,
          }}
        >
          Web Interface
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          In Module 1, the Course Registration System focuses on
          implementing the user interface. The system consists of several
          pages that contain the appropriate Web forms needed for the
          registration system.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          For this module, the pages primarily provide the required forms
          and user interface elements. The main focus is on the HTML, CSS,
          and visual design of the project rather than server-side
          functionality.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          Although a database will be used as part of the Course
          Registration System, database functionality is not the focus of
          Module 1. The interface provides the forms that will later be
          connected to the database and server-side functionality.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Required Pages
        </Typography>

        <List>
          <ListItem>
            <ListItemText
              primary="Home"
              sx={{
                "& .MuiListItemText-primary": {
                  color: "white",
                },
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Enroll Student"
              sx={{
                "& .MuiListItemText-primary": {
                  color: "white",
                },
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Add Instructor"
              sx={{
                "& .MuiListItemText-primary": {
                  color: "white",
                },
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Course Management"
              sx={{
                "& .MuiListItemText-primary": {
                  color: "white",
                },
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Register Course"
              sx={{
                "& .MuiListItemText-primary": {
                  color: "white",
                },
              }}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Drop Course"
              sx={{
                "& .MuiListItemText-primary": {
                  color: "white",
                },
              }}
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}