import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "theme-ui";

import App from "./App";
import GlobalStyles from "./GlobalStyles";
import mswInit from "./msw-initializer";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme";

const queryClient = new QueryClient();
mswInit();

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </Router>
      <ReactQueryDevtools
        toggleButtonProps={{
          style: {
            bottom: 50,
          },
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>,
);

reportWebVitals();
