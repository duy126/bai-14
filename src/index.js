
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Templates from './templates/Templates';
import ShoesStore from './components/ShoesStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes >
<Route path='' element={<Templates></Templates>}>
<Route index  element={<ShoesStore></ShoesStore>}></Route>
</Route>
 </Routes>
 </BrowserRouter>
)
