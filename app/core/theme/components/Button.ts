import { StyleConfig } from "@chakra-ui/theme-tools"

export const Button: StyleConfig = {
  baseStyle: {
    rounded: "sm",
  },
  sizes: {
    sm: {
      py: 2,
      px: 4,
    },
    lg: {
      py: 4,
      px: 8,
    },
  },
  variants: {
    filled: {
      bg: "ui.5",
      _hover: {
        bg: "ui.10",
      },
    },
    ghost: {
      bg: "transparent",
      _hover: {
        bg: "ui.10",
      },
    },
    ghostNoHover: {
      bg: "transparent",
    },
  },
  defaultProps: {},
}
