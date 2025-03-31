import {  useEffect, useState } from "react";
import Icon from "./Icon";
import styles from './Button.module.scss';

function displayIcon(status:string) {
    switch (status) {
        case 'try':
          // Statements executed when expression === value1
          return 'sync';
        case 'fail':
          // Statements executed when expression === value2
          return 'error';
        // ... more cases
        case 'success':
           return 'check'
        default:
          return null
      }
}

function Button(props:any) {

    const [displayStatus, setDisplayStatus] = useState('');
    
    useEffect(() => {
        setDisplayStatus(props.status);
        if (props.status === 'success' ||  props.status === 'fail') {
            setTimeout(() => {
                setDisplayStatus('');
            }, 3000);
        }

    }, [props.status]);

    return (
        <button
            className={styles.button}
            disabled={displayStatus !== ''}
            onClick={props.onClick}
        >
            <span>{props.children}</span>
            { displayStatus !== '' &&
                <div className={styles[displayStatus]}>
                    <Icon icon={displayIcon(displayStatus)}/>
                </div>
            }
        </button>
    )
}

export default Button;