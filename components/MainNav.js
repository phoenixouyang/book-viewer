import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function MainNav() {
    return(<>
        <Navbar expand="lg" className="fixed-top navbar-expand-lg bg-primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand><Nav.Link class="nav-link" as={Link} href="/">Phoenix Ouyang</Nav.Link></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link class="nav-link" as={Link} href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <br />
        <br />
    </>)
}