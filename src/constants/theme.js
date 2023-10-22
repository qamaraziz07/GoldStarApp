import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // Primary: "#68A09A",
  Primary: "#F1C232",
  LightPrimary: "#9CD7CE",
  Secondary: "#ED4B98",
  LightSecondary: "#F288B7",
  White: "white",
  Yellow: "#ebcc34",
  Red: "red",
  LightRed: "#ee0000",
  Gray: "gray",
  Green: "#64CC62",
  Black: "black",
  LightGray: "lightgrey",
  DarkOpacity: "rgba(0,0,0,0.3)",
  DarkerOpacity: "rgba(0,0,0,0.5)",
  LighterGray: "#d6d6d6",
  LightestGray: "#f5f5f5",
  Blue: "#00d0f4",
  Orange: "orange",
  Purple: "purple",
  green: "#31A062",
  LightGrey: "rgba(162, 167, 173, 1)",
  background: "#031F2B",
  primary: "#E65100",
  secondary: "#D6D2D2",
  tertiary: "#263238",
  white: "#FFFFFF",
  gray: "#F0F5FA",
  black: "#32343E",
  transparent: "rgba(255, 255, 255, 0.25)",
  // Gold: "#db8b0b",
  Gold: "#edbf36",
  lightGold: "#df9e38",
  silver: "#c4c3c3",
  platinum: "#7d6de7",
  Tile1: "#F21E68",
  Tile2: "#FF7433",
  Tile3: "#F1C232",
  Tile4: "#7B59DE",
};

export const SIZES = {
  // GLOBAL SIZES
  base: 8,
  font: 14,
  radius: 30,
  padding: 8,
  padding2: 12,
  padding3: 16,

  // FONTS SIZES
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // APP DIMENSIONS
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "bold",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "bold", fontSize: SIZES.h4, lineHeight: 20 },
  body1: { fontFamily: "regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "regular", fontSize: SIZES.body4, lineHeight: 20 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
