import { To } from "react-router-dom";
import { Theme } from "theme-ui";

const colorScales = {
  grayScale: {
    1: "#D6D6",
    2: "#B8B8",
    3: "#9999",
    4: "#7A7A",
    5: "#5C5C",
  },
  purpleScale: {
    1: "#F4F4F6",
    2: "#DDDDE3",
    3: "#817891",
    4: "#3B3743",
    5: "#1E1C22",
  },
};

declare module "theme-ui" {
  interface Theme {}
  interface ColorMode {
    grayScale?: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    purpleScale?: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
  }
  interface LinkProps {
    to: To;
  }
}

export const theme: Theme = {
  config: {
    // initialColorModeName: "light",
    printColorModeName: "light",
    useColorSchemeMediaQuery: "system",
    useBorderBox: true,
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#0A0A0B",
    background: "#FFFFFF",
    accent: colorScales.grayScale[3],
    highlight: colorScales.purpleScale[2],
    primary: "#07c",
    muted: colorScales.purpleScale[1],
    modes: {
      light: {
        text: "primary",
        background: "#FFFFFF",
        accent: colorScales.grayScale[3],
        highlight: colorScales.purpleScale[2],
        primary: "#07c",
        muted: colorScales.purpleScale[1],
      },
      dark: {
        text: "#FFFFFF",
        background: "#141414",
        primary: "#07c",
        accent: colorScales.grayScale[3],
        highlight: colorScales.purpleScale[4],
        muted: colorScales.purpleScale[5],
      },
    },
  },
  links: {
    nav: {
      outline: "none",
      outlineColor: "highlight",
      fontWeight: 400,
      borderRadius: 4,
      ":hover": {
        backgroundColor: "muted",
        borderRadius: 4,
      },
      ":focus": {
        backgroundColor: "highlight",
        outlineColor: "highlight",
      },
    },
  },
  forms: {
    input: {
      ":-webkit-autofill": {
        WebkitTextFillColor: ({ colors }) => `${colors?.primary}`,
      },
    },
  },
  styles: {
    ul: {
      listStyleType: "none",
    },
    li: {
      listStyleType: "none",
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      ":active": {
        opacity: 0.5,
      },
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
  buttons: {
    primary: {},
  },
  cards: {
    primary: {
      color: "text",
      padding: [4, 5],
      borderRadius: 6,
      marginBottom: 3,
      outline: "none",
      backgroundColor: "muted",
      border: ({ colors }) => `1px solid ${colors?.highlight}`,
      ":hover": {
        backgroundColor: "muted",
      },
      ":last-of-type": {
        marginBottom: 0,
      },
      ":focus": {
        backgroundColor: "muted",
        boxShadow: ({ colors }) => `0px 2px 2px 2px ${colors?.muted}`,
      },
    },
    compact: {
      color: "text",
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  layout: {
    container: {
      padding: 4,
      maxWidth: 600,
    },
  },
  breakpoints: ["480px", "768px", "1024px", "1200px"],
};
