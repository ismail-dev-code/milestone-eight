
import './App.css'
import ControlledField from './components/ControlledField/ControlledField'
import UncontrolledField from './components/ControlledField/UncontrolledField/UncontrolledField'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import ProductManagement from './components/ProductManagement/ProductManagement'
import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  

  return (
    <>
      <div style={{textAlign: 'center'}}>
        
      <h1>explore react form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UncontrolledField></UncontrolledField> */}
      {/* <HookForm></HookForm> */}
      <ProductManagement></ProductManagement>
      </div>
      
    </>
  )
}

export default App
