import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../IMG/DezLogo.png';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [nev, setNev] = useState(false);
  const menuRef = useRef(null);

  const changeLanguage = (lang) => {
    localStorage.setItem('lang', lang); // Tilni localStorage'ga saqlash
    i18n.changeLanguage(lang); // Tilni o'zgartirish
  };

  const handleMenuClick = () => {
    setNev(!nev);
  };
  const handleScrollToRegister = () => {
    const section = document.getElementById('register');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Tashqi klikni aniqlash
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNev(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className=' flex justify-center items-center bg-[#fff] w-full shadow-[0_0_10px_0px_#11001159] z-[98] top-0 fixed'>
      <div className='container'>
        <div className='flex justify-between items-center my-[20px]'>
          <div>
            <img className='max-md:min-w-[110px] max-md:h-[50px] max-lg:min-w-[200px] max-lg:h-[60px]  min-w-[250px] h-[70px]' src={logo} alt="Logo" />
          </div>
          <div className='flex justify-center items-center max-md:gap-[15px] gap-[40px]'>
            <div>
              <ul className='flex gap-5 max-lg:gap-3 max-lg:text-[16px] justify-center items-center text-[18px] font-[500] text-[#00000098]'>
                <a href='' className='cursor-pointer max-lg:hidden'>{t('header.main')}</a>
                <a href="#aboute" className='cursor-pointer max-lg:hidden'>{t('header.about')}</a>
                <a href="#services" className='cursor-pointer max-lg:hidden'>{t('header.services')}</a>
                <a href="#faq" className='cursor-pointer max-lg:hidden'>{t('header.faq')}</a>
                <select className='max-md:p-[2px_2px] max-md:text-[14px] border-[2px] border-[#0000007a] p-[5px_7px] rounded-[10px]' onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
                  <option value="uz">Ўзбекча</option>
                  <option value="ru">Русский</option>
                </select>
                <a href="#register">
                  <button className='max-lg:hidden Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500]'>{t('header.contact')}</button>
                </a>
              </ul>
            </div>
            <div onClick={handleMenuClick} className='hidden max-lg:flex'>
              <FiMenu className='text-[30px] max-md:text-[20px]' />
            </div>
          </div>
          <div
            ref={menuRef}
            className={nev ? 'z-[99] fixed top-0 right-0 w-[40%] max-md:w-[50%] h-full bg-[#fff] shadow-[0_0_10px_5px_#11001159] p-10 max-md:p-4 ease-in-out duration-500' : 'fixed w-[40%] h-full top-0 right-[-100%] ease-in duration-500 p-10 z-[99]'}
          >
            <ul className='flex flex-col gap-5 text-[25px] text-[#00000098] max-md:text-[20px] font-[600]'>
              <div className='w-full flex justify-end items-center font-[600] text-[35px]'>
                <IoMdClose onClick={handleMenuClick} />
              </div>
              <li className='mt-[40px]' onClick={handleMenuClick}>{t('header.main')}</li>
              <li onClick={handleMenuClick}>{t('header.about')}</li>
              <li onClick={handleMenuClick}>{t('header.services')}</li>
              <li className='mb-[40px]' onClick={handleMenuClick}>{t('header.faq')}</li>
            </ul>
            <a href="#register">
              <button onClick={handleScrollToRegister} className='Unb bg-[#2137FB] text-[#fff] p-[10px_25px] w-[200px] h-[60px] rounded-[25px] text-[20px] font-[500] max-md:w-[150px] max-md:text-[15px]'>{t('header.contact')}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
