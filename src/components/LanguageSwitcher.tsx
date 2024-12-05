import React from 'react';
import i18n from 'i18next';
import {Button} from "@/components/ui/button.tsx";

const LanguageSwitcher: React.FC = () => {

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
            .then(() => {
                console.log(`Language changed to ${lng}`);
            })
            .catch((err) => {
                console.error(`Failed to change language: ${err}`);
            });
    };

    return (
        <div className="text-white mt-[1rem] border-l border-r">
            <Button onClick={() => changeLanguage('en')}>EN</Button>
            <Button onClick={() => changeLanguage('ro')}>RO</Button>
            <Button onClick={() => changeLanguage('ru')}>RU</Button>
        </div>
    );
};

export default LanguageSwitcher;
