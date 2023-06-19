// STYLES
import { useStyle } from "./style";
// MUI
import { Box, Typography } from "@mui/material";

export const Header = () => {
  const classes = useStyle();

  return (
    <Box className={classes.header}>
      <Typography variant="h3" component="h1">
        TODO LIST
      </Typography>
    </Box>
  );
};
