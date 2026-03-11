import { Card } from "react-bootstrap";

export default function PageHeader({text, subtext}) {
    return(<>
        <Card className="bg-light">
            <Card.Body>
                <h2 class="text-primary">{text}</h2>
                {subtext && <p class="text-body-secondary">{subtext}</p>}
            </Card.Body>
        </Card>
        <br />
    </>)
}