import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
       <Navbar dark color='primary' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                    </NavbarBrand>
                </Container>
            </Navbar>
            hello world
    </div>
  );
}

export default App;
