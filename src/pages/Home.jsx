import { Image, Center, Paper, Flex, Overlay, Grid, Stack, Text } from '@mantine/core'
import React from 'react'
import TaskBar from '../components/TaskBar'
import { useDisclosure } from '@mantine/hooks';

export default function Home() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <Flex
            h="100vh"
            direction="column"
        >
            <Center
                flex={1}
                bg='#1f86a8'
            >
                <Image
                    h={200}
                    src="/images/HomeBack.png" alt='Logo'
                />

            </Center>
            {opened && <Overlay onClick={close} color="#000" backgroundOpacity={0.35} blur={6} >
                <Flex
                    h="99.94vh"
                    direction="column"
                >
                    <Center flex={1}>
                        <Grid grow w="30vw">
                            <Grid.Col span={4}>
                                <Stack gap={1} align="center">
                                    <Image onClick={open} src="/images/terminal.png" alt="it's me" style={{ cursor: "pointer" }} h={90} />
                                    <Text fw={500} fz={14}>Terminal</Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Stack gap={1} align="center">
                                    <Image onClick={open} src="/images/folder.png" alt="it's me" style={{ cursor: "pointer" }} h={90} />
                                    <Text fw={500} fz={14}>Explorer</Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Stack gap={1} align="center">
                                    <Image onClick={open} src="/images/calendar.png" alt="it's me" style={{ cursor: "pointer" }} px={13} />
                                    <Text fw={500} fz={14}>Calendar</Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Stack gap={1} align="center">
                                    <Image onClick={open} src="/images/terminal.png" alt="it's me" style={{ cursor: "pointer" }} h={90} />
                                    <Text fw={500} fz={14}>CMD</Text>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Stack gap={1} align="center">
                                    <Image onClick={open} src="/images/terminal.png" alt="it's me" style={{ cursor: "pointer" }} h={90} />
                                    <Text fw={500} fz={14}>CMD</Text>
                                </Stack>
                            </Grid.Col>

                        </Grid>
                    </Center>
                    <TaskBar open={open} opened={opened} />
                </Flex>
            </Overlay>}
            {!opened && <TaskBar open={open} opened={opened} />}
        </Flex>
    )
}
