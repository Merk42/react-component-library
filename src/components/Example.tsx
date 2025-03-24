import Panel from "../lib/Panel"

function Example(props:any) {
    return ( 
        <Panel>
            <h2>{props.title}</h2>
            {props.children}
        </Panel>
    )
}

export default Example