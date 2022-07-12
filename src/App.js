import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { store, persistore } from "./state/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <div className="min-vh-100 bg-secondary overflow-auto">
          <Navbar />
          <Main />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
