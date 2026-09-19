import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// Imported theme from MUI Pallette Generator
export const lightMode = createTheme({
  "palette": {
    "mode": "light",
    "primary": {
      "main": "#6d0076"
    },
    "secondary": {
      "main": "#0075c2"
    },
    "error": {
      "main": "#ff5861"
    },
    "warning": {
      "main": "#ffbe00"
    },
    "info": {
      "main": "#00b5ff"
    },
    "success": {
      "main": "#00a96e"
    },
    "background": {
      "default": "#e8e8e8",
      "paper": "#ffffff"
    },
    "divider": "rgba(209, 209, 209, 0.12)",
    "text": {
      "primary": "rgba(31, 41, 55, 0.87)",
      "secondary": "rgba(31, 41, 55, 0.75)"
    },
    "action": {
      "active": "rgba(31, 41, 55, 0.54)",
      "hover": "rgba(31, 41, 55, 0.04)",
      "selected": "rgba(31, 41, 55, 0.08)",
      "disabled": "rgba(31, 41, 55, 0.26)",
      "disabledBackground": "rgba(31, 41, 55, 0.12)",
      "focus": "rgba(31, 41, 55, 0.12)"
    }

  },
  "typography": {
    "fontFamily": "\"Albert Sans\", \"Helvetica Neue\", Arial, sans-serif",
    "fontSize": 14,
    "h1": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 300,
      "fontSize": "6rem",
      "lineHeight": 1.167,
      "letterSpacing": "-0.01562em"
    },
    "h2": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 300,
      "fontSize": "3.75rem",
      "lineHeight": 1.2,
      "letterSpacing": "-0.00833em"
    },
    "h3": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "3rem",
      "lineHeight": 1.167,
      "letterSpacing": "0em"
    },
    "h4": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "2.125rem",
      "lineHeight": 1.235,
      "letterSpacing": "0.00735em"
    },
    "h5": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1.5rem",
      "lineHeight": 1.334,
      "letterSpacing": "0em"
    },
    "h6": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 500,
      "fontSize": "1.25rem",
      "lineHeight": 1.6,
      "letterSpacing": "0.0075em"
    }
  },
  "shape": {
    "borderRadius": 8
  },
  "components": {
    "MuiCard": {
      "styleOverrides": {
        "root": {
          "borderRadius": 16
        }
      }
    },
    "MuiDialog": {
      "styleOverrides": {
        "paper": {
          "borderRadius": 16
        }
      }
    },
    "MuiAlert": {
      "styleOverrides": {
        "root": {
          "borderRadius": 16
        }
      }
    },
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "borderRadius": 8,
          "minHeight": 43,
          "paddingInline": 17
        },
        "outlined": {
          "borderWidth": 1
        }
      }
    },
    "MuiOutlinedInput": {
      "styleOverrides": {
        "root": {
          "borderRadius": 8
        },
        "input": {
          "paddingTop": 10,
          "paddingBottom": 10
        },
        "notchedOutline": {
          "borderWidth": 1
        }
      }
    },
    "MuiTabs": {
      "styleOverrides": {
        "root": {
          "minHeight": 43
        }
      }
    },
    "MuiTab": {
      "styleOverrides": {
        "root": {
          "minHeight": 43
        }
      }
    },
    "MuiChip": {
      "styleOverrides": {
        "root": {
          "borderRadius": 16,
          "height": 24,
          "fontSize": 12
        }
      }
    },
    "MuiBadge": {
      "styleOverrides": {
        "badge": {
          "borderRadius": 16,
          "minWidth": 24,
          "height": 24,
          "fontSize": 11
        }
      }
    },
    "MuiSwitch": {
      "styleOverrides": {
        "root": {
          "transform": "scale(1.00)",
          "transformOrigin": "left center"
        }
      }
    },
    "MuiCheckbox": {
      "styleOverrides": {
        "root": {
          "& .MuiSvgIcon-root": {
            "fontSize": 24
          }
        }
      }
    },
    "MuiRadio": {
      "styleOverrides": {
        "root": {
          "& .MuiSvgIcon-root": {
            "fontSize": 24
          }
        }
      }
    }
  }
});

// Dark Theme

export const darkMode = createTheme({
  "palette": {
    "mode": "dark",
    "primary": {
      "main": "#9b69d3"
    },
    "secondary": {
      "main": "#d3699e"
    },
    "error": {
      "main": "#e25a5f"
    },
    "warning": {
      "main": "#eb9947"
    },
    "info": {
      "main": "#5f9ddd"
    },
    "success": {
      "main": "#59c07a"
    },
    "background": {
      "default": "#18121c",
      "paper": "#221b27"
    },
    "divider": "rgba(181, 163, 194, 0.14)",
    "text": {
      "primary": "rgba(243, 240, 245, 0.87)",
      "secondary": "rgba(205, 198, 210, 0.72)"
    },
    "action": {
      "active": "rgba(243, 240, 245, 0.54)",
      "hover": "rgba(243, 240, 245, 0.04)",
      "selected": "rgba(243, 240, 245, 0.08)",
      "disabled": "rgba(243, 240, 245, 0.26)",
      "disabledBackground": "rgba(243, 240, 245, 0.12)",
      "focus": "rgba(243, 240, 245, 0.12)"
    }
  },
  "typography": {
    "fontFamily": "\"Albert Sans\", \"Helvetica Neue\", Arial, sans-serif",
    "fontSize": 14,
    "h1": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 300,
      "fontSize": "6rem",
      "lineHeight": 1.167,
      "letterSpacing": "-0.01562em"
    },
    "h2": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 300,
      "fontSize": "3.75rem",
      "lineHeight": 1.2,
      "letterSpacing": "-0.00833em"
    },
    "h3": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "3rem",
      "lineHeight": 1.167,
      "letterSpacing": "0em"
    },
    "h4": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "2.125rem",
      "lineHeight": 1.235,
      "letterSpacing": "0.00735em"
    },
    "h5": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1.5rem",
      "lineHeight": 1.334,
      "letterSpacing": "0em"
    },
    "h6": {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontWeight": 500,
      "fontSize": "1.25rem",
      "lineHeight": 1.6,
      "letterSpacing": "0.0075em"
    }
  },
  "shape": {
    "borderRadius": 4
  },
  "components": {
    "MuiCard": {
      "styleOverrides": {
        "root": {
          "borderRadius": 8
        }
      }
    },
    "MuiDialog": {
      "styleOverrides": {
        "paper": {
          "borderRadius": 8
        }
      }
    },
    "MuiAlert": {
      "styleOverrides": {
        "root": {
          "borderRadius": 8
        }
      }
    },
    "MuiButton": {
      "styleOverrides": {
        "root": {
          "borderRadius": 4,
          "minHeight": 40,
          "paddingInline": 16
        },
        "outlined": {
          "borderWidth": 1
        }
      }
    },
    "MuiOutlinedInput": {
      "styleOverrides": {
        "root": {
          "borderRadius": 4
        },
        "input": {
          "paddingTop": 8,
          "paddingBottom": 8
        },
        "notchedOutline": {
          "borderWidth": 1
        }
      }
    },
    "MuiTabs": {
      "styleOverrides": {
        "root": {
          "minHeight": 40
        }
      }
    },
    "MuiTab": {
      "styleOverrides": {
        "root": {
          "minHeight": 40
        }
      }
    },
    "MuiChip": {
      "styleOverrides": {
        "root": {
          "borderRadius": 4,
          "height": 20,
          "fontSize": 10
        }
      }
    },
    "MuiBadge": {
      "styleOverrides": {
        "badge": {
          "borderRadius": 4,
          "minWidth": 20,
          "height": 20,
          "fontSize": 9
        }
      }
    },
    "MuiSwitch": {
      "styleOverrides": {
        "root": {
          "transform": "scale(0.83)",
          "transformOrigin": "left center"
        }
      }
    },
    "MuiCheckbox": {
      "styleOverrides": {
        "root": {
          "& .MuiSvgIcon-root": {
            "fontSize": 20
          }
        }
      }
    },
    "MuiRadio": {
      "styleOverrides": {
        "root": {
          "& .MuiSvgIcon-root": {
            "fontSize": 20
          }
        }
      }
    }
  }
});

//

