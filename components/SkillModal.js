import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    useColorModeValue,
    Text,
    Flex,
    Heading,
    Divider,
  } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { InfoIcon } from '@chakra-ui/icons'
import { hash_to_color_hex } from '../utils/colorAgent';
import useAllColorModeValues from '../data/color';
import {useState, useEffect} from 'react';

function SkillTag({dragRef, infoObject, whileClick, color}) {
  const tagSizeMappingTable = {
    "Beginner": "sm",
    "Intermediate": "md",
    "Experienced": "lg",
  }
  const tagSize = tagSizeMappingTable[infoObject.level]

  const [variants, setVariants] = useState({
    visible: {opacity: 0, x: 0, y: 0},
    initial_state: { opacity: 0, x: 0, y: 0 },
  });

  useEffect(()=>{
    const offset_x = Math.random()*100;
    const offset_y = Math.random()*100;

    const positive_x = Math.random() > 0.5 ? 1 : -1;
    const positive_y = 1;

    const dest_x = positive_x*offset_x;
    const dest_y = positive_y*offset_y;

    setVariants({
      visible: {opacity: 1, x: dest_x, y: dest_y},
      initial_state: { opacity: 0, x: Math.random()*100, y: Math.random()*100 },
    })
  },[])

  return (
      <motion.div 
        drag 
        dragConstraints={dragRef} 
        dragMomentum={false}
        style={{display: 'inline-block'}}
        variants={variants}
        initial="initial_state"
        animate="visible"
        transition={{duration: 1.5}}
      >
        <Button color={color} colorScheme='whiteAlpha' variant='solid' size={tagSize}>{infoObject.name}<InfoIcon ml={2} onClick={whileClick}/></Button>
      </motion.div>
  );
}

function SkillModal({ dragRef, infoObject, index}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const lightColor = hash_to_color_hex(infoObject.name, 0.3);
    const darkColor = hash_to_color_hex(infoObject.name, 0.7);
    const color = useColorModeValue(lightColor, darkColor);
    const {themeColor} = useAllColorModeValues();

    const experienceIcon = useColorModeValue('🔥','🌟')
    const experienceMappingTable = {
      'Beginner': experienceIcon, 
      'Intermediate': experienceIcon+experienceIcon, 
      'Experienced': experienceIcon+experienceIcon+experienceIcon
    }

    const ts_now = new Date().getTime()/1000;
    const months =  Math.floor((ts_now-infoObject.ts) / 2628000);
    const years = Math.floor(months/12);

    return (
      <>
        <SkillTag 
          dragRef={dragRef} 
          infoObject={infoObject} 
          whileClick={onOpen}
          color={color}
          index={index}
        />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {infoObject.name}
              <Button ml='5%' autoFocus={false} _focus={{outline: 'none'}}>
                <Text onClick={()=>{window.open(infoObject.ref,"_blank")}} isTruncated fontSize="sm" fontFamily='Montserrat'>Learn more</Text>
              </Button>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Heading size='md' my={1} color={themeColor}>Description:</Heading>
                <Text fontFamily='Montserrat' fontSize='sm' my={2}>{infoObject.description}</Text>
                <Flex flexDirection='row'>
                  
                    <Stat>
                      <StatLabel color={themeColor}>Level</StatLabel>
                      <StatNumber mb={1}>{experienceMappingTable[infoObject.level]}</StatNumber>
                      <StatHelpText>
                        Beginner: {experienceMappingTable['Beginner']}<br/> 
                        Intermediate: {experienceMappingTable['Intermediate']}<br/> 
                        Experienced: {experienceMappingTable['Experienced']}
                      </StatHelpText>
                    </Stat>

                    <Stat>
                      <StatLabel color={themeColor}>Experience</StatLabel>
                      <StatNumber mb={1}>{months+1}</StatNumber>
                      <StatHelpText>
                        months
                      </StatHelpText>
                    </Stat>
                  
                </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default SkillModal;