import React,{useState} from 'react'
import Form from '../../components/Form/index';
//@ts-ignorets-ignore
import style from './style.module.sass';
//@ts-ignorets-ignore
import image from '../../common/images/login_main.webp';
import {useAuth} from '../../hooks/useAuth';

function LoginPage() {

//@ts-ignorets-ignore
const [dataForm,setDataForm ] = useState({username:'',password:''});
//@ts-ignorets-ignore
const {isLoading,mutateAsync} = useAuth();


//@ts-ignorets-ignore
  const handler = async(values)=>{
    setDataForm(values);
    await mutateAsync( values )
  }

  return (
    <div className='page'>
      <img className={style.loginImage} src={image}></img>
      <div className={style.loginWrapper}>
        <Form handler={handler}/>
      </div>
    </div>
  )
}
export default LoginPage;