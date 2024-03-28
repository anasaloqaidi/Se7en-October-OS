import { Image, Center, Paper } from '@mantine/core'
import React from 'react'
import TaskBar from '../components/TaskBar'

export default function Home() {
    return (
        <>
        <Center
            h='95vh'
            bg='#1f86a8'
        >
            <Image
            h={200}
                src="/images/HomeBack.png" alt='Logo'
            />

        </Center>
        <TaskBar/>
        </>
    )
}
