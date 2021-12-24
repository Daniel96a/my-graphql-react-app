import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import SiteLayout from "./components/SiteLayout";
import Overviewpage from "./pages/Overviewpage";
import PathNotFoundPage from "./pages/PathNotFoundPage";

function App() {
  const location = useLocation();
  return (
    <SiteLayout>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path={"/"} element={<Overviewpage />} />
          <Route path={"*"} element={<PathNotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </SiteLayout>
  );
}

export default App;
