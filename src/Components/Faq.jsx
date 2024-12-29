import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';

export default function Faq() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { title: t('Faq.text'), content: t('Faq.text2') },
        { title: t('Faq.text3'), content: t('Faq.text4') },
        { title: t('Faq.text5'), content: t('Faq.text6') },
    ];

    return (
        <div id="faq" className='container'>
            <hr />
            <div className='flex justify-between max-lg:flex-col max-lg:justify-center items-start gap-[40px] max-lg:gap-[0px]'>
                <div className='text-[#020c31] text-[48px] font-[700] Unb mt-[20px]'>
                    <h1>{t('header.faq')}</h1>
                </div>
                <div className='max-w-[1100px]'>
                    {faqData.map((item, index) => (
                        <div key={index}>
                            <div
                                className='flex justify-between items-center cursor-pointer mt-[30px] mb-[30px]'
                                onClick={() => toggleSection(index)}
                            >
                                <h1 className='text-[#676d83] text-[24px] Unb font-[500] leading-[32px] max-md:text-[17px] max-md:leading-[20px]'>
                                    {item.title}
                                </h1>
                                <div
                                    className={`rounded-[50%] bg-[#f2f2f2] min-w-[50px] min-h-[50px] flex justify-center items-center transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                >
                                    <FaChevronDown className='text-[20px]' />
                                </div>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ${
                                    openIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <p className='mt-[30px] mb-[60px] max-lg:mt-[20px] max-lg:mb-[40px] max-md:mt-[10px] max-md:mb-[20px] text-[#676d83] text-[24px] font-[400] leading-[32px] max-md:text-[17px] max-md:leading-[20px]'>
                                    {item.content}
                                </p>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
