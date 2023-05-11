import React, { useEffect, useState } from 'react'
import { getImageUrl, getRandomFact } from '../services/facts'

export const useCatFact = () => {
    const [fact, setFact] = useState();

    const refreshFact = () => {
        getRandomFact().then(setFact)
    }

    useEffect(refreshFact, [])

    return {fact, refreshFact};
}