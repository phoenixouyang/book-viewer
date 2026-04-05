import { getToken } from './authenticate.js'

export async function addToFavourites(id) {
    token = getToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `JWT ${token}`
        }
    });
    if (res.status === 200) {
        return await res.json();
    } else {
        return [];
    }
}

export async function removeFromFavourites(id) {
    token = getToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `JWT ${token}`
        }
    })
    if (res.status === 200) {
        return await res.json();
    } else {
        return [];
    }
}

export async function getFavourites() {
    token = getToken();
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/favourites`, {
        method: 'GET',
        headers: {
            'Authorization': `JWT ${token}`
        }
    })
    if (res.status === 200) {
        return await res.json();
    } else {
        return [];
    }
}