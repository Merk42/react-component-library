import {  MouseEventHandler, ReactNode, useEffect, useState } from "react";
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

interface ButtonProps {
    status: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ status, onClick, children }) => {
    const [displayStatus, setDisplayStatus] = useState('');
    
    useEffect(() => {
        setDisplayStatus(status);
        if (status === 'success' ||  status === 'fail') {
            setTimeout(() => {
                setDisplayStatus('');
            }, 3000);
        }

    }, [status]);

    return (
        <button
            className={styles.button}
            disabled={displayStatus !== ''}
            onClick={onClick}
        >
            <span>{children}</span>
            { displayStatus !== '' &&
                <div className={styles[displayStatus]}>
                    <Icon icon={displayIcon(displayStatus)}/>
                </div>
            }
        </button>
    )
}

export default Button;