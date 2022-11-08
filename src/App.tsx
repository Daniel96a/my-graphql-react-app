import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import { AppLayout } from "./components";
import { Select } from "./components/Select";
import PathNotFoundPage from "./pages/PathNotFoundPage";
import TodosPage from "./pages/TodosPage";

function App() {
  const location = useLocation();

  return (
    <AppLayout>
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path={"/"}
            element={
              <Select>
                <Select.Option value={"asdf"}>asdf</Select.Option>
                <Select.Option value={"fdsa"}>fdsa</Select.Option>
              </Select>
            }
          />
          <Route path={"*"} element={<PathNotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  );
}

export default App;
