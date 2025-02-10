import { useEffect, useState } from "react";

import React from 'react'

const useCurrencyInfo = (currency) => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo