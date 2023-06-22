import { Header, Footer } from "./components/index";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";

function App() {
  return (
    <div className="App bg-white dark:bg-gray-900">
      <Header></Header>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
