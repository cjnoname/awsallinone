import * as React from 'react';
import { reduxForm, SubmissionError } from 'redux-form/immutable';
import { reset } from 'redux-form';
import TextField from '../../../shared/UI/Form/TextField';
import Button from '../../../shared/UI/Button';

interface PropsType {
  dispatch: any,
  handleSubmit: any,
  error: any
}

const ViewDetailsSearchBar = (props: PropsType) => {
  const resetForm = () => {
    props.dispatch(reset('oAuthSearchBar'));
  }

  const { handleSubmit, error } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField name="clientId" onChange={resetForm} label="Client ID" />
        <TextField name="token" onChange={resetForm} label="Token" />
        <Button label="SEARCH" type="submit" />
        <div>
          {error && <strong>{error}</strong>}
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'oAuthSearchBar',
})(ViewDetailsSearchBar as any) as any;
