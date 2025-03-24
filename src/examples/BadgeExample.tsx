import { useState } from "react";
import Example from "../components/Example";
import Badge from "../lib/Badge";
import Input from "../lib/Input";

function BadgeExample() {
    const [icon, setIcon] = useState(0);

    return (
        <Example title="Badge">
            <Badge
                number={icon}
            >content the badge is for</Badge>

            <div className="even-grid small-1-across medium-3-across grid-gap-sm">
                <Input
                    type="number"
                    label="(Google) b Icon"
                    name="gbicon"
                    value={icon}
                    onChange={e => setIcon(Number(e.target.value))}
                    placeholder="Enter text"
                />
            </div>
        </Example>
    )
}

export default BadgeExample