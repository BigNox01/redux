
import './App.css';
import HorizontalList from './components/menubar';
import SearchCompletedTask from './components/searchTasks';
import SideList from './components/sidelist';

function App() {
  return (
    <div className="App">
      <div className="upperNavigationbar">
        <HorizontalList />
      </div>
      <div className="main-body">
        <div className="sideNavigation">
          <SideList />
        </div>
        <div className="main-components">
          <SearchCompletedTask></SearchCompletedTask>
        </div>
      </div>
    </div>
  );
}

export default App;
