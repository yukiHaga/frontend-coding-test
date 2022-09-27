// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    mediaQuery: {
      sm: 600;
      md: 900;
      lg: 1200;
    };
    colors: {
      red: "#F15B5B";
      blue: "#0081f0";
      gray: "#c0c0c0";
      white: "#ffffff";
      black: "#333333";
    };
  }
}