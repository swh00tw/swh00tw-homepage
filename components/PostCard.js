import { Box, Flex, Tag, Button, Heading, useColorModeValue, Divider } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

function PostCard ({post}){

    const { id, url, createdAt, title, description} = post;

    const timeTag = new Date(createdAt)
    const year = timeTag.getFullYear();
    const month = (timeTag.getMonth() + 1).toString().padStart(2, '0');
    const day = timeTag.getDate().toString().padStart(2, '0');
    const timeTagString = `${year}-${month}-${day}`;

    return (
        <>
            <Flex w={{base: '80%', md: '90%'}} borderRadius='xl' justify='center' flexDirection={{base: 'column', md: 'row'}}>
                <Flex w={{base: '100%', md: '70%'}} flexDirection='column' justify='center' >
                    <Flex justifyContent={{base: 'center', md: 'start'}}>
                        <Heading fontFamily='Montserrat' fontWeight='700' fontSize={{base: 'lg', md: '2xl'}} isTruncated>{title}</Heading>
                    </Flex>
                    <Flex justifyContent={{base: 'center', md: 'start'}} pt={2}>
                        <Heading fontFamily='Montserrat' fontWeight='400' fontSize={{base: 'xs', md: 'sm'}} isTruncated>{description}</Heading>
                    </Flex>
                    <Flex justifyContent={{base: 'center', md: 'start'}} pt={0}>
                        <Tag borderRadius='full' mt={2} variant='solid' size='sm' colorScheme={useColorModeValue('yellow', 'teal')}>{timeTagString}</Tag>
                    </Flex>
                </Flex>
                <Flex w={{base: '100%', md: '30%'}} justify={{base: 'center', md: 'end'}} py={4}>
                    <Button rightIcon={<ChevronRightIcon/>} size='lg' onClick={()=>{window.open(url,"_blank")}} w={{base: '100%', md: '60%'}} _focus={{border: 'none'}}>Read</Button>
                </Flex>
            </Flex>
            <Divider w='90%' mt={3} mb={5}/>
        </>
    )
}

export default PostCard;