const colorScales = {
  grayScale: {
    50: "#F5F7FA",
    100: "# E4E7FA",
    200: "#CBD2D9",
    300: "#9AA5B1",
    400: "#7B8794",
    500: "#61637C",
    600: "#52606D",
    700: "#3E4C59",
    800: "#323F4B",
    900: "#1F2933",
  },
};

export const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  breakpoints: ["480px", "768px", "1024px", "1200px"],
  colors: {
    gray: "#52606D",
    text: "#212121",
    background: "#fff",
    primary: "#33e",
    ...colorScales,
  },
};
