import {Route, Switch,Redirect} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu from './component/Menu';
import Home from './component/Home';
import Contact from './component/Contact';
import Projects from './component/Projects';
import About from './component/About';
import Todo from './component/projectlist/Todo';
import Weatherapp from './component/projectlist/Weatherapp'


const App = () =>{

  
  return(
    <>
    <Menu />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/projects/todo" component={Todo}/>
      <Route exact path="/projects/weatherapp" component={Weatherapp}/>
      
      {/* <Route component={Error} /> */}
      <Redirect to="/" />
    </Switch>
    </>

  );

};

export default App;
