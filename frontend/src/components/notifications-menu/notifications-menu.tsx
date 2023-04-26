import React, { useEffect, useState } from 'react'
import { Loader } from '@/components'
import { fetchNotifications } from '@/services/notifications'
import { BellIcon, SmallCloseIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Text
} from '@chakra-ui/react'

const NotificationsMenu: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [notifications, setNotifications] = useState<any[]>([])

  const handleCleanAllNotifications = (): void => {
    setNotifications([])
  }

  const handleCleanNotification = (id: string): void => {
    setNotifications([
      ...notifications.filter(notification => notification.id != id)
    ])
  }

  const handleLoadNotifications = async (): Promise<void> => {
    setIsLoading(true)
    const { data, status } = await fetchNotifications()
    // data[0].title
    if (status === 200) {
      setNotifications(data)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    handleLoadNotifications()
  }, [])

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        cursor='pointer'
        minW={0}
      >
        <IconButton
          icon={<BellIcon />}
          aria-label='Abrir notificações'
        />
      </MenuButton>
      <MenuList p={5}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              gap={20}
              flexDir='row'
            >
              <Text>Editar Notificações</Text>
              <Button
                onClick={handleCleanAllNotifications}
              >
                Limpar
              </Button>
            </Box>
            <MenuDivider />
            <Box
              height='600px'
              overflowX='scroll'
              paddingRight='15px'
              sx={{
                '&::-webkit-scrollbar': {
                  width: '3px',
                  height: '10px'
                },
                '&::-webkit-scrollbar-track': {
                  width: '3px'
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'gray.400',
                  borderRadius: '20px'
                }
              }}
            >
              {notifications?.length ? (
                notifications.map((notification) => {
                  return (
                    <>
                      <Box textAlign='start' display='flex' flexDir='column'>
                        <Text fontWeight={500} align='start' width='30rem'>
                          {notification.title}
                        </Text>
                        <Box display='flex' flexDir='row' gap={20}>
                          <Text
                            wordBreak='break-all'
                            width='28rem'
                          >
                            {notification.body}
                          </Text>
                          <IconButton
                            icon={<SmallCloseIcon />}
                            rounded='full'
                            onClick={() => handleCleanNotification(notification?.id)}
                            aria-label='Abrir notificações'
                          >
                          </IconButton>
                        </Box>
                      </Box>
                      <MenuDivider />
                    </>
                  )
                })
              ): 'Não há notificações'}
            </Box>
          </>
        )}
      </MenuList>
    </Menu>
  )
}

export default NotificationsMenu
