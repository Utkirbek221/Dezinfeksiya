import React from 'react'
import { useTranslation } from 'react-i18next'
import img from '../IMG/Hizmat.png'
import img2 from '../IMG/Hizmat2.png'
import img3 from '../IMG/Hizmat3.png'


export default function Services() {
  const { t } = useTranslation();
  return (
    <div id="services" className='container  mb-[100px]'>
        <div>
            <h1 className='animate__shakeX animate__animated Unb text-[#020c31] text-[52px] max-md:text-[35px] font-[700] mb-[16px]'>{t('services.text')}</h1>
            <p className='animate__shakeX animate__animated mb-[60px] text-[#666] text-[18px] font-[400] max-w-[340px] leading-[24px]'>{t('services.text2')}</p>
            <div className='flex flex-col justify-center items-center'>
                <div className='animate__bounceInLeft animate__animated w-full flex max-lg:flex-col  justify-evenly items-center border-[2px] border-[#020c315d] rounded-[20px] p-[20px_10px] max-md:p-2 mb-[30px]'>
                    <img className='w-[300px] h-[300px] max-lg:mb-[30px] max-md:w-[200px] max-md:h-[200px]' src={img} alt="" />
                    <div className='max-w-[900px] ml-[20px]'>
                        <h1 className='text-[#020c31]  Unb text-[26px] max-md:text-[18px] max-md:leading-5 font-[700]'>{t('services.text3')}</h1>
                        <p className='text-[#495157] text-[16px] Unb mt-[20px] font-[400] max-md:text-[14px] leading-[normal]'>{t('services.text4')}</p>
                    </div>
                </div>
                <div className='animate__bounceInLeft animate__animated w-full flex max-lg:flex-col  justify-evenly items-center border-[2px] border-[#020c315d] rounded-[20px] p-[20px_10px] max-md:p-2 mb-[30px]'>
                    <img className='w-[300px] h-[300px] max-lg:mb-[30px] max-md:w-[200px] max-md:h-[200px]' src={img2} alt="" />
                    <div className='max-w-[900px] ml-[20px]'>
                        <h1 className='text-[#020c31] Unb text-[26px] max-md:text-[18px] max-md:leading-5 font-[700]'>{t('services.text5')}</h1>
                        <p className='text-[#495157] text-[16px] Unb mt-[20px] font-[400] max-md:text-[14px] leading-[normal]'>{t('services.text6')}</p>
                    </div>
                </div>
                <div className='animate__bounceInLeft animate__animated w-full flex max-lg:flex-col  justify-evenly items-center border-[2px] border-[#020c315d] rounded-[20px] p-[20px_10px] max-md:p-2 mb-[30px]'>
                    <img className='w-[300px] h-[300px] max-lg:mb-[30px] max-md:w-[200px] max-md:h-[200px]' src={img3} alt="" />
                    <div className='max-w-[900px] ml-[20px]'>
                        <h1 className='text-[#020c31] Unb text-[26px] max-md:text-[18px] max-md:leading-5 font-[700]'>{t('services.text7')}</h1>
                        <p className='text-[#495157] text-[16px] Unb mt-[20px] font-[400] max-md:text-[14px] leading-[normal]'>{t('services.text8')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
