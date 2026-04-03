/********************************************************************************* 
 * WEB422 – Assignment 3
* * I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Phoenix Ouyang  Student ID: 135264240    Date: April 10, 2026
*
* Vercel App (Deployed) Link: ____________________________________________________
**********************************************************************************/

import PageHeader from "@/components/PageHeader";
import { useRouter } from "next/router";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';

export default function Home() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }  } = useForm();

    function search(data) {
        router.push({
            pathname: '/books',
            query: Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== ''))
        });
    }
    return (<>
        <PageHeader text="Search for Books" subtext="Browse the extensive collection of books available on openlibrary.org"/>
        
        <Form onSubmit={handleSubmit(search)}>
            <Row>
                <Col xs={12}>
                    <Form.Group controlId="formAuthor" className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control {...register('author', { required: true })}
                            type="text"
                            placeholder="Enter author"
                            isInvalid={!!errors.author}
                            />
                    </Form.Group>
                </Col>
                {errors.author?.type === "required" && <span class="text-danger pb-3">Author cannot be empty</span>}
            </Row>
            <Row>
                <Col lg={6}>
                    <Form.Group controlId="formTitle" className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control {...register('title')}
                            type="text"
                            placeholder="Enter title"
                        />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group controlId="formSubject" className="mb-3">
                        <Form.Label>Subject (contains)</Form.Label>
                        <Form.Control {...register('subject')}
                            type="text"
                            placeholder="Enter subject keyword"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col lg={6}>
                    <Form.Group controlId="formLanguage" className="mb-3">
                        <Form.Label>Language Code</Form.Label>
                        <Form.Control {...register('language')}
                            type="text"
                            placeholder="Enter language code (e.g. eng)"
                            maxLength="3"
                        />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group controlId="formPublishYear" className="mb-3">
                        <Form.Label>First Published (Year)</Form.Label>
                        <Form.Control {...register('first_publish_year')}
                            type="number"
                            placeholder="Enter published year"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col xs={12}>
                    <Button variant="btn btn-lg btn-primary" type="submit" className="w-100 py-3 fs-5" disabled={Object.keys(errors).length > 0}>
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    </>)
}