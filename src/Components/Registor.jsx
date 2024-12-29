import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '../IMG/RuyxatBg.png';

export default function Registor() {
    const { t } = useTranslation();
    return (
        <div id="register" className="container mb-[80px] mt-[120px]">
            <div className="bgColor w-full h-auto rounded-[12px] flex justify-evenly items-center p-[20px]">
                <div className="flex flex-col justify-start items-end gap-[40px] max-w-[456px] min-h-[385px] bg-white rounded-[8px] p-[20px] shadow-lg">
                    <h1 className="text-[#020c31] text-[32px] max-md:text-[22px] Unb font-[700]">{t('register.text')}</h1>
                    <div className='flex flex-col gap-[20px] w-full'>
                        <input
                            type="text"
                            placeholder={t('register.text2')}
                            className="bg-[#F2F2F2] w-full h-[50px] rounded-[8px] px-[10px] border focus:outline-none focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                        />
                        <input
                            type="text"
                            placeholder="+998-99-999-99-99"
                            className="bg-[#F2F2F2] w-full h-[50px] rounded-[8px] px-[10px] border focus:outline-none focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                        />
                    </div>
                    <button className="bg-[#000000] text-white w-full h-[50px] rounded-[8px] hover:bg-[#333333] transition-colors">
                        {t('register.text3')}
                    </button>
                </div>
                <div className="w-full md:w-auto  mb-[-20px] max-lg:hidden">
                    <img
                        src={img}
                        alt="Background"
                        className="w-full max-w-[500px] h-auto rounded-[12px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
