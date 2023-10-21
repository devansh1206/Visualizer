import logo from './logo.svg';
import './App.css';
import SortingVisualizer from './SortingVisulizer/SortingVisualizer.jsx'
import PathFinder from './PathFinder/PathFinder.jsx';

function Sorting() {
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
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

export default SortingVisualizer;
