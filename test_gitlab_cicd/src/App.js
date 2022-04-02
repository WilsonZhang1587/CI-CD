import { useState } from 'react'
import './App.css';

function App() {
  const [menuStatus, setMenuStatus] = useState(0)

  return (
    <div>
      {/* {process.env.REACT_APP_TITLE} */}
      <div
        style={{
          width: '300px',
          margin: '16px 0px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ width: '200px', height: '50px', lineHeight: '50px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setMenuStatus(0)}>選單一</div>
        <div style={{ width: '200px', height: '50px', lineHeight: '50px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setMenuStatus(1)}>選單二</div>
        <div style={{ width: '200px', height: '50px', lineHeight: '50px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setMenuStatus(2)}>選單三</div>
        <div style={{ width: '200px', height: '50px', lineHeight: '50px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setMenuStatus(3)}>選單四</div>
        <div style={{ width: '200px', height: '50px', lineHeight: '50px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setMenuStatus(4)}>選單五</div>
        <div style={{ width: '200px', height: '50px', lineHeight: '50px', textAlign: 'center', cursor: 'pointer' }} onClick={() => setMenuStatus(5)}>選單六</div>
        <div style={{ width: '264px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: menuStatus * 50, left: '50%', transform: 'translateX(-50%)', borderLeft: '8px solid aqua', zIndex: -1, transition: '0.25s ease-in-out' }}>
          <div style={{ width: '200px', height: '100%', backgroundColor: 'aqua', }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
