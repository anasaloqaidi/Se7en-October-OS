import { Avatar, Flex, Text,  } from '@mantine/core'
import { IconCellSignal5 } from '@tabler/icons-react';
import React, { useEffect } from 'react'
import { Animated } from 'react-animated-css';

export default function TaskBar({ open, opened, tasks }) {

    return (


        <Flex
            bg="rgba(0, 0, 0)"
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
           
            { tasks.map((value, index) => (
                <Avatar key={index} radius={0} onClick={()=>{ value.fun()}} alt="it's me" p={6} style={{ cursor: "pointer" }} src={value.src }/> 
                
            ))}
        </Flex>

            <Flex
                gap="xs"
                justify="flex-start"
                align="center"
                direction="row"
            >
                <Avatar
                    radius={0}
                    bg="gray"
                    alt="it's me" p={6} style={{ cursor: "pointer" }}
                >
                    <IconCellSignal5 />
                </Avatar>
                <Text pr={11} size="xs">{Date().toString().slice(0, 16)}</Text>
            </Flex>

        </Flex>

    )
}
