// CORE
import { useState } from "react";
import { useDispatch } from "react-redux";
// ACTIONS
import {
  checkedTodo,
  editTodo,
  deleteTodo,
} from "../../store/slices/todoSlice";
// STYLE
import { useStyle } from "./style";
// MUI
import { Checkbox, TextField, IconButton, Paper, Box } from "@mui/material";
import { useSnackbar } from "notistack";
// MUI ICONS
import EditIcon from "@mui/icons-material/Edit";
import EditOffIcon from "@mui/icons-material/EditOff";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoItem = ({ id, title, checked, edit }) => {
  const classes = useStyle();
  const { enqueueSnackbar } = useSnackbar();
  const [inputValue, setInputValue] = useState(title);
  const dispatch = useDispatch();

  const handlerChecked = () => {
    dispatch(checkedTodo(id));

    checked
      ? enqueueSnackbar("TASK NOT COMPLETED!", {
          variant: "warning",
        })
      : enqueueSnackbar("TASK COMPLETED!", {
          variant: "success",
        });
  };

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlerEdit = () => {
    dispatch(editTodo({ id: id, title: inputValue }));

    edit
      ? enqueueSnackbar("TASK SAVED!", {
          variant: "success",
        })
      : enqueueSnackbar("TASK EDITED!", {
          variant: "warning",
        });
  };

  const handlerDelete = () => {
    dispatch(deleteTodo(id));
    enqueueSnackbar("TASK DELETED!", {
      variant: "error",
    });
  };

  return (
    <Paper
      elevation={24}
      className={
        checked
          ? classes.container + " " + classes.checkedContainer
          : classes.container
      }
    >
      <Checkbox
        size="medium"
        onChange={handlerChecked}
        checked={checked}
        disabled={edit}
        color="error"
        id={id}
      />
      {edit ? (
        <TextField
          type="search"
          label="Edit"
          value={inputValue}
          onChange={inputChange}
          color="warning"
          fullWidth
        />
      ) : (
        <Box
          component="p"
          className={
            checked ? classes.title + " " + classes.checkedP : classes.title
          }
        >
          <label htmlFor={id}>{title}</label>
        </Box>
      )}

      <IconButton
        aria-label="Edit todo"
        size="large"
        color={edit ? "success" : "warning"}
        onClick={handlerEdit}
        disabled={checked ? true : false}
      >
        {edit ? <EditOffIcon /> : <EditIcon />}
      </IconButton>

      <IconButton
        aria-label="Delete todo"
        size="large"
        color="error"
        onClick={handlerDelete}
      >
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};
