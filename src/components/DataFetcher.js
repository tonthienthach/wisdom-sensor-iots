// src/components/DataFetcher.js
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetcher = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Hàm gọi API
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/data')
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, []) // Mảng dependency rỗng để chỉ gọi API một lần khi component mount

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            <h2>Data from API</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default DataFetcher
