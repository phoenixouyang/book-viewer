/********************************************************************************* * WEB422 – Assignment 1
* * I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html 
* 
* Name: Phoenix Ouyang     Student ID: 135264240      Date: February 5, 2026 
* 
********************************************************************************/

import PageHeader from "@/components/PageHeader";
import { Pagination, Table } from "react-bootstrap";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

export default function Books() {

  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const router = useRouter();

  const subtext = (
    <>
        {Object.entries(router.query).map(([key, value], index) => (
            <span key={index}>
                {index > 0 && " | "}
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}</strong>: {value}
            </span>
        ))}
    </>
  );

  let queryString = { ...router.query };
  let qParts = [];
  
  Object.entries(queryString).forEach(([key, value]) => {
    qParts.push(`${key}:${value}`);
  });
  
  if (qParts.length > 0) {
    queryString = qParts.join(' AND ');
  }

  const { data, error } = useSWR(`https://openlibrary.org/search.json?q=${queryString}&page=${page}&limit=10`);

  useEffect(() => {
    if (data) {
    setPageData(data.docs);
    }
  }, [data]);

  function previous() {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  function next() {
    setPage(page + 1)
  };

  return (<>
    <PageHeader text="Search Results" subtext={subtext} />
    <Table striped hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(pageData) && pageData?.map(book => {
          return (
            <tr key={book.key} onClick={() => router.push(`${book.key}`)}>
              <td>{book.title}</td>
              <td>{book.first_publish_year ? book.first_publish_year : "N/A"}</td>
            </tr>
          );
        })}
      </tbody>

    </Table>

    <Pagination>
      <Pagination.Prev onClick={previous} disabled={page == 1} />
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next onClick={next} />
    </Pagination>

  </>);
}
