import { TextField, Grid } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
  const { register } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <TextField 
        inputRef={register}
        name={name}
        label={label}
        required={required}
        fullWidth
      />
    </Grid>
  );
}

export default FormInput;