import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Overviewpage from "./pages/Overviewpage";
import PathNotFoundPage from "./pages/PathNotFoundPage";

function App() {
  const location = useLocation();

  return (
    <AppLayout>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path={"/"} element={<Overviewpage />} />
          <Route path={"*"} element={<PathNotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  );
}

export default App;
