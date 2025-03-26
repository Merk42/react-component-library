import './App.scss'
import IconExample from './examples/IconExample'
import PanelExample from './examples/PanelExample'
import BtnIconExample from './examples/BtnIconExample';
import BadgeExample from './examples/BadgeExample';
import TabListExample from './examples/TabListExample';
import AccordionListExample from './examples/AccordionListExample';
/* TODO
  Dialog
  Carousel
  Accordion
  Tabs
*/

function App() {
  return (
    <main style={
      {
        'maxWidth': '62.5em',
        'display': 'block',
        'marginInline': 'auto'
      }
    }>

        <PanelExample/>
        <IconExample/>
        <BtnIconExample />
        <BadgeExample/>
        <TabListExample/>
        <AccordionListExample/>
    </main>
  )
}

export default App
