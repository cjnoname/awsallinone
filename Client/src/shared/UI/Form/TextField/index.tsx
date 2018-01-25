import * as React from 'react';
import * as MaterialUI from 'material-ui';
import { Field } from 'redux-form/immutable';
// import * as styles from './style.scss';

interface PropsType {
  name: string,
  label: string,
  [rest: string]: any
}

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}: any) => (
    <MaterialUI.TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )

const TextField = (props: PropsType) => {
  const { ...rest } = props;
  return (
    <Field name={props.name} component={renderTextField} label={props.label} { ...rest } />
  );
}

export default TextField;
