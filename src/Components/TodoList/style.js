import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  stack: {
    width: "100%",
  },
});
