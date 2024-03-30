import { Center, Image } from '@mantine/core'
import {Animated} from "react-animated-css";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Splash() {
  let OsStart = new Audio("/sounds/start.wav");
  const navigate = useNavigate();

  useEffect(() => {
    
    const timer = setTimeout(() => {
      OsStart.play();
    }, 600);
    const timer1 = setTimeout(() => {
      navigate("/home") 
    }, 3000);
    return () =>{clearTimeout(timer);clearTimeout(timer1)} ;
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
