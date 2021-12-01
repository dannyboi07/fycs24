import './App.css';
import { useState } from 'react';
import DButton from './DButton.js';
import Display from './Display';
import MathButton from './MathButton';
import Navbar from './Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './Themes.js';

function App() {

  const [themeToggle, setThemeToggle] = useState(false);
  const [calcBuffer, setCalcBuffer] = useState('0');

  let buttonTheme;
  themeToggle === false ? buttonTheme = "contained" : buttonTheme = "contained"


  return (
    <ThemeProvider theme={themeToggle === false ? lightTheme : darkTheme}>
      <CssBaseline />
      <div className="App">
        <Navbar className="nav" themeToggle={themeToggle} setThemeToggle={setThemeToggle}/>
          <div className="calculator-container">
            <Display className="answer" calcBuffer={calcBuffer} />
            <DButton variant={buttonTheme} className="item1" func="1" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} className="item2" func="2" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} className="item3" func="3" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} className="item4" func="4" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} className="item5" func="5" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} className="item6" func="6" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} className="item7" func="7" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} className="item8" func="8" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} className="item9" func="9" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} className="item0" func="0" calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer}/>
            <DButton variant={buttonTheme} color="success" className="itemp" func='+' calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer} />
            <DButton variant={buttonTheme} color="error" className="itemm" func='-' calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer} />
            <DButton variant={buttonTheme} color="success" className="itemmu" func='*' calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer} />
            <DButton variant={buttonTheme} color="error" className="itemd" func='/' calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer} />
            <DButton variant={buttonTheme} color="primary" className="itemc" func='C' calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer} />
            <MathButton variant={buttonTheme} color="primary" className="itema" func='=' calcBuffer={calcBuffer} setCalcBuffer={setCalcBuffer} />
          </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
