import React from 'react';
//@ts-ignorets-ignore
import image from '../../common/images/not_found.webp';
//@ts-ignorets-ignore
import style from './style.module.sass';

const NotFound: React.FC = () => {
  return (
    <div className='page'>
      <div className={style.wrapperImage}>
        <img className={style.image} src={image}></img>
      </div>
    </div>
  )
}
export default NotFound;