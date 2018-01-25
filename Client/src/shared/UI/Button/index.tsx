import * as React from 'react';
import { RaisedButton } from 'material-ui';

interface PropsType {
    label: string,
    [rest: string]: any
}

export default (props: PropsType) => {
    const { label, ...rest } = props;
    return (
        <RaisedButton label={props.label} { ...rest } />
    );
}
