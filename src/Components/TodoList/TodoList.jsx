// CORE
import { useSelector, useDispatch } from "react-redux";
// COMPONENTS
import { TodoItem } from "../TodoItem/TodoItem";
// ACTIONS
import { deleteAllTodo } from "../../store/slices/todoSlice";
// SELECTORS
import { selectFilters } from "../../store/selectors/selectTodos";
import { selectTodos } from "../../store/selectors/selectTodos";
import { selectAllTodos } from "../../store/selectors/selectTodos";
// STYLE
import { useStyle } from "./style";
// MUI
import { Stack, Typography, Button, Box, Badge } from "@mui/material";
import { useSnackbar } from "notistack";
// MUI ICONS
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const TodoList = () => {
  const classes = useStyle();
  const { enqueueSnackbar } = useSnackbar();
  const filter = useSelector(selectFilters);
  const todos = useSelector(selectTodos);
  const totalTodoslength = useSelector(selectAllTodos).length;
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllTodo());
    enqueueSnackbar("TASKS DELETED!!!", {
      variant: "error",
    });
  };

  return (
    <Box component="div" className={classes.container}>
      <Typography variant="h4" component="h2">
        {totalTodoslength ? `${filter} TODOS:` : "CREATE YOUR FIRST TODO!"}
      </Typography>
      <Stack spacing={3} className={classes.stack}>
        {todos.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            checked={todoItem.checked}
            edit={todoItem.edit}
          />
        ))}
        {todos.length > 1 ? (
          <Button
            className={classes.btn}
            variant="contained"
            color="error"
            size="large"
            onClick={handleDeleteAll}
          >
            DELETE ALL -
            <Badge color="secondary" badgeContent={totalTodoslength}>
              <DeleteForeverIcon size="large" />
            </Badge>
          </Button>
        ) : null}
      </Stack>
    </Box>
  );
};
