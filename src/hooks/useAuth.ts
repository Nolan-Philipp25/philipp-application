import { useMutation, useQuery } from 'react-query'
import { post, get } from '../services/api.service'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
    const navigate = useNavigate()
    const { isLoading, mutateAsync, status, data } = useMutation(
        (values) => post('/auth/login', values),
        {
            onSuccess: (info) => {
                console.log('onSuccess', info.data)
                localStorage.setItem('user', JSON.stringify(info.data))
                navigate('/')
            },
            onError: (e) => {
                console.log('onError', e)
            },
        }
    )
    return { isLoading, mutateAsync, status, data }
}

export const useGetUser = () => {
    const item = localStorage.getItem('user')
    const user: any = item ? JSON.parse(item) : null
    const userId = user ? user?.id : false
    return useQuery(['user', userId], () => {
        if (userId) {
            return get(`/users/${userId}`).then((data) => data.data)
        }
        return null
    })
}
