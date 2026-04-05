import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { readToken, removeToken } from "@/lib/authenticate";
import { useRouter } from "next/router";

export default function MainNav() {
    const router = useRouter();
    const token = readToken();

    function logout() {
        removeToken();
        router.push("/login");
    }

    return(<>
        <Navbar expand="lg" className="fixed-top navbar-expand-lg bg-primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand><Nav.Link class="nav-link" as={Link} href="/">Phoenix Ouyang</Nav.Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link class="nav-link" as={Link} href="/about">About</Nav.Link>
                </Nav>
                {!token && <Nav className="ml-auto">
                    <Nav.Link class="nav-link" as={Link} href="/register">Register</Nav.Link>
                </Nav>}
                {token && <Nav className="ml-auto">
                    <NavDropdown className="" title={token.userName} id="basic-nav-dropdown">
                        <NavDropdown.Item class="nav-link" as={Link} href="/favourites">Favourites</NavDropdown.Item>
                        <NavDropdown.Item class="nav-link" onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>}
            </Container>
        </Navbar>
        <br />
        <br />
    </>)
}