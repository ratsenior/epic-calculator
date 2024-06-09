import './App.css'
import Button from './Button.jsx'
import Display from './Display.jsx'
function App() {
  return(
<div id="mainframe">

    <Display/>
    <div id="keypad">
    
    <div>
      <Button text="%"/>
      <Button text="CE"/>
      <Button text="C"/>
      <Button text="←"/>
    </div>

    <div>
      <Button text="1/x"/>
      <Button text="x^2"/>
      <Button text="sqrt(x)"/>
      <Button text="/"/>
    </div>

    <div>
      <Button text="7"/>
      <Button text="8"/>
      <Button text="9"/>
      <Button text="*"/>
    </div>
    
    <div>
      <Button text="4"/>
      <Button text="5"/>
      <Button text="6"/>
      <Button text="-"/>
    </div>

    <div>
      <Button text="1"/>
      <Button text="2"/>
      <Button text="3"/>
      <Button text="+"/>
    </div>

    <div>
      <Button text="+/-"/>
      <Button text="0"/>
      <Button text="."/>
      <Button id="equals-button" text="="/>
    </div>

  </div>

</div>
)
}

export default App
