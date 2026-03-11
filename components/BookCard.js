import Error from "next/error";
import Link from "next/link";
import { Card } from "react-bootstrap";
import useSWR from "swr"

export default function BookCard({ workId }) {
    const { data, error, isLoading } = useSWR(`https://openlibrary.org/works/${workId}.json`);

    if (isLoading) {
        return null
    } else if (error || !data) {
        return <Error statusCode={404} />
    } else {
        return (<>
            <Card style={{width: '18rem'}}>
                <Card.Img 
                    variant="top"
                    onError={(event) => {
                        event.target.onerror = null; // Remove the event handler to prevent infinite loop
                        event.target.src =
                        "https://placehold.co/400x600?text=Cover+Not+Available";
                    }}
                    src={`https://covers.openlibrary.org/b/id/${data?.covers?.[0]}-M.jpg`}
                    alt="Cover Image"
                />
                <Card.Body>
                    <Card.Title>{data.title || ""}</Card.Title>
                    <Card.Text>{data.first_published_date || "N/A"}</Card.Text>
                    <Link href={`/works/${workId}`}>View Book</Link>
                </Card.Body>
            </Card>
        </>)
    }
}