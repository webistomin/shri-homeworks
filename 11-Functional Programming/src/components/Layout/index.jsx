import React from 'react';

import TaskWrapper from '../TaskWrapper';
import HocsPlayground from '../HocsPlayground'
import ValidationPlayground from '../ValidationPlayground'
import MomentumPlayground from '../MomentumPlayground'
import styles from './styles.module.css';


const Layout = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>
                Домашняя работа по теме "Функциональное программирование" в рамках порграммы ШРИ 2019.
            </h1>

            <p>
            Для решения используйте Ramda или любые другие библиотеки. Ramda, lodash и recompose уже добавлены в package.json
            Оставьте файловую структуру и интерфейс функций без изменений. Это поможет нам быстрее проверить работу.
            Максимально используйте функциональное программирование!
            </p>

            <TaskWrapper 
                title="Функции валидации для полей ввода"
                description={`Добавьте в src/helpers/validators.js функции для валидации форм`}
            >
                <ValidationPlayground />
            </TaskWrapper>

            <TaskWrapper 
                title="Компоненты высшего порядка в React, композиция компонент высшего порядка"
                description="Как правило, есть базовый компонент и при помощи композиции и других компонентов мы получаем новые сущности с новым поведением.
                  Реализуйте три кнопки при помощи композиции функциональных компонентов. Код добавлять в src/components/HocsPlayground/Buttons/ButtonN3/4/5.js, хоки писать прямо внутри
                  этих модулей либо добавлять в src/components/HocsPlayground/hocs. Почитать про HOC можно https://ru.reactjs.org/docs/higher-order-components.html#___gatsby здесь. Разрешено
                  использовать библиотеку recompose."
            >
                <HocsPlayground />
            </TaskWrapper>

            <TaskWrapper 
                title="* Расчет импульса вертикально падающего физического объекта разной плотности и формы."
                description="Реализуйте внутри модуля src/helpers/computeMomentum.js функцию для расчета импульса:"
            >
                <MomentumPlayground />
            </TaskWrapper>
        </div>
    );
};


export default Layout;
