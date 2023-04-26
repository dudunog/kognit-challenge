import { LoginDataProps } from '@/protocols/login'

type LoginResult = {
  data: LoginSuccessResponse
  status: number
}

type LoginSuccessResponse = {
  email: string
  token: string
}

const login = async (email: string, password: string): Promise<LoginResult> => {
  return {
    data: {
      email,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    },
    status: 200
  }
}

export default login
