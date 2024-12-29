import React from 'react'
import img from '../IMG/GarantBg.jpg'
import logo from '../IMG/GarantLogo.svg'
import { useTranslation } from 'react-i18next'

export default function Assurance() {
    const { t } = useTranslation();
    return (
        <div className='container mt-[130px] mb-[100px]'>
            <div className='w-full max-h-[585px] bgCol rounded-[16px] p-[30px_25px] max-md:p-[10px_10px] flex justify-evenly items-center'>
                <div className='animate__bounceInLeft animate__animated max-w-[528px] max-h-[510px]  '>
                    <img src={img} alt="" className='max-sm:hidden max-w-full min-h-full object-cover rounded-[16px]' />
                </div>
                <div className='ml-[40px] max-sm:ml-[0px]'>
                    <img src={logo} alt="" className='animate__bounceInLeft animate__animated' />
                    <p className='animate__bounceInLeft animate__animated max-w-[643px] text-[#fafafa] text-[32px] Unb leading-[48px] font-[700] mt-[12px] max-lg:mb-[30px] mb-[50px] max-lg:text-[22px] max-lg:leading-[30px] max-md:text-[16px] max-md:leading-[20px] '>{t('garant.text')}</p>
                    <a href="#register">
                        <button className='animate__bounceInLeft animate__animated Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500] max-md:w-[120px] max-md:h-[40px] max-md:p-[5px_15px] max-md:rounded-[10px]  max-md:text-[15px]'>
                            {t('header.contact')}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
