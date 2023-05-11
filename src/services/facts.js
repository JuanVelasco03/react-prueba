const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/hello?size=50&color=red&json=true`;
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"

// export const getRandomFetch = () => {
//     return fetch(CAT_ENDPOINT_RANDOM_FACT)
//     .then(res => res.json())
//     .then(data => {
//         const {fact} = data;
//         return fact;
//     })
// }

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    const data = await res.json();
    const { fact } = data;
    return fact;
}

export const getImageUrl = async(words) => {
    const response = await fetch(`https://cataas.com/cat/says/${words}?size=50&color=red&json=true`)
    const data = await response.json()
    const {url} = data;
    return url
}

// export const getImageUrl = (url) => {
//     fetch(`https://cataas.com/cat/says/${url}?size=50&color=red&json=true`)
//     .then(res => res.json())
//     .then(data => {
//         const { url } = data;
//         return url;
//     })
// }

