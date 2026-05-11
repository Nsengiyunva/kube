import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:9001'}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        return response.text()
      })
      .then((data) => {
        setMessage(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          This is the Front end React App
        </div>

        <div style={{ marginTop: '20px' }}>
          {loading && <p>Loading...</p>}

          {error && (
            <p style={{ color: 'red' }}>
              Error: {error}
            </p>
          )}

          {!loading && !error && (
            <p>
              Backend Response: {message}
            </p>
          )}
        </div>
      </section>
    </>
  )
}

export default App