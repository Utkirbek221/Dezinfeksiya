import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import img from '../IMG/RuyxatBg.png';

export default function Register() {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const formatPhoneNumber = (value) => {
        value = value.replace(/\D/g, ''); // Remove non-digit characters
        if (value.length > 9) {
            value = value.slice(0, 9);
        }
        const formatted = value.replace(
            /(\d{2})(\d{3})(\d{2})(\d{2})/,
            (match, p1, p2, p3, p4) => `${p1}-${p2}-${p3}-${p4}`
        );
        return formatted;
    };

    const sendDataToTelegram = async () => {
        setError('');
        setSuccess('');

        if (!name || phone.length !== 12) { // 12 includes 9 digits + 3 dashes
            setError(t('register.error')); // "Ma'lumot to'ldirilmagan yoki telefon raqami noto'g'ri"
            return;
        }

        const chatId = '1005236949';
        const token = '7426048487:AAEHujQ0BJjkJ0nZoLg4KOEE94EbrIdOSCU';
        const message = `Ismi: ${name}\nTelefon raqami: +998${phone.replace(/-/g, '')}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });

            if (response.ok) {
                setSuccess(t('register.success')); // "Ma'lumot yuborildi"
                setName('');
                setPhone('');
            } else {
                setError(t('register.fail')); // "Ma'lumot yuborishda xatolik"
            }
        } catch (error) {
            setError(t('register.fail')); // "Ma'lumot yuborishda xatolik"
            console.error(error);
        }
    };

    return (
        <div id="register" className="container mb-[80px] mt-[120px]">
            <div className="bgColor w-full h-auto rounded-[12px] flex justify-evenly items-center p-[20px]">
                <div className="flex flex-col justify-start items-end gap-[40px] max-w-[456px] min-h-[385px] bg-white rounded-[8px] p-[20px] shadow-lg">
                    <h1 className="text-[#020c31] text-[32px] max-md:text-[22px] Unb font-[700]">
                        {t('register.text')}
                    </h1>
                    <div className='flex flex-col gap-[20px] w-full'>
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                        <input
                            type="text"
                            placeholder={t('register.text2')}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-[#F2F2F2] w-full h-[50px] rounded-[8px] px-[10px] border focus:outline-none focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                        />
                        <div className="relative">
                            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600">+998</span>
                            <input
                                type="text"
                                placeholder="99-999-99-99"
                                value={phone}
                                onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                                className="bg-[#F2F2F2] w-full h-[50px] pl-[50px] rounded-[8px] px-[10px] border focus:outline-none focus:ring-2 focus:ring-[#000000] focus:border-transparent"
                            />
                        </div>
                    </div>
                    <button
                        onClick={sendDataToTelegram}
                        className="bg-[#000000] text-white w-full h-[50px] rounded-[8px] hover:bg-[#333333] transition-colors"
                    >
                        {t('register.text3')}
                    </button>
                </div>
                <div className="w-full md:w-auto mb-[-20px] max-lg:hidden">
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
