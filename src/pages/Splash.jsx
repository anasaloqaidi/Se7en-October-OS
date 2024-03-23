import { Center, Image } from '@mantine/core'
import {Animated} from "react-animated-css";

import React, { useEffect } from 'react'

export default function Splash() {
  let OsStart = new Audio("/sounds/start.wav")
  useEffect(() => {
    const timer = setTimeout(() => {
      OsStart.play();
    }, 600);
    
    return () => clearTimeout(timer);
  },[])
  return (
    <Center h='100vh' bg='#000f21'>
      <Animated animationIn="flip" animationOut="fadeOut" isVisible={true}>
        <Image
      style={{height: "100px" }}
      src="/images/logo.webp"
    />
    </Animated>
  </Center>
  )
}
