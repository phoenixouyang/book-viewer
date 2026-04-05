import BookCard from "@/components/BookCard";
import PageHeader from "@/components/PageHeader";
import { favouritesAtom } from "@/store";
import { useAtom } from "jotai";
import { Container, Row, Col } from "react-bootstrap";

export default function Favourites() {
    const [favourites, setFavouritesList] = useAtom(favouritesAtom);
    if(!favourites) return null;

    return(<>
        <PageHeader text="Favourites" subtext="All your favourite books, in one place" />
        <Container>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {favourites && (
                    favourites.map((id, index) => (
                        <Col key={index}>
                            <BookCard workId={id} />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    </>)
}