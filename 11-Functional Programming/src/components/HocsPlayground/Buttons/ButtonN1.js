import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withOnClickSetOuterBlue from '../hocs/withOnClickSetOuterBlue';
import withMediumSize from '../hocs/withMediumSize';
import withPrimaryColor from '../hocs/withPrimaryColor';


export default compose(
    withMediumSize,
    withPrimaryColor,
    withOnClickSetOuterBlue,
)(BaseButton)
