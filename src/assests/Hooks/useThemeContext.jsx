import { useContext } from "react";
import { ThemeContext } from "../HOC/ThemeProviderHOC";

function useThemeContext() {
  const theme = useContext(ThemeContext);
  return theme;
}

export default useThemeContext;
