import { css, Global } from "@emotion/react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        ::-webkit-scrollbar {
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        #root {
          height: 100%;
          display: flex;
        }
        html {
          height: 100%;
          overflow-y: scroll;
          overscroll-behavior-y: none;
        }
        button {
          border: none;
          padding: 0;
          cursor: pointer;
          width: 100%;
        }
        body {
          height: 100%;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
