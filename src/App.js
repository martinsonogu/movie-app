import { Provider } from 'react-redux';
import Navbar  from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/home/HomePage';
import {BrowserRouter, Route} from "react-router-dom"
import Movie from './Components/home/Movie';
import store  from './store';


function App() {
  return (
    
      <Provider store={store}>
        <BrowserRouter>
          <div className="bg-light">
            <Navbar />
            <Route path="/" exact component={HomePage}/>
            <Route path="/movie/:id" exact component={Movie}/>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
