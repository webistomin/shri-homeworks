import React, {useState, Fragment} from 'react';

import styles from './styles.module.css';
import ButtonN1 from './Buttons/ButtonN1';
import ButtonN2 from './Buttons/ButtonN2';
import ButtonN3 from './Buttons/ButtonN3';
import ButtonN4 from './Buttons/ButtonN4';
import ButtonN5 from './Buttons/ButtonN5';


const DescriptionList = () => (
    <ol>
        <li>Кнопка small размера цвета primary, в тексте кнопки слева от текста расположен счетчик кликов на кнопку, каждый клик по кнопке увеличивает счетчик на одну единицу. Каждый нечетный по счетчику клик закрашивает оба круга в зеленый, каждый четный – оба круга в серый.</li>
        <li>Кнопка small размера цвета default, в разметке над ней — отображается счетчик начиная с 5, при каждом клике счетчик уменьшается, при достижении значения 0 счетчик сбрасывается на 5 и оба круга красятся в рыжий цвет.</li>
        <li>Кнопка large размера цвета primary, при клике делает оборот вокруг своего центра на 30° против часовой стрелки, при совершении оборота на 360°, меняет цвета кругов на случайные (на выбор из уже используемых, можете добавить 3-4 цвета)."</li>
    </ol>
)

const HocsPlayground = () => {
    const [innerColor, setInnerColor] = useState('blue');
    const [outerColor, setOuterColor] = useState('red');

    return (
        <Fragment>
            <DescriptionList/>

            <svg>
                <circle fill={outerColor} cx="60" cy="60" r="50"/>
                <circle fill={innerColor} cx="60" cy="60" r="30"/>
            </svg>

            <div className={styles.buttonList}>
                <ButtonN1 setOuterColor={setOuterColor} setInnerColor={setInnerColor}>
                    Внешний в синий
                </ButtonN1>

                <ButtonN2 setOuterColor={setOuterColor} setInnerColor={setInnerColor}>
                    Внешний в красный
                </ButtonN2>

                <ButtonN3 setOuterColor={setOuterColor} setInnerColor={setInnerColor}>Четные/нечетные клики</ButtonN3>

                <ButtonN4 setOuterColor={setOuterColor} setInnerColor={setInnerColor}>Уходящий counter</ButtonN4>

                <ButtonN5 setOuterColor={setOuterColor} setInnerColor={setInnerColor}>Крутящаяся кнопка</ButtonN5>
            </div>
        </Fragment>
    );
};


export default HocsPlayground;
