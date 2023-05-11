import React, { useEffect, useState } from 'react'
import '../app.css'
import { getImageUrl, getRandomFact } from '../services/facts'
import {useCatImage} from '../hooks/useCatImage'
import { useCatFact } from '../hooks/useCatFact'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/hello?size=50&color=red&json=true`;
// const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"


export const Palabra = () => {

    const {fact, refreshFact} = useCatFact();
    const {imageUrl} = useCatImage({fact});

    console.log(fact)
    // useEffect(() => {
    //     getRandomFact().then(newFact => {
    //         setFact(newFact)
    //     })
    // }, [])

    const handleClick = async () => {
        // const newFact = await getRandomFact()
        // setFact(newFact)
        refreshFact();
    }

    // useEffect(() => {
    //     if(!fact) return;
    //     getImageUrl(fact)
    //     .then(url => setImageUrl(url))
    //     .catch(err => {throw new Error("Fallo la conexion a la api")})
    // }, [fact])

    // const firstWord = fact.split(" ", 1).join()
    // console.log(firstWord)


    // useEffect(() => {
    //     const firstWord = fact.split(" ", 1).join()
    //     getImageUrl(firstWord).then(newUrl => setImageUrl(newUrl))
    // }, [])


    // useEffect(() => {
    //     if (!fact) return;
    //     // const firstWord = fact.split(" ").slice(0, 3).join();
    //     const firstWord = fact.split(" ", 1).join()
    //     fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const { url } = data;
    //             setImageUrl(url)
    //         })
    //         .catch(err => console.log(err));

    // }, [fact])

    // const getRandomFact = () => {
    //     fetch(CAT_ENDPOINT_RANDOM_FACT)
    //     .then(res => res.json())
    //     .then(data => {
    //         const {fact} = data;
    //         setFact(fact)
    //     })
    // }


    // const getImageFromEndpoint = async(firstWord) => {
    //     const response = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
    //     const data = await response.json();
    //     setDataImage(data)
    // }

    return (
        <main>
            <div>{fact && <p>{fact}</p>}</div>
            <div>{imageUrl && <img src={`https://cataas.com${imageUrl}`} alt={"Imagen"} />}
                <button onClick={handleClick}>Get new Image</button>
            </div>
        </main>

    )
}
