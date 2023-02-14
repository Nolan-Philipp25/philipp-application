import { useMutation} from 'react-query';
import {post} from '../services/api.service';
import {FAKE_API} from '../constants';

export const useAuth = () =>{
    //@ts-ignorets-ignore
     const { isLoading, mutateAsync } = useMutation('userData',( values ) => post( FAKE_API, values ), {
        onSuccess: data => {
          console.log('mutateAsync',data);
        },
        onError: () => {
          alert("there was an error")
        }
      });
      return {isLoading, mutateAsync }
}