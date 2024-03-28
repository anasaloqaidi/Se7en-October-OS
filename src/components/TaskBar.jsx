import { Avatar, Center, Flex, Grid, Image, Modal, Overlay, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React from 'react'

export default function TaskBar() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>

            {opened && <Overlay onClick={close} color="#000" backgroundOpacity={0.35} blur={6}>
                <Center h="100vh">
                    <Grid grow w="50vw">
                        <Grid.Col span={4}>
                            <Stack gap={1} align="center">
                                <Image onClick={open} src="/images/terminal.png" alt="it's me" style={{ cursor: "pointer" }} h={90}/>
                                <Text fw={500} fz={14}>CMD</Text>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Stack gap={1} align="center">
                                <Image onClick={open} src="/images/terminal.png" alt="it's me" style={{ cursor: "pointer" }} h={90}/>
                                <Text fw={500} fz={14}>CMD</Text>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Stack gap={1} align="center">
                                <Image onClick={open} src="/images/terminal.png" alt="it's me" style={{ cursor: "pointer" }} h={90}/>
                                <Text fw={500} fz={14}>CMD</Text>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Stack gap={1} align="center">
                                <Image onClick={open} src="/images/terminal.png" alt="it's me" style={{ cursor: "pointer" }} h={90}/>
                                <Text fw={500} fz={14}>CMD</Text>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Stack gap={1} align="center">
                                <Image onClick={open} src="/images/terminal.png" alt="it's me" style={{ cursor: "pointer" }} h={90}/>
                                <Text fw={500} fz={14}>CMD</Text>
                            </Stack>
                        </Grid.Col>

                    </Grid>
                </Center>
            </Overlay>}
            <Flex
                mah="5vh"
                mih="5vh"
                bg="rgba(0, 0, 0, .3)"
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Avatar onClick={open} src="/images/logo.webp" alt="it's me" p={3} pl={6} style={{ cursor: "pointer" }} />


            </Flex></>
    )
}
