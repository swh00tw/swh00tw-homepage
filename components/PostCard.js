import { Box, Flex, Tag, Button, Heading, useColorModeValue, Divider } from '@chakra-ui/react'
import useAllColorModeValues from '../data/color';

function PostCard ({post}){

    const {
        normalFontColor, 
        themeColor, 
        bgColor, 
        BoxColor, 
        starColor, 
        tagColor
      } = useAllColorModeValues();

    const postDate = post.pubDate.split(" ")[0];

    return (
        <Box px={3} py={10} borderRadius='3xl' bg={BoxColor} w={{base: '100%', md: '80%'}}>
            <Flex w={{base: '80%', md: '90%'}} borderRadius='xl' justify='center' flexDirection={{base: 'column', md: 'row'}}>
                <Flex w={{base: '100%', md: '70%'}} flexDirection='column' justify='center' >
                    <Heading fontSize={{base: 'sm', md: 'md'}} align='start' isTruncated>{post.title}</Heading>
                    <Flex justifyContent={{base: 'center', md: 'start'}} pt={2}>
                        <Tag borderRadius='full' mt={2} variant='solid' size='sm' colorScheme={useColorModeValue('yellow', 'teal')}>{postDate}</Tag>
                    </Flex>
                </Flex>
                <Flex w={{base: '100%', md: '30%'}} justify={{base: 'center', md: 'end'}} py={4}>
                    <Button size='lg' onClick={()=>{window.open(post.link,"_blank")}} w={{base: '100%', md: '60%'}}>Read</Button>
                </Flex>
            </Flex>
            <Divider w='90%' mt={5}/>
        </Box>
    )
}

export default PostCard;