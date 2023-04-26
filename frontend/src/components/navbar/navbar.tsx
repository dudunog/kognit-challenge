import React, { memo } from 'react'
import { NotificationsMenu } from '@/components'
import { Link } from 'react-router-dom'
import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

const Navbar: React.FC = () => {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <Link to='/home'>
            <Box>Translation</Box>
          </Link>

          <Flex alignItems='center'>
            <NotificationsMenu />
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default memo(Navbar)
