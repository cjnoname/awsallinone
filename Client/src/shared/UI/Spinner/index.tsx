import * as React from 'react';
import { RefreshIndicator } from 'material-ui';
import * as styles from './style.scss';

interface PropsType {
    loading: boolean,
    size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl"
}

enum sizes {
    xxs = 20,
    xs = 30,
    s = 40,
    m = 50,
    l = 60,
    xl = 70,
    xxl = 80
}

const Spinner = (props: PropsType) => {
    const { loading, size } = props;
    const sizeNumber = size ? sizes[size] : sizes.m;
    return (
        loading ?
            <div className={styles.center}>
                <RefreshIndicator
                    size={sizeNumber}
                    left={10}
                    top={0}
                    status="loading"
                />
            </div> : null
    );
}

export default Spinner;
