// CORE
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { setFilter } from "../../store/slices/filtersSlice";
// SELECTORS
import { selectFilters } from "../../store/selectors/selectTodos";
import { selectTodosLength } from "../../store/selectors/selectTodos";
// CONSTS
import { ALL, ACTIVE, COMPLETED } from "../../store/consts/filtersConsts";
// STYLE
import { useStyle } from "./style";
// MUI
import { Box, ButtonGroup, Button, Badge } from "@mui/material";
// MUI ICONS
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";

export const FiltersBtnPanel = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const allTodos = useSelector((state) => selectTodosLength(state, ALL));
  const activeTodos = useSelector((state) => selectTodosLength(state, ACTIVE));
  const completedTodos = useSelector((state) =>
    selectTodosLength(state, COMPLETED)
  );

  return (
    <Box component="div" className={classes.container}>
      <ButtonGroup className={classes.btnContainer} variant="contained">
        <Button
          onClick={() => dispatch(setFilter("ALL"))}
          color={filter === ALL ? "error" : "primary"}
        >
          All todos -
          <Badge color="secondary" badgeContent={allTodos}>
            <ReceiptLongSharpIcon />
          </Badge>
        </Button>
        <Button
          onClick={() => dispatch(setFilter("ACTIVE"))}
          color={filter === ACTIVE ? "error" : "primary"}
        >
          Active todos -
          <Badge color="secondary" badgeContent={activeTodos}>
            <ReceiptLongSharpIcon />
          </Badge>
        </Button>
        <Button
          onClick={() => dispatch(setFilter("COMPLETED"))}
          color={filter === COMPLETED ? "error" : "primary"}
        >
          Completed todos -
          <Badge color="secondary" badgeContent={completedTodos}>
            <ReceiptLongSharpIcon />
          </Badge>
        </Button>
      </ButtonGroup>
    </Box>
  );
};
