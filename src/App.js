import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './SortingVisulizer/SortingVisualizer.jsx'
import sv1 from './SortingVisulizer/sv1.jsx';
import PathFinder from './PathFinder/PathFinder.jsx';

function Sorting() {
  return (
    <div className="App">
     <sv1> </sv1>
    </div>
  );
}

function pathfinder(){
  return (
    <div className='pathfinder'>
      <PathFinder></PathFinder>
    </div>
  )
}

export default sv1;
