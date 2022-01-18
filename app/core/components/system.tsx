import { Stack, StackProps } from "@mui/material"

export interface FlexProps extends StackProps {}

export const Flex = (props: FlexProps) => (
  <Stack {...props} alignItems="center" justifyContent="center" />
)
export const Row = (props: FlexProps) => <Flex {...props} direction="row" />
export const Column = (props: FlexProps) => <Flex {...props} direction="column" />
