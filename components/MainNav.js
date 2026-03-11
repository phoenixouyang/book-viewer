import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function MainNav() {
    return(<>
        <Navbar expand="lg" className="fixed-top navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Phoenix Ouyang</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link class="nav-link" as={Link} href="/">Books</Nav.Link>
                    <Nav.Link class="nav-link" as={Link} href="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <br />
        <br />
    </>)
}