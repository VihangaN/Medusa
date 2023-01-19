import './app.scss'
import NavPane from './components/NavPane';
import SplitPanel from './components/SplitPanel';
function App() {
  const navPosition = 'right';
  return (
    <>
     <div data-tauri-drag-region className="titleBar"></div>
     <div className="baseLayout">
      <NavPane position={navPosition}/>
      <SplitPanel position={navPosition}></SplitPanel>
    </div>
    </>
    
  );
}

export default App;
