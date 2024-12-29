import React from 'react'
import { useTranslation } from 'react-i18next';
import bgimg from '../IMG/MainBg.jpg';
import img from '../IMG/MainImg.png';


export default function Main() {
  const { t } = useTranslation();
  return (
    <div className='container flex justify-between items-center mt-[130px] relative'>
      <div className=' max-lg:p-6 max-md:p-2'>
        <h1 className='animate__animated animate__bounceInLeft max-w-[650px] max-md:max-w-[400px] text-[70px] font-[500] text-[#093fb3] Unb leading-[80px] max-lg:text-[#fff] max-md:text-[55px] max-md:leading-[60px] max-sm:leading-[40px] max-sm:text-[30px]'>{t('main.text')}</h1>
        <div className='flex justify-between items-center mt-[50px] max-md:mt-[30px]'>
          <p className='animate__animated animate__bounceInLeft max-w-[400px] font-[400] text-[20px] text-[#272121] max-lg:text-[#fff] max-md:text-[15px]'>
            {t('main.text2')}</p>
          <img src={img} alt="" className='max-lg:hidden absolute left-[25%] top-[30%] scale-[.8] z-[-2] block' />
        </div>
        <a href="#register">
          <button className='animate__animated animate__bounceInLeft max-lg:mt-[50px] mt-[150px] Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500] max-md:w-[150px] max-md:h-[50px] max-md:text-[15px] max-md:p-[5px_15px] '>{t('header.contact')}</button>
        </a>
      </div>
      <div className='container max-w-[750px] h-[700px] max-md:h-[450px] max-lg:h-[550px] max-lg:min-w-full max-lg:z-[-1] max-lg:absolute max-lg:top-[50%] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:translate-y-[-50%]'>
        <img src={bgimg} alt="" className='w-full h-full object-cover rounded-[10px] ' />
      </div>
    </div>
  )
}
