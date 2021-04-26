import Router from './Router';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <Router />
      <ToastContainer autoClose={2500} />
    </div>
  );
}

export default App;
