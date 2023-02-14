import React from 'react';
//@ts-ignorets-ignore
import style from './style.module.sass';

const MainPage: React.FC = () => {
  return (
    <div className='page'>
      <div className={style.mainWrapper}>
        <h1>You are welcome!</h1>
        <div className={style.userData}>
          <b>Success data to login</b>
          <p><b>username:</b> kminchelle</p>
          <p><b>password:</b> 0lelplR</p>
        </div>
      </div>
    </div>
  )
}
export default MainPage;