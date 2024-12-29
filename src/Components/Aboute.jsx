import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsLightning } from 'react-icons/bs';
import { MdOutlineHandshake } from 'react-icons/md';
import { PiMedalDuotone } from 'react-icons/pi';

export default function Aboute() {
    const { t } = useTranslation();
    return (
        <div id="aboute" className='container mt-[100px] Unb '>
            <h1  className='animate__lightSpeedInRight animate__animated text-[#020c31] mb-[32px] text-[40px] font-[700]'>{t('aboute.text')}</h1>
            <hr className='bg-[#CCC] w-full'/>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2  lg:grid-cols-3  justify-between items-center mt-[32px]'>
                <div className='animate__animated animate__bounceInLeft max-w-[360px] max-lg:min-w-full max-lg:min-h-[400px] max-md:min-h-[250px] max-md:min-w-full max-lg:border-[2px] border-[#cccccc93] p-4 rounded-[15px]'>
                    <BsLightning className='text-[#1c4cf7] text-[60px] mb-[20px]'/>
                    <h1 className='text-[#020c31] text-[24px] max-md:text-[17px] max-md:leading-5 font-[600] leading-[32px] mb-[20px]'>{t('aboute.text2')}</h1>
                    <p className='text-[#676d83] max-w-[300px] max-md:min-w-full text-[16px] leading-[24px] font-[400]'>{t('aboute.p')}</p>
                </div>
                <div className='animate__animated animate__bounceInLeft max-w-[360px] max-lg:min-w-full max-lg:min-h-[400px] max-md:min-h-[250px] max-md:min-w-full max-lg:border-[2px] border-[#cccccc93] p-4 rounded-[15px]'>
                    <PiMedalDuotone className='text-[#1c4cf7] text-[60px] mb-[20px]'/>
                    <h1 className='text-[#020c31] text-[24px] max-md:text-[17px] max-md:leading-5 font-[600] leading-[32px] mb-[20px]'>{t('aboute.text3')}</h1>
                    <p className='text-[#676d83] max-w-[300px] max-md:min-w-full text-[16px] leading-[24px] font-[400]'>{t('aboute.p2')}</p>
                </div>
                <div className='animate__animated animate__bounceInLeft max-w-[360px] max-lg:min-w-full max-lg:min-h-[400px] max-md:min-h-[250px] max-md:min-w-full max-lg:border-[2px] border-[#cccccc93] p-4 rounded-[15px]'>
                    <MdOutlineHandshake className='text-[#1c4cf7] text-[60px] mb-[20px]'/>
                    <h1 className='text-[#020c31] text-[24px] max-md:text-[17px] max-md:leading-5 font-[600] leading-[32px] mb-[20px]'>{t('aboute.text4')}</h1>
                    <p className='text-[#676d83] max-w-[300px] max-md:min-w-full text-[16px] leading-[24px] font-[400]'>{t('aboute.p3')}</p>
                </div>
            </div>
        </div>
    )
}
