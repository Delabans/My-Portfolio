import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contacts/contact"
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/productList";
import Toggle from "./components/toggle/toogle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;