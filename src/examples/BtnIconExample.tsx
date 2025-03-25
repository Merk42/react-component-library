import { useState } from "react";
import Example from "../components/Example";
import BtnIcon from "../lib/BtnIcon";
import Input from "../lib/Input";

function BtnIconExample() {
    const [icon, setIcon] = useState('search');

    return (
        <Example title="BtnIcon">
            <BtnIcon
                icon={icon}
            />
            <hr />
            <div className="even-grid small-1-across medium-3-across grid-gap-sm">
                <Input
                    type="text"
                    label="(Google) b Icon"
                    name="gbicon"
                    value={icon}
                    onChange={e => setIcon(e.target.value)}
                    placeholder="Enter text"
                />
            </div>
        </Example>
    )
}

export default BtnIconExample