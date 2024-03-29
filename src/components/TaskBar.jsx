import { Avatar, Center, Flex, Grid, Image, Modal, Overlay, Stack, Text } from '@mantine/core'
import React from 'react'
import { Animated } from 'react-animated-css';

export default function TaskBar({open , opened}) {
    return (

           
            <Flex
                bg="rgba(0, 0, 0, .3)"
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"

            >
                <Animated animationIn='' animationOut='pulse' isVisible={!opened} >
                    <Avatar
                        onClick={open}
                        alt="it's me" p={3} pl={6} style={{ cursor: "pointer" }}
                        src="/images/logo.webp"
                    />
                </Animated>


                <Flex
                    flex={1}
                    gap="md"
                    justify="flex-start"
                    align="center"
                    direction="row"
                >
                    <Avatar
                        radius={0}
                        onClick={open}
                        alt="it's me" p={6} style={{ cursor: "pointer" }}
                        src="/images/folder.png"
                    />
                </Flex>
                <Flex
                    gap="md"
                    justify="flex-start"
                    align="center"
                    direction="row"
                >
                    <Avatar
                        radius={0}
                        onClick={open}
                        alt="it's me" p={6} style={{ cursor: "pointer" }}
                        src="/images/folder.png"
                    />
                </Flex>

            </Flex>
      
    )
}
