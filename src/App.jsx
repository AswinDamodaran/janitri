import { useState } from "react";
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
