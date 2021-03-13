import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#aa8929",
  primaryBright: "#aa8929",
  primaryDark: "#aa8929",
  secondary: "#222222",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#222222",
  background: "#f1f1f1",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#222222",
  textDisabled: "#BDC2C4",
  textSubtle: "#211e17",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ffe423",
  background: "#2f2a19",
  backgroundDisabled: "#211e17",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#8e8e8e",
  primaryDark: "#0098A1",
  tertiary: "#2f2a19",
  text: "#FFFFFF",
  textDisabled: "#FFFFFF",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#6b5821",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
