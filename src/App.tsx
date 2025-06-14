import "./App.css";
import ProductListPage from "./pages/ProductListPage";
import { ThemeProvider } from "products_shell_mfe/ThemeContext";

const App = () => {
  return (
    <div>
      <h1>Products Remote MFE</h1>
      <p>This is a remote microfrontend application for displaying products.</p>
      <ThemeProvider>
        <ProductListPage />
      </ThemeProvider>
    </div>
  );
};

export default App;
