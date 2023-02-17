import axios from 'axios';
import { render } from '@testing-library/react'
import App from 'src/App'
import { useAuth, useGetUser } from 'src/hooks/useAuth'

const mockedUseGetUser = useGetUser as jest.Mock<any>;
const mockedUseAuth = useAuth as jest.Mock<any>;
const mockedAxiosGet = axios.get as jest.Mock<any>;

jest.mock("axios");
jest.mock("../hooks/useAuth");

describe("<App />", () => {
    beforeEach(() => {
        mockedUseGetUser.mockImplementation(() => ({ isLoading: true }));
        mockedUseAuth.mockImplementation(() => ({ isLoading: true }));
        mockedAxiosGet.mockImplementation(() => Promise.resolve({ data: {id: 1 }}));
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Renders without crashing", () => {
        render(<App />);
    });

    it("Displays loading message", () => {
        mockedUseGetUser.mockImplementation(() => ({
            status: 'loading',
        }));
    });
});