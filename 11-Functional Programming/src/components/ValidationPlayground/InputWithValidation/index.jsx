import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 600,
    }
}));


const InputWithValidation = ({validateFn, label}) => {
    const [isFieldValid, setIsFieldValid] = useState(true);
    const {textField} = useStyles();

    const validateField = ({target}) => {
        const {value} = target;

        if (validateFn(value)) {
            if (!isFieldValid) {
                setIsFieldValid(true)
            }
        } else {
            setIsFieldValid(false);
        }
    }

    return (
        <TextField 
            className={textField} 
            onChange={validateField}
            onBlur={validateField}
            error={!isFieldValid} 
            label={label}
        />
    )
}


export default InputWithValidation;
