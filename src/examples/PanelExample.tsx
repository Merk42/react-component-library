import { useState } from "react";
import Example from "../components/Example";
import Panel from "../lib/Panel";
import Select from "../lib/Select";

const sizeOptions = [
    { value: '', label: 'default' },
    { value: 'compact', label: 'compact' },
    { value: 'expand', label: 'expand' },
];

const backgroundOptions = [
    { value: '', label: 'default' },
    { value: 'bg1', label: 'bg1' },
    { value: 'bg2', label: 'bg2' },
    { value: 'bg3', label: 'bg3' },
];

const borderOptions = [
    { value: '', label: 'default' },
    { value: 'accent1', label: 'accent1' },
    { value: 'accent2', label: 'accent2' },
    { value: 'accent3', label: 'accent3' },
    { value: 'accent4', label: 'accent4' },
    { value: 'accent5', label: 'accent5' },
    { value: 'accent6', label: 'accent6' },
];

function PanelExample() {
    const [size, setSize] = useState('');
    const [bg, setBg] = useState('');
    const [border, setBorder] = useState('');

    return (
        <Example title="Panel">
            <Panel
                size={size}
                bg={bg}
                border={border}
                >
                <p>content for demo purposes</p>
                <p>can contain anything</p>
            </Panel>
            <hr />
            <div className="even-grid small-1-across medium-3-across grid-gap-sm">
                <Select
                    name="size"
                    label="size"
                    options={sizeOptions}
                    value={size}
                    onChange={e => setSize(e)}
                />
                <Select
                    name="background"
                    label="background"
                    options={backgroundOptions}
                    value={bg}
                    onChange={e => setBg(e)}
                />
                <Select
                    name="border"
                    label="border"
                    options={borderOptions}
                    value={border}
                    onChange={e => setBorder(e)}
                />
            </div>
        </Example>
    )
}

export default PanelExample