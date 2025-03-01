import { Box, Flex, Stack, Center, IconButton, HStack, Link, Circle, Text, VStack, Heading, Input, FileUploadRoot, FileUploadTrigger } from '@chakra-ui/react';
import { NewChatIcon, SidebarIcon, SmallGPTIcon, UpgradeIcon } from './icons/sidebar-icons';
import { Tooltip } from './components/ui/tooltip';
import { Avatar } from './components/ui/avatar';
import { FileUploadList } from './components/ui/file-upload'
import { InputGroup } from './components/ui/input-group';
import { EnterIcon, UploadIcon } from './icons/other-icons';
import { useState } from 'react';
function App() {
    const [sidebarVisible, setsidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setsidebarVisible(!sidebarVisible);
    }
    return (
        <>
            <Flex minHeight='100dvh'>
                <Box bg='bg.muted' w={!sidebarVisible ? '0' : '260px'} overflow='hidden' transition='width 0.3s'>
                    <Stack h='full' px='3' py='2'>
                        <Flex justify='space-between'>
                            <Tooltip
                                content='Close SideBar'
                                positioning={{ placement: 'right' }}
                                showArrow
                            >
                                <IconButton variant='ghost' onClick={toggleSidebar}>
                                    <SidebarIcon fontsize='2xl' color='fg.muted' />
                                </IconButton>
                            </Tooltip>

                            <Tooltip
                                content='New Chat'
                                showArrow
                            >
                                <IconButton variant='ghost'>
                                    <NewChatIcon fontsize='2xl' color='fg.muted' />
                                </IconButton>
                            </Tooltip>
                        </Flex>
                        <Stack px='2' gap='0' flex='1'>
                            <HStack _hover={{
                                layerStyle: 'fill.muted',
                                textDecor: 'none'
                            }}
                                px='1'
                                h='10'
                                borderRadius='lg'
                                w='100%'
                                justify='space-between'
                            >
                                <Link href='#' variant='plain' _hover={{ textDecor: 'none' }}>
                                    <Circle size='6' bg='bg' borderWidth='1px'>
                                        <SmallGPTIcon fontsize='md' />
                                    </Circle>
                                    <Text fontsize='sm' fontWeight='md' px='2'>
                                        Zorvyn
                                    </Text>
                                </Link>
                                <IconButton variant='ghost'>
                                    <NewChatIcon fontsize='2xl' color='fg.muted' />
                                </IconButton>

                            </HStack>
                        </Stack>

                        <Link href='#'
                            _hover={{ textDecor: 'none', layerStyle: 'fill.muted' }}
                            borderRadius='lg'
                            px='1'
                            py='2'>
                            <HStack>
                                <Circle size='8' fontsize='lg' borderWidth='1px'>
                                    <UpgradeIcon />
                                </Circle>
                                <Stack>
                                    <Text fontsize='sm' fontWeight='medium'> Share </Text>
                                </Stack>
                            </HStack>
                        </Link>
                    </Stack>
                </Box>
                <Box flex='1'>
                    <Stack h='full'>
                        <Flex justify='space-between' align='center' p='3'>
                            {!sidebarVisible && (
                                <Flex>
                                    <Tooltip
                                        content='Close SideBar'
                                        positioning={{ placement: 'right' }}
                                        showArrow
                                    >
                                        <IconButton variant='ghost' onClick={toggleSidebar}>
                                            <SidebarIcon fontsize='2xl' color='fg.muted' />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip
                                        content='New Chat'
                                        showArrow
                                    >
                                        <IconButton variant='ghost'>
                                            <NewChatIcon fontsize='2xl' color='fg.muted' />
                                        </IconButton>
                                    </Tooltip>
                                
                                </Flex>
                            )}
                            {sidebarVisible && <Text></Text>}
                            
                            <Avatar
                                name='Krishna'
                                size='sm'
                                colorPalette='blue'
                                variant='solid'
                            />
                        </Flex>
                        <Center flex='1'>
                            <VStack>
                                <Heading size='3xl'>What can i help with?</Heading>
                                <Center>
                                    <InputGroup minW='768px' startElement={
                                        <FileUploadRoot>
                                            <FileUploadTrigger>
                                                <UploadIcon fontsize='2xl' color='fg.subtle' />
                                            </FileUploadTrigger>
                                            <FileUploadList />
                                        </FileUploadRoot>
                                    }
                                        endElement={
                                            <IconButton fontsize='2xl' size='sm' borderRadius='full'>
                                                <EnterIcon fontsize='2xl' />
                                            </IconButton>
                                        } >
                                        <Input
                                            placeholder='Ask Zorvyn.ai'
                                            variant='subtle'
                                            size='lg'
                                            borderRadius='3xl' />
                                    </InputGroup>

                                </Center>
                            </VStack>
                        </Center>
                        <Box pb='2'>Bottom Section</Box>
                    </Stack>
                </Box>
            </Flex>

        </>
    )
}

export default App
