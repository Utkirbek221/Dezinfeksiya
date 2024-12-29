import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '../IMG/Klopi.jpg';
import img2 from '../IMG/Tarakanjpg.jpg';
import img3 from '../IMG/Skarpion.jpg';
import img4 from '../IMG/Sichqon.jpg';
import img5 from '../IMG/Burgalar.jpg';

export default function TypeOfService() {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div>
                <h1 className='text-[#020c31] text-[52px] font-[700] leading-[64px] mb-[16px] Unb'>
                    {t('typeOfService.text')}
                </h1>
            </div>
            <div className='flex flex-wrap w-full justify-start gap-4 mt-[50px] '>
                {/* Xizmat kartasi 1 */}
                <div className='animate__bounceInLeft animate__animated w-full md:w-[48%] lg:w-[30%] min-h-[450px] rounded-[12px] bg-[#F3F6F6] p-[20px] relative'>
                    <h1 className='text-[#020c31] text-[32px] max-md:text-[22px] Unb font-[700]' >{t('typeOfService.nom')}</h1>
                    <p className='text-[#495157] text-[16px] Unb leading-[normal] mt-[20px]'>{t('typeOfService.nomInfo')}</p>
                    <div className='flex items-end justify-end absolute bottom-5 right-5'>
                        <div className='w-[130px] h-[130px] rounded-[50%] overflow-hidden absolute z-10'>
                            <img src={img} alt="" className='w-full h-full ' />
                        </div>
                        <a href="#register">
                            <button className='Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500] max-md:w-[150px] max-md:text-[15px]'>
                                {t('header.contact')}
                            </button>
                        </a>
                    </div>
                </div>

                {/* Xizmat kartasi 2 */}
                <div className='animate__bounceInLeft animate__animated w-full md:w-[48%] lg:w-[30%] min-h-[450px] rounded-[12px] bg-[#F3F6F6] p-[20px] relative'>
                    <h1 className='text-[#020c31] text-[32px] max-md:text-[22px] Unb font-[700]' >{t('typeOfService.nom2')}</h1>
                    <p className='text-[#495157] text-[16px] Unb leading-[normal] mt-[20px]'>{t('typeOfService.nomInfo2')}</p>
                    <div className='flex items-end justify-end absolute bottom-5 right-5'>
                        <div className='w-[130px] h-[130px] rounded-[50%] overflow-hidden absolute z-10'>
                            <img src={img2} alt="" className='w-full h-full ' />
                        </div>
                        <a href="#register">
                            <button className='Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500] max-md:w-[150px] max-md:text-[15px]'>
                                {t('header.contact')}
                            </button>
                        </a>
                    </div>
                </div>

                {/* Xizmat kartasi 3 */}
                <div className='animate__bounceInLeft animate__animated w-full md:w-[48%] lg:w-[30%] min-h-[450px] rounded-[12px] bg-[#F3F6F6] p-[20px] relative'>
                    <h1 className='text-[#020c31] text-[32px] max-md:text-[22px] Unb font-[700]' >{t('typeOfService.nom3')}</h1>
                    <p className='text-[#495157] text-[16px] Unb leading-[normal] mt-[20px]'>{t('typeOfService.nomInfo3')}</p>
                    <div className='flex items-end justify-end absolute bottom-5 right-5'>
                        <div className='w-[130px] h-[130px] rounded-[50%] overflow-hidden absolute z-10'>
                            <img src={img3} alt="" className='w-full h-full ' />
                        </div>
                        <a href="#register">
                            <button className='Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500] max-md:w-[150px] max-md:text-[15px]'>
                                {t('header.contact')}
                            </button>
                        </a>
                    </div>
                </div>

                {/* Xizmat kartasi 4 */}
                <div className='animate__bounceInLeft animate__animated w-full md:w-[48%] lg:w-[30%] min-h-[450px] rounded-[12px] bg-[#F3F6F6] p-[20px] relative'>
                    <h1 className='text-[#020c31] text-[32px] max-md:text-[22px] Unb font-[700]' >{t('typeOfService.nom4')}</h1>
                    <p className='text-[#495157] text-[16px] Unb leading-[normal] mt-[20px]'>{t('typeOfService.nomInfo4')}</p>
                    <div className='flex items-end justify-end absolute bottom-5 right-5'>
                        <div className='w-[130px] h-[130px] rounded-[50%] overflow-hidden absolute z-10'>
                            <img src={img4} alt="" className='w-full h-full ' />
                        </div>
                        <a href="#register">
                            <button className='Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500] max-md:w-[150px] max-md:text-[15px]'>
                                {t('header.contact')}
                            </button>
                        </a>
                    </div>
                </div>

                {/* Xizmat kartasi 5 */}
                <div className='animate__bounceInLeft animate__animated w-full md:w-[48%] lg:w-[30%] min-h-[450px] rounded-[12px] bg-[#F3F6F6] p-[20px] relative'>
                    <h1 className='text-[#020c31] text-[32px] max-md:text-[22px] Unb font-[700]' >{t('typeOfService.nom5')}</h1>
                    <p className='text-[#495157] text-[16px] Unb leading-[normal] mt-[20px]'>{t('typeOfService.nomInfo5')}</p>
                    <div className='flex items-end justify-end absolute bottom-5 right-5'>
                        <div className='w-[130px] h-[130px] rounded-[50%] overflow-hidden absolute z-10'>
                            <img src={img5} alt="" className='w-full h-full ' />
                        </div>
                        <a href="#register">
                            <button className='Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500] max-md:w-[150px] max-md:text-[15px]'>
                                {t('header.contact')}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
