import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Header,Footer} from './components'
import {Home,Contact} from './pages'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>

        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
