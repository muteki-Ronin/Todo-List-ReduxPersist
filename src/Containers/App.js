// COMPONENTS
import { Header } from "../Components/Header/Header";
import { TodoForm } from "../Components/TodoForm/TodoForm";
import { FiltersBtnPanel } from "../Components/FiltersBtnPanel/FiltersBtnPanel";
import { TodoList } from "../Components/TodoList/TodoList";
// STYLES
import { useStyle } from "./style";
// MUI
import { Container } from "@mui/material";

export const App = () => {
  const classes = useStyle();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Header />
      <TodoForm />
      <FiltersBtnPanel />
      <TodoList />
    </Container>
  );
};


