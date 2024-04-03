import useThemeContext from "./assests/Hooks/useThemeContext";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const theme = useThemeContext();
  return <div className={`layout theme-${theme.theme}`}>{children}</div>;
};

export default Layout;
