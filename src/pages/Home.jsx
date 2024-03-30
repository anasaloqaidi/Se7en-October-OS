import { Image, Center, Paper, Flex, Overlay, Grid, Stack, Text } from '@mantine/core'
import React from 'react'
import TaskBar from '../components/TaskBar'
import VsCode from '../components/VsCode'
import Chrom from '../components/Chrom'
import {Animated} from "react-animated-css";
import { useDisclosure, useListState, useMouse } from '@mantine/hooks';
let tasks =[]
export default function Home() {

    const [values, handlers] = useListState([
        { item: VsCode, isShow: true, isMin: false,width: '802px', height: '771px', zIndex: 0},
        { item: Chrom, isShow: true, isMin: false,width: '802px', height: '771px', zIndex: 0},

    ]);
    

    const handleSetItemProp = (index , token , value) => {
        
        if(token=="zIndex"){
            const v = values[index].zIndex;
            for(let i =0; i < values.length; i ++){
                if(values[i].zIndex > v )
                handlers.setItemProp(i, "zIndex" , values[i].zIndex - 1)
            }
        }
        if(token=="isShow"){
            tasks.pop(index)
        }
        handlers.setItemProp(index, token , value)
      };

      const taskApp= [
       { fun :()=>{ handlers.setItemProp(1, "isShow" , false); handlers.setItemProp(1, "isMin" , false) }, src:"/images/vscode.png" }, 
       { fun:()=>{ handlers.setItemProp(0, "isShow" , false); handlers.setItemProp(0, "isMin" , false) } , src:"/images/chrome.png" },
        
        
      ]
      

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Center h="100vh" bg='#1f86a8' >

                <Image h={200} src="/images/HomeBack.png" alt='Logo' />

            </Center>

            <Overlay backgroundOpacity={0} blur={0} >
                <Flex
                    h="100vh"
                    direction="column"
                >
                    <Paper bg="#24262b00" flex={1} >
                        {values.map((value, index) => (

                            <value.item value={values} index={index} handleSetItemProp={handleSetItemProp} />
                        ))}
                    </Paper >


                    
                    {!opened && <TaskBar open={open} opened={opened} tasks={tasks} />}
                   
                    {opened && <Overlay onClick={close} color="#000" backgroundOpacity={0.35} blur={6} >
                        <Flex  h="100vh" direction="column" >
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
                                        <Stack
                                        onClick={()=>{
                                            handlers.setItemProp(0, "isShow" , false)
                                            handlers.setItemProp(0, "isMin" , false)
                                            tasks.push(taskApp[0])
                                            
                                        }}
                                        gap={1} align="center" style={{ cursor: "pointer" }}>
                                            <Image onClick={open} src="/images/vscode.png" alt="it's me"  px={17} />
                                            <Text fw={500} fz={14}>VS Code</Text>
                                        </Stack>
                                    </Grid.Col>
                                    <Grid.Col span={4}>
                                        <Stack 
                                         onClick={()=>{
                                            handlers.setItemProp(1, "isShow" , false)
                                            handlers.setItemProp(1, "isMin" , false)
                                            tasks.push(taskApp[1])
                                        }}
                                        
                                        gap={1} align="center">
                                       
                                            <Image onClick={open} src="/images/chrome.png" alt="it's me" style={{ cursor: "pointer" }} h={90} />
                                            <Text fw={500} fz={14}>Chrome</Text>
                                        </Stack>
                                    </Grid.Col>

                                </Grid>
                            </Center>
                            <TaskBar open={open} opened={opened} tasks={tasks} />
                        </Flex>
                    </Overlay>}

                </Flex>
            </Overlay>
        </>
    )
}
