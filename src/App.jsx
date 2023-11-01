import MainPage from "../src/components/main/Main";
import { Link, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <header>
      <Link to="/">Home</Link>
        <br />
      <Link to="/main">Todo</Link>
      </header>
      <Routes>
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
    </>
  )
}

// добавить пункт чекед на элемент в таск и стилизовать
// добавить scss (saas)
// стилизовать посмотрев варианты стилизации в интернетах 

export default App;
