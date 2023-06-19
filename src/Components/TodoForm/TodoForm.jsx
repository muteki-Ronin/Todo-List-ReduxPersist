// CORE
import { useState } from "react";
import { useDispatch } from "react-redux";
// ACTIONS
import { addTodo } from "../../store/slices/todoSlice";
// STYLE
import { useStyle } from "./style";
// MUI
import { Box, TextField, Button } from "@mui/material";
import { useSnackbar } from "notistack";
// MUI ICONS
import SendIcon from "@mui/icons-material/Send";

export const TodoForm = () => {
  const classes = useStyle();
  const { enqueueSnackbar } = useSnackbar();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue("");
    enqueueSnackbar("TASK ADDED!", {
      variant: "success",
    });
  };

  return (
    <>
      <Box component="form" onSubmit={handlerSubmit} className={classes.form}>
        <TextField
          type="search"
          label="New todo"
          variant="outlined"
          onChange={handleChange}
          value={inputValue}
          fullWidth
          color="success"
          className={classes.input}
        />
        <Button
          endIcon={<SendIcon />}
          type="submit"
          size="large"
          variant="contained"
          color="success"
          className={classes.button}
        >
          Add
        </Button>
      </Box>
    </>
  );
};
