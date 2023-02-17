import '@testing-library/jest-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from 'react-query'
import { fireEvent, render, screen } from '@testing-library/react'
import FormPage from 'src/pages/Login'
import { act } from 'react-test-renderer'
// import Form from 'src/components/Form'

const mockedUseNavigate = useNavigate as jest.Mock<any>

jest.mock('react-router-dom')

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

// const mockedAxiosGet = axios.get as jest.Mock<any>
const mockedAxiosPost = axios.post as jest.Mock<any>
// const mockedUseGetUser = useGetUser as jest.Mock<any>

jest.mock('axios')
describe('<Login> page', () => {
  beforeEach(() => {
    mockedUseNavigate.mockImplementation(() => () => null)
    mockedAxiosPost.mockImplementation(() => {
      return Promise.resolve({
        data: {
          id: 15,
          username: 'kolobok',
          firstName: 'Iron',
          lastName: 'Man',
          password: 'password',
          bloodType: '+G',
          image: 'htt:/localhost:8000',
        },
      })
    })
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Try to user login', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FormPage />
      </QueryClientProvider>
    )
    const sb = await screen.findByText('Submit')
    await act(async () => {
      fireEvent.click(sb)
    })

    const user = JSON.parse(localStorage.getItem('user') || '{}')
    expect(user?.password).toBe('password')
    expect(user?.username).toBe('kolobok')
  })
})
