
import '@mantine/core/styles.css';
import './App.css'
import { MantineProvider } from '@mantine/core';
import MyForm from './components/MyForm';
import TableForm from './components/TableForm';
import SelectForm from './components/SelectForm';
import Demo from './components/Demo';
function App() {
  return (
<div className="App">
<MantineProvider>
   <MyForm/>     
   <Demo/>
  {/* <MapComponent/> */}    <SelectForm/><br/>
  <TableForm/>
</MantineProvider>
</div>
  );
}

export default App;
