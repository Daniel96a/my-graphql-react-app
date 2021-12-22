import { Route, Routes } from "react-router-dom";

import SiteLayout from "./components/SiteLayout";
import Overviewpage from "./pages/Overviewpage";

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path={"/"} element={<Overviewpage />} />
      </Routes>
    </SiteLayout>
  );
}

export default App;
