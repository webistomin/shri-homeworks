import {withHandlers} from 'recompose';


export default withHandlers({
    onClick: ({setOuterColor}) => () => {
        setOuterColor('red');
    },
});
