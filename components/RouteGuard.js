import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '@/lib/authenticate';
import { favouritesAtom } from "@/store";
import { useAtom } from "jotai";
import { getFavourites } from '@/lib/userData';

const PUBLIC_PATHS = ['/login', '/_error', '/register', '/about'];

export default function RouteGuard(props) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const [favourites, setFavouritesList] = useAtom(favouritesAtom)

    async function updateAtom(){
        setFavouritesList(await getFavourites());
    }

    useEffect(() => {
        updateAtom();
        authCheck(router.pathname);
        router.events.on('routeChangeComplete', authCheck)
        return () => {
            router.events.off('routeChangeComplete', authCheck);
        }
    }, []);

    function authCheck(url) {
        const path = url.split('?')[0];
        if (!isAuthenticated() && !PUBLIC_PATHS.includes(path)) {
            setAuthorized(false);
            router.push("/login");
        } else {
            setAuthorized(true);
        }
    }

    return (
      <>
        {authorized && props.children}
      </>
    )
}