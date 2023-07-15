import { extendTheme } from "@chakra-ui/react";
import global from "./global";
// import Button from "./components/button";
// import Form from "./components/form";
// import Input from "./components/input";

const colors = {
  brand: {
    50: "#ced3e5",
    100: "#b5bed7",
    200: "#8492bd",
    300: "#5366a3",
    400: "#3a5195",
    500: "#09257B",
  },
  secondary: {
    100: "#8ca8bb",
    200: "#799ab0",
    300: "#668ba5",
    400: "#537d99",
    500: "#406E8E",
  },
  dark: {
    50: "#a4a4a4",
    100: "#767676",
    200: "#5f5f5f",
    300: "#494949",
    400: "#323232",
    500: "#1B1B1B",
    600: "#181818",
    700: "#161616",
  },
  gray: {
    50: "#FAFAFA",
    100: "#F6F7F9",
    200: "#E5E7EA",
    300: "#CED2D6",
    400: "#9EA5AD",
    500: "#676E76",
    600: "#596066",
    700: "#454C52",
    800: "#383F45",
    900: "#24292E",
    1000: "#1A1D1F",
  },
};

const fonts = {
  heading: `'Lato', sans`,
  body: `'Neue Montreal', sans-serif`,
  bodyItalic: `'Neue Montreal Italic', sans-serif`,
  medium: `'Neue Montreal Medium', sans-serif`,
  mediumItalic: `'Neue Montreal MediumItalic', sans-serif`,
  bold: `'Neue Montreal Bold', sans-serif`,
  boldItalic: `'Neue Montreal BoldItalic', sans-serif`,
};

const overrides = {
  colors,
  fonts,
  styles: { global },
  // components: { Button, Form, Input },
};

export default extendTheme(overrides);
