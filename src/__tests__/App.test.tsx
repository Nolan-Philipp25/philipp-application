import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import App from 'src/App'
import { useAuth, useGetUser } from 'src/hooks/useAuth'

const mockedUseGetUser = useGetUser as jest.Mock<any>
const mockedUseAuth = useAuth as jest.Mock<any>

jest.mock('../hooks/useAuth')

describe('<App />', () => {
  beforeEach(() => {
    mockedUseGetUser.mockImplementation(() => ({
      isLoading: true,
      data: {
        id: 15,
        firstName: 'Iron',
        lastName: 'Man',
        password: 'password',
        bloodType: '+G',
        image: 'htt:/localhost:8000',
      },
    }))
    mockedUseAuth.mockImplementation(() => ({ isLoading: true }))
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Is logged user name is rendered', () => {
    render(<App />)
    const linkElement = screen.getByText(/Iron Man/i)
    expect(linkElement).toBeInTheDocument()
  })
})
