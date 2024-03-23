import { Center, Flex, Image } from '@mantine/core'
import {Animated} from "react-animated-css";

import React from 'react'

export default function Splash() {
  return (
    <Center h='100vh' bg='black'>
      <Animated animationIn="rotateIn" animationOut="fadeOut" isVisible={true}>
        <Image
      style={{height: "80px" }}
      src="/images/logo.webp"
    />
    </Animated>
  </Center>
  )
}
