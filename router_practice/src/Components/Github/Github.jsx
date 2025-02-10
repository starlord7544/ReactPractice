import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // // use github api using useEffect , without loader 
    // const [data, setData] = useState([])
    // const { userName } = useParams()
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${userName}`)
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='bg-gray-500 text-3xl text-white p-3'>Github Followers : {data.followers}
            <img src={data.avatar_url} alt='avatar' className='w-60' />
        </div>
    )
}

export default Github

export const getGithubUserInfo = async () => {
    const res = await fetch(`https://api.github.com/users/starlord7544`)
    return res.json()
}