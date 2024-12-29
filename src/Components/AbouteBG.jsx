import React from 'react'
import { useTranslation } from 'react-i18next';

export default function AbouteBG() {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className='Unb w-full h-[600px] bgImg mt-[80px] mb-[100px] p-[30px_25px] max-md:p-[10px_10px]'>
                <div className='flex justify-end items-end w-full max-lg:justify-start '>
                    <div className='flex flex-col justify-center items-start max-lg:justify-start  max-md:ml-[0px]'>
                        <h1 className='animate__bounceInRight animate__animated max-md:text-[25px] max-md:leading-[30px] max-w-[558px]  font-[700] text-[40px] mb-[20px] leading-[48px] text-[#fafafa]'>{t("abouteBG.text")}</h1>
                        <p className='animate__bounceInRight animate__animated max-md:text-[16px] max-md:leading-[24px] max-w-[310px] leading-[24px] text-[#FFF] text-[16px] mb-[60px]'>{t("abouteBG.text2")}</p>
                        <a href="#register">
                            <button className='animate__bounceInRight animate__animated Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500] max-md:w-[150px] max-md:text-[15px]'>{t('header.contact')}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
