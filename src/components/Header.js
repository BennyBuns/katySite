import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (<Navbar dark color='primary' sticky='top' expand='md'>
        <NavbarBrand href='/'>
        </NavbarBrand>
    </Navbar>);
}

export default Header;

