import { Col, Container, Row } from "react-bootstrap";

export default function BookDetails({book}) {
    const imageIdx = book.title == "Assassin's Apprentice" ? 6 : 0; // hard code title index to show a different cover in about page
    return (<>
        <Container>
            <Row>
                <Col lg="4">
                    <img
                        onError={(event) => {
                        event.target.onerror = null; // Remove the event handler to prevent infinite loop
                        event.target.src =
                        "https://placehold.co/400x600?text=Cover+Not+Available";
                        }}
                        className="img-fluid w-100"
                        src={`https://covers.openlibrary.org/b/id/${book?.covers?.[(imageIdx)]}-L.jpg`}
                        alt="Cover Image"
                    /> 
                    <br /><br />
                </Col>
                <Col lg="8">
                        <h3>{book.title}</h3>
                        {book.first_publish_date && (
                            <>
                                <small>Date Published: {book.first_publish_date}</small>
                            </>
                        )}
                        <p>{typeof book.description === "string" ? book.description : book.description?.value}</p>
                        <br />

                {book.subjects && (
                    <>
                        <h5>Themes</h5>
                        {book.subjects.join(", ")}
                        <br /><br />
                    </>
                )}

                {book.subject_places && (
                    <>
                        <h5>Settings</h5>
                        {book.subject_places.join(", ")}
                        <br /><br />
                    </>
                )}

                {book.links && (
                    <>
                        <h5>More Information</h5>
                        {book.links.map((link, index) => (
                            <span key={index}>
                                <a href={link.url} target="_blank" rel="noreferrer">{link.title}</a>
                                <br />
                            </span>
                        ))}
                    </>
                )}
                </Col>
            </Row>
        </Container>

    </>)
}