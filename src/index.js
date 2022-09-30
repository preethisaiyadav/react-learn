import ReactDom from 'react-dom'
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import{BrowserRouter}from'react-router-dom';
 
ReactDom.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')  
) ;