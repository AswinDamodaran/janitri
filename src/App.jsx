import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import { Provider } from "react-redux";
import store from "./store/store";
import { SnackbarProvider } from 'notistack';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <SnackbarProvider>
        <MainPage />
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
