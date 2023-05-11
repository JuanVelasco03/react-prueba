import React, { useEffect, useState } from 'react'

export const useCatImage = ({fact}) => {
    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        if (!fact) return;
        // const firstWord = fact.split(" ").slice(0, 3).join();
        const firstWord = fact.split(" ", 1).join()
        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(data => {
                const { url } = data;
                setImageUrl(url)
            })
            .catch(err => console.log(err));

    }, [fact])

    return {imageUrl: `https://cataas.com${imageUrl}`};
}