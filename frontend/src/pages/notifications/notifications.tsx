import React from 'react'
import { Navbar } from '@/components'
import { Flex, useColorModeValue } from '@chakra-ui/react'

const Notifications: React.FC = () => {
  return (
    <>
      <Navbar />

      <Flex
        minH='100vh'
        align='center'
        justify='center'
        bg={useColorModeValue('gray.50', 'gray.800')}
      />
    </>
  )
}

export default Notifications
