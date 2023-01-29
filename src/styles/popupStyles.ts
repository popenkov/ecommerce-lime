import { theme } from "../theme";

export const popupStyles = {
  overlay: {
    height: "100%",
    maxHeight: "100%",
    minHeight: "100%",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "7",
    backgroundColor: theme.color.popupBackground,
    backdropFilter: "blur(4px)",
    transform: "translate3d(0,0,0)",
    overflow: "hidden",
  },
  content: {
    borderRadius: "none",
    maxHeight: "100vh",
    inset: "unset",
    padding: "0",
    backgroundColor: "none",
    background: "none",
    border: "none",
    overflow: "hidden",
  },
};
