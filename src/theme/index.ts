import { extendTheme } from "@chakra-ui/react";
import global from "./global";
import Button from "./button";
import Textarea from "./textarea";
import Input from "./input";
import Select from "./select";

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
    600: "#8298AB",
  },
  dark: {
    50: "#a4a4a4",
    100: "#767676",
    200: "#5f5f5f",
    300: "#494949",
    400: "#323232",
    500: "#1B1B1B",
    600: "#18181B",
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
  medium: `'Neue Montreal Medium', sans-serif`,
  bold: `'Neue Montreal Bold', sans-serif`,
};

const breakpoints = {
  sm: "22.5em", // 360px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "90em", // 1440px
  "3xl": "96em", // 1536px
};

const overrides = {
  colors,
  fonts,
  breakpoints,
  styles: { global },
  components: { Button, Input, Textarea, Select },
};

export default extendTheme(overrides);
