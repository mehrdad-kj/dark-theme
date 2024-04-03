import Cards from "./Cards";
import Layout from "./Layout";
import ThemeProvider from "./assests/HOC/ThemeProviderHOC";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Cards />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
