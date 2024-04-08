import React from 'react'
import axios from 'axios'

export async function fetchProtectedResource() {
    try {
        const response = await apiClient.get('protected-resource/')
        return response.data
    } catch (error) {
        console.error('Failed to fetch protected resource', error)
        throw error
    }
}