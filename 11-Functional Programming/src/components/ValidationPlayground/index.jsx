import React from 'react';
import InputWithValidation from './InputWithValidation';
import {
    validateFieldN1,
    validateFieldN2,
    validateFieldN3,
    validateFieldN4,
    validateFieldN5,
    validateFieldN6,
    validateFieldN7,
    validateFieldN8,
    validateFieldN9,
    validateFieldN10,
} from '../../helpers/validators';


import styles from './styles.module.css';


const ValidationPlayground = () => {
    return (
        <div className={styles.root}>
            <InputWithValidation validateFn={validateFieldN1} label="1. Длина < 5 и кол-во цифр > 2 шт."/>

            <InputWithValidation validateFn={validateFieldN2} label="2. Длина < 5 и кол-во цифр < 2 шт."/>

            <InputWithValidation validateFn={validateFieldN3} label="3. Длина > 5 или кол-во цифр > 1 шт."/>

            <InputWithValidation validateFn={validateFieldN4} label="4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна '4'"/>

            <InputWithValidation validateFn={validateFieldN5} label="5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна '4'"/>

            <InputWithValidation validateFn={validateFieldN6} label="6. Длина > 5, или одна из цифр равна '7'"/>

            <InputWithValidation validateFn={validateFieldN7} label="7. Длина > 8 и кол-во цифр > 3 шт. и только англ"/>

            <InputWithValidation validateFn={validateFieldN8} label="8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна '7'"/>

            <InputWithValidation validateFn={validateFieldN9} label="9. Длина < 8, кол-во цифр > 4 шт. только англ."/>

            <InputWithValidation validateFn={validateFieldN10} label="10. Длина < 4 или кол-во цифр > 2 шт. или только англ."/>
        </div>
    );
};


export default ValidationPlayground;
