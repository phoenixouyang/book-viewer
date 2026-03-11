import BookDetails from "@/components/BookDetails";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Card } from "react-bootstrap";

export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch(`https://openlibrary.org/works/OL2707183W.json`).then(res => res.json()).then((data) => {
        resolve({ props: { book: data }})
    })
  })
}

export default function About(props) {
    return(<>
        <PageHeader text="About the Developer" subtext="Phoenix Ouyang"/>
        <p>Hi! I'm Phoenix - a software developer student learning to use React to develop responsive web applications. I love experimenting with programming languages and creating new projects, and some of the languages I know are: C, C++, JavaScript, Python, TypeScript, and Swift. I've got lots of other projects, so check them out on my <a href="https://github.com/phoenixouyang" target="_blank">Github</a>.</p>
        <p>Some of my hobbies include running, gaming, travelling, escape rooms, puzzles and reading! Assassin's Apprentice is the first book in the Farseer Trilogy, written by my favourite fantasy author: Robin Hobb. It's wonderfully written. If you enjoy the fantasy genre like I do, I highly recommend reading it! The 'Books' page highlights some of the amazing work she has published over the years. This website is an interface for viewing books, and uses an API from <a href="https://openlibrary.org/dev/docs/api/books" target="_blank">openlibrary</a>.</p>
        <br />
        <BookDetails book={props.book} />
    </>)
}