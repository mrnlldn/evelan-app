import React, { FunctionComponent } from 'react'
import { Avatar, Box, Center, Text, useColorModeValue } from '@chakra-ui/react'
import BaseAvatar from '../avatar'

export interface CardProps {
  email: string
  name: string
  id: number
  link: string
}

const Card: FunctionComponent<CardProps> = ({ id, email, name, link }) => {
  return (
    <Center py={6}>
      <Box
        w={'full'}
        minW="300px"
        bg={useColorModeValue('white', 'gray.900')}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <BaseAvatar link={link} />
        <Text fontSize={'3xl'} mb={4}>
          {id}
        </Text>
        <Text fontSize={'3xl'} fontFamily={'body'}>
          {email}
        </Text>
        <Text fontSize={'3xl'} mb={4}>
          {name}
        </Text>
      </Box>
    </Center>
  )
}

export default Card
