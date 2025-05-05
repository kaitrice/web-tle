'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function PreviewPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api', {
          method: 'POST',
          body: JSON.stringify({ password }),
          headers: { 'Content-Type': 'application/json' }
      })
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Preview error: ${errorData.message || res.statusText}`);
      }
      router.push('/preview')
    } catch (error) {
        console.error(error)
        setError('Incorrect password')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <input
        type="password"
        placeholder="Enter preview password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 mb-4 bg-gray-800"
      />
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600">
        Submit
      </button>
      {error && <p className="mt-2 text-red-400">{error}</p>}
    </div>
  )
}
