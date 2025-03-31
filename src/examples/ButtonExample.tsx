import { useState } from "react";
import Example from "../components/Example";
import Button from "../lib/Button";

function ButtonExample() {

    const [successStatus, setSuccessStatus] = useState('');
    const [failStatus, setFailStatus] = useState('');
    
    const showSuccess = () => {
        setSuccessStatus('try');
        setTimeout(() => {
            setSuccessStatus('success');
        }, 3000);
    };

    const showFail = () => {
        setFailStatus('try');
        setTimeout(() => {
            setFailStatus('fail');
        }, 3000);
    };

    return (
        <Example title="Button">
            <div style={{display:'flex',gap:'.5rem'}}>
                <Button onClick={showSuccess} status={successStatus}>success</Button>
                <Button onClick={showFail} status={failStatus}>fail</Button>
            </div>
        </Example>
    )
}

export default ButtonExample