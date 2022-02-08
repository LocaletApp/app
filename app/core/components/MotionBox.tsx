import { motion, MotionProps } from "framer-motion"
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  Stack,
  StackProps,
} from "@chakra-ui/react"

export const DEFAULT_DURATION = 0.85
export const DEFAULT_EASING = [0.27, 0.91, 0.72, 1]

export const transitionConfig: MotionProps["transition"] = {
  ease: DEFAULT_EASING,
  duration: DEFAULT_DURATION,
}

export const transitionMediumConfig: MotionProps["transition"] = {
  ...transitionConfig,
  duration: 0.4,
}

export const transitionFastConfig: MotionProps["transition"] = {
  ...transitionConfig,
  duration: 0.2,
}

// This sucks
export const MotionBox = motion<Omit<BoxProps, keyof MotionProps> & MotionProps>(Box as any)
export const MotionFlex = motion<Omit<FlexProps, keyof MotionProps> & MotionProps>(Flex as any)
export const MotionStack = motion<Omit<StackProps, keyof MotionProps> & MotionProps>(Stack as any)

export const MotionButton = motion<Omit<ButtonProps, keyof MotionProps> & MotionProps>(
  Button as any
)
