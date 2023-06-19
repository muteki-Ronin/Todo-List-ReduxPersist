import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "80px",
    padding: "10px",
    backgroundColor: "rgba(235, 238, 231, 0.8)",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
  },
  title: {
    flexGrow: 1,
  },
  checkedP: {
    textDecoration: "line-through",
    color: "rgb(227, 30, 30)",
    fontWeight: "normal",
  },
  checkedContainer: {
    backgroundColor: "rgba(235, 238, 231, 0.3)",
  },
});
