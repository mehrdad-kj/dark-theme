import { useContext } from "react";
import { ThemeContext } from "./assests/HOC/ThemeProviderHOC";

const Cards = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="layout">
      <div className="theme-toggle">
        <button
          className={`theme-toggle-btn theme-toggle-btn-${theme.theme}`}
          onClick={theme.toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
      <div className="card--container">
        <div className={`card card-${theme.theme}`}>
          <div className="card-header">
            <h2>Card Title</h2>
          </div>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id est
              asperiores facere provident eius modi aliquam magni sit delectus
              quaerat iste consectetur magnam numquam aut velit, nobis,
              blanditiis labore. Ducimus?
            </p>
          </div>
          <div className="card-footer">
            <button className={`btn btn-${theme.theme}`}>Click Me</button>
          </div>
        </div>
        <div className={`card card-${theme.theme}`}>
          <div className="card-header">
            <h2>Another Card</h2>
          </div>
          <div className="card-body">
            <p>
              This is another card to showcase the theme change. You can add
              more content or components here.
            </p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
