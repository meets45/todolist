import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { store, persistore } from "./state/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  // displays navbar and main function and wraps them in provider and persistgate
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <div
          className="min-vh-100 overflow-auto"
          style={{ backgroundColor: "#121212" }}
        >
          <Navbar />
          <Main />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
