import { useState } from "react";
import Example from "../components/Example";
import Icon from "../lib/Icon";
import Input from "../lib/Input";

function IconExample() {
    const [icon, setIcon] = useState('search');

    return (
        <Example title="Icon">
            <Icon
                icon={icon}
            />

            <div className="even-grid small-1-across medium-3-across grid-gap-sm">
                <Input
                    type="text"
                    label="(Google) Icon"
                    name="gicon"
                    value={icon}
                    onChange={e => setIcon(e.target.value)}
                    placeholder="Enter text"
                />
            </div>
        </Example>
    )
}

export default IconExample