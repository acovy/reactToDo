import TasksPage from "./components/tasksPage/TasksPage";
import Homepage from "./components/homePage/Homepage";
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/main" element={<TasksPage/>}/>
      </Routes>
    </div>
  )
}

//  

export default App;
