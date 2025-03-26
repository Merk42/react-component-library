import Example from "../components/Example";
import AccordionList from "../lib/AccordionList";
import AccordionItem from "../lib/AccordionItem";

function AccordionListExample() {
    return (
        <Example title="AccordionList">
            <AccordionList activeTabIndex={4}>
                <AccordionItem label="alpha">
                    <p>Alpha content</p>
                </AccordionItem>
                <AccordionItem label="beta">
                    <p>Beta content</p>
                </AccordionItem>
                <AccordionItem label="gamma">
                    <p>Gamma content</p>
                </AccordionItem>
                <AccordionItem label="delta">
                    <p>Delta content</p>
                </AccordionItem>
                <AccordionItem label="epsilon">
                    <p>Epsilon content</p>
                </AccordionItem>
            </AccordionList>
        </Example>
    )
}

export default AccordionListExample