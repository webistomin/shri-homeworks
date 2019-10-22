import {compose} from 'recompose';
import BaseButton from './BaseButton';

import withOnClickSetOuterRed from '../hocs/withOnClickSetOuterRed';
import withMediumSize from '../hocs/withMediumSize';
import withDefaultColor from '../hocs/withDefaultColor';


export default compose(
    withOnClickSetOuterRed,
    withMediumSize,
    withDefaultColor,
)(BaseButton)
