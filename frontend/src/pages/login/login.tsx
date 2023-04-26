import React from 'react'
import { LoginDataProps } from '@/protocols/login'
import { login } from '@/services/login'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const Login = () => {
  const navigate = useNavigate()

  const LoginSchema = Yup.object().shape({
    email: Yup
      .string()
      .email('O e-mail deve ser um endereço de e-mail válido')
      .required('E-mail é obrigatório'),
    password: Yup
      .string()
      .required('Senha é obrigatório')
  })

  const methods = useForm({
    resolver: yupResolver(LoginSchema)
  })

  const onSubmit = async (data: LoginDataProps): Promise<void> => {
    try {
      const response = await login(data.email, data.password)

      if (response.status == 200) {
        navigate('/notificaions')
      }
    } catch (error: any) {
      setError('afterSubmit', { ...(error as object), message: error.message })
    }
  }

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = methods

  return (
    <Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <Flex
        minH='100vh'
        align='center'
        justify='center'
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
          <Stack align='center'>
            <Text fontSize='2xl' fontWeight={600} color='gray.600'>
              Login
            </Text>
          </Stack>
          <Box
            rounded='lg'
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow='lg'
            p={8}>
            <Stack spacing={4}>
              {!!errors.afterSubmit && (
                <Alert status='error'>
                  <>
                    <AlertIcon />
                    Erro ao entrar
                  </>
                </Alert>
              )}

              <FormProvider
                {...methods}
              >
                <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
                  <Stack spacing={5}>
                    <Box>
                      <FormControl id='email' isInvalid={Boolean(errors?.email)}>
                        <FormLabel>E-mail</FormLabel>
                        <Input
                          type='email'
                          placeholder='E-mail'
                          {...register('email')}
                        />
                        <FormErrorMessage>
                          {errors?.email && String(errors?.email?.message)}
                        </FormErrorMessage>
                      </FormControl>
                    </Box>

                    <Box>
                      <FormControl id='password' isInvalid={Boolean(errors?.password)}>
                        <FormLabel>Senha</FormLabel>
                        <Input
                          type='password'
                          placeholder='Senha'
                          {...register('password')}
                        />
                        <FormErrorMessage>
                          {errors.password && String(errors.password.message)}
                        </FormErrorMessage>
                      </FormControl>
                    </Box>
                  </Stack>

                  <Stack spacing={7}>
                    <Stack
                      marginTop={5}
                      direction={{ base: 'column', sm: 'row' }}
                      align='start'
                      gap={{ base: 1, md: 8 }}
                      justify='space-between'
                    >
                      <Checkbox>Lembrar de mim</Checkbox>
                      <Link color='blue.400'>Esqueceu a senha?</Link>
                    </Stack>
                    <Button
                      isLoading={isSubmitting}
                      type='submit'
                      bg='blue.400'
                      color='white'
                      _hover={{
                        bg: 'blue.500'
                      }}
                    >
                      Entrar
                    </Button>
                  </Stack>
                </form>
              </FormProvider>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Login
