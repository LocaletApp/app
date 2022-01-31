import { opacityForHex } from "../utils/hexOpacity"
import themeData from "../themes/light.theme.json"
import { Button } from "./components/Button"

export const DEFAULT_MODE = "light"

const ui = opacityForHex(themeData.colors.ui)
const text = opacityForHex(themeData.colors.text)
const flow = opacityForHex(themeData.colors.flow)
const contrast = opacityForHex(themeData.colors.contrast)
const brandPrimary = opacityForHex(themeData.colors.brand.primary)
const brandSecondary = opacityForHex(themeData.colors.brand.secondary)

const rootStyles = {
  color: themeData.colors.text,
  w: "full",
  minW: "full",
  h: "full",
  minH: "full",
  lineHeight: 1.25,
  fontFamily: "Sniglet", // TODO: change me
  scrollBehavior: "smooth",
  textRendering: "optimizeLegibility",
  WebkitTapHighlightColor: "transparent",

  "::-webkit-scrollbar": {
    w: 1,
    h: 1,
  },

  "::-webkit-scrollbar-track": {
    background: "transparent",
  },

  "::-webkit-scrollbar-thumb": {
    cursor: "pointer",
    bg: "background.secondary",
    rounded: "full",
    ":hover": {
      bg: "ui.80",
    },
  },
}

export const theme = {
  components: {
    Button,
    Container: {
      baseStyle: {
        p: 0,
        w: "full",
        maxW: "container",
      },
    },
  },
  config: {
    cssVarPrefix: "synqat",
    useSystemColorMode: true,
    initialColorMode: DEFAULT_MODE,
  },
  styles: {
    global: {
      body: { ...rootStyles, bg: "transparent", width: "100vw" },
      html: { ...rootStyles, bg: themeData.colors.background.secondary, overflowY: "overlay" },
      "#__next": rootStyles,
      ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])': { boxShadow: "none" },
    },
  },
  shadows: {
    outline: "0 0 0 2px var(--synqat-colors-brand-secondary-100)",
  },
  radii: themeData.radius,
  sizes: {
    half: "50%",
    full: "100%",
    ...themeData.sizes,
  },
  space: {
    half: "50%",
    full: "100%",
    ...themeData.sizes,
  },
  colors: {
    ...themeData.colors,
    brand: {
      primary: {
        100: brandPrimary(1),
        80: brandPrimary(0.8),
        60: brandPrimary(0.6),
        40: brandPrimary(0.4),
        20: brandPrimary(0.2),
      },
      secondary: {
        100: brandSecondary(1),
        80: brandSecondary(0.8),
        60: brandSecondary(0.6),
        40: brandSecondary(0.4),
        20: brandSecondary(0.2),
      },
    },
    contrast: {
      100: contrast(1),
      80: contrast(0.8),
      60: contrast(0.6),
      40: contrast(0.4),
      20: contrast(0.2),
      15: contrast(0.15),
      10: contrast(0.1),
      5: contrast(0.05),
      "025": contrast(0.025),
    },
    text: {
      100: text(1),
      80: text(0.8),
      60: text(0.6),
      40: text(0.4),
      20: text(0.2),
      15: text(0.15),
      10: text(0.1),
      5: text(0.05),
      "025": text(0.025),
    },
    flow: {
      100: flow(1),
      80: flow(0.8),
      60: flow(0.6),
      40: flow(0.4),
      20: flow(0.2),
      15: flow(0.15),
      10: flow(0.1),
      5: flow(0.05),
      "025": flow(0.025),
    },
    ui: {
      100: ui(1),
      80: ui(0.8),
      60: ui(0.6),
      40: ui(0.4),
      20: ui(0.2),
      15: ui(0.15),
      10: ui(0.1),
      5: ui(0.05),
      "025": ui(0.025),
    },
  },
} as const
