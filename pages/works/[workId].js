import useSWR from 'swr';
import { useRouter } from 'next/router';
import BookDetails from '@/components/BookDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';



export default function WorkId() {
    const router = useRouter();
    const { workId } = router.query;
    const { data, error, isLoading } = useSWR(`https://openlibrary.org/works/${workId}.json`);

    if (isLoading) {
        return null
    } else if (error || !data) {
        return <Error statusCode={404} />
    } else {
        return (<>
            <PageHeader text={data.title}/>
            <BookDetails book={data} workId={workId} />
        </>)
    }
}