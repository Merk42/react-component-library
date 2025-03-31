import Example from "../components/Example";
import TabList from "../lib/TabList";
import TabItem from "../lib/TabItem";

function TabListExample() {
    return (
        <Example title="TabList">
            <TabList activeTabIndex={0}>
                <TabItem label="alpha">
                    <p>Alpha content</p>
                </TabItem>
                <TabItem label="beta">
                    <p>Beta content</p>
                </TabItem>
                <TabItem label="gamma">
                    <p>Gamma content</p>
                </TabItem>
                <TabItem label="delta">
                    <p>Delta content</p>
                </TabItem>
                <TabItem label="epsilon">
                    <p>Epsilon content</p>
                </TabItem>
            </TabList>
        </Example>
    )
}

export default TabListExample