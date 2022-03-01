import {Route, Routes} from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Bookmarkpage from './pages/Bookmarkpage';

const App = ():JSX.Element => {

  return(

    <Routes>
    <Route path="/" element={<Mainpage />} />
    <Route path="/bookmark" element={<Bookmarkpage />} />
    </Routes>

  )

}

export default App;