import React, {Fragment, useState} from 'react';
import MathJax from 'react-mathjax2'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import cubeSrc from './images/cube.png'
import sphereSrc from './images/sphere.png'
import tetrahedronSrc from './images/tetrahedron.png'

import styles from './styles.module.css';

import {SHAPES, MATERIALS} from '../../constants';
import computeMomentum from '../../helpers/computeMomentum';


const mapShapeToImageSrc = {
    [SHAPES.CUBE]: cubeSrc,
    [SHAPES.SPHERE]: sphereSrc,
    [SHAPES.TETRAHEDRON]: tetrahedronSrc,
}

const speedFormula = 'v = sqrt{2gh}';

const massFormula = 'm = \\rho * V';

const sphereVolFormula = 'V = \\frac{πd^3}{6} '

const tetraVolFormula = 'V = \\frac{r^3sqrt{2}}{12}'

const GDescription = 'g = 9,8\\frac{\\text{м}}{\\text{c}^2}';


const MomentumPlayground = () => {
    const [shape, changeShape] = useState(SHAPES.CUBE);
    const [height, changeHeight] = useState(2);
    const [size, changeSize] = useState(0.5);
    const [density, changeDensity] = useState(MATERIALS.CUPRUM);
    const [momentum, changeMomentum] = useState(computeMomentum({size, height, density, shape}));

    const handleChangeShape = ({target}) => {
        const {value} = target;

        changeShape(value);
        const newMomentum = computeMomentum({size, height, density, shape: value});
        changeMomentum(newMomentum);
    }

    const handleChangeDensity = ({target}) => {
        const {value} = target;

        changeDensity(value);
        const newMomentum = computeMomentum({size, height, density: value, shape});
        changeMomentum(newMomentum);
    }

    const handleChangeHeight = ({target}) => {
        const {value} = target;

        changeHeight(value);
        const newMomentum = computeMomentum({size, height: value, density, shape});
        changeMomentum(newMomentum);
    }

    const handleChangeSize = ({target}) => {
        const {value} = target;

        changeSize(value);
        const newMomentum = computeMomentum({size: value, height, density, shape});
        changeMomentum(newMomentum);
    }

    return (
        <div className={styles.root}>
            <MathJax.Context input='ascii'>
                <Fragment>
                    <div>
                        1) Формула для импульса тела массой <MathJax.Node inline>m</MathJax.Node>, 
                        двигающегося со скоростью <MathJax.Node inline>v</MathJax.Node>. 
                        <span className={styles.formula}><MathJax.Node inline>p = mv</MathJax.Node>.</span>
                    </div>

                    <div>
                        2) Формула для расчёта скорости тела, падающего с высоты <MathJax.Node inline>h</MathJax.Node>, 
                        перед ударом о поверхность:  <span className={styles.formula}><MathJax.Node inline>{speedFormula}</MathJax.Node></span>, 
                        где <MathJax.Node>{GDescription}</MathJax.Node> – ускорение свободного падения.
                    </div>

                    <div>
                        3) Формула для расчёта массы тела 
                        <span className={styles.formula}><MathJax.Node>{massFormula}</MathJax.Node></span>,
                        где <MathJax.Node>\rho</MathJax.Node> — плотность материала, <MathJax.Node>V</MathJax.Node> — объем тела.
                    </div>

                    <div>
                        4) Формула для расчёта объёма куба c ребром длины 
                        <MathJax.Node>a</MathJax.Node>: <span className={styles.formula}><MathJax.Node>V = a^3</MathJax.Node>.</span>
                    </div>

                    <div>
                        5) Формула для расчёта объёма шара диаметром <MathJax.Node>d</MathJax.Node>: 
                        <span className={styles.formula}><MathJax.Node>{sphereVolFormula}</MathJax.Node></span>.
                    </div>

                    <div>
                        6) Формула для расчёта объёма правильного тетраэдра с ребром длины 
                        <MathJax.Node>а</MathJax.Node>: <span className={styles.formula}><MathJax.Node>{tetraVolFormula}</MathJax.Node></span>.
                    </div>

                    <p>
                        Также инженеры объяснили алгоритм вычисления импульса: сначала необходимо найти объем тела, исходя из его линейной величины и формы (использовать нужную формулу),
                        далее, используя плотность материала <MathJax.Node>\rho</MathJax.Node> и полученный объём <MathJax.Node>V</MathJax.Node>, вычислить массу (значения плотности нам предоставили). 
                        Рассчитать скорость по известной высоте падения. И в конце умножить эту скорость на найденную ранее массу. <b> Полученный результат следует округлить с точностью до первого знака после запятой (математически, т.е. в ближайшую сторону 2.593 > 2.6, 2.32 > 2.3)</b>
                    </p>

                    <p>
                        Вы создали два инпута с линейным размером фигуры и высотой и два селекта — один с материалом (плотностью) и один с выбором формы — и подключили их к компоненту,
                        осталось написать функцию расчёта импульса и вывести результат на экран.
                    </p>

                    <p>
                        <i>Ослабления и условности в задаче: </i> 

                        При расчёте скорости считать тело материальной точкой, 
                        т.е. не корректировать высоту падения с учётом линейных размеров тела — следует пользоваться алгоритмом выше. 
                        По желанию можете сделать валидацию входящих параметров: линейный размер тела не может быть больше высоты, линейный размер и начальная высота должны быть больше нуля.
                        В тестах это проверятся не будет. 

                        <b>Изменять только модуль src/helpers/computeMomentum.js</b>
                    </p>
                </Fragment>
            </MathJax.Context>      

            <div className={styles.controls}>
                <div className={styles.control}>
                    <TextField 
                        onChange={handleChangeHeight}
                        onBlur={handleChangeHeight}
                        value={height}
                        label="Начальная высота, м"
                    />
                </div>

                <div className={styles.control}>
                    <TextField 
                        onChange={handleChangeSize}
                        onBlur={handleChangeSize}
                        value={size}
                        label="Линейный размер, м"
                    />
                </div>

                <div className={styles.control}>
                    <InputLabel htmlFor="shape">Форма тела</InputLabel>
                    <Select
                        value={shape}
                        onChange={handleChangeShape}
                        inputProps={{
                            name: 'shape',
                            id: 'shape',
                        }}
                        >
                        <MenuItem value={SHAPES.CUBE}>Куб</MenuItem>
                        <MenuItem value={SHAPES.SPHERE}>Сфера</MenuItem>
                        <MenuItem value={SHAPES.TETRAHEDRON}>Тетраэдр</MenuItem>
                    </Select>
                </div>

                <div className={styles.control}>
                    <InputLabel htmlFor="density">Материал</InputLabel>
                    <Select
                        value={density}
                        onChange={handleChangeDensity}
                        inputProps={{
                            name: 'density',
                            id: 'density',
                        }}
                        >
                        <MenuItem value={MATERIALS.CUPRUM}>Медь</MenuItem>
                        <MenuItem value={MATERIALS.FERRUM}>Железо</MenuItem>
                        <MenuItem value={MATERIALS.AURUM}>Золото</MenuItem>
                    </Select>
                </div>
            </div>

            <div className={styles.illustration}>
                <img src={mapShapeToImageSrc[shape]} alt={shape} className={styles.illustrationImage} />
            </div>

            <div className={styles.result}>
                Результат: {momentum} кг⋅м/с
            </div>
        </div>
    );
};


export default MomentumPlayground;
