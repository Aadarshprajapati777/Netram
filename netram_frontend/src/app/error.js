"use client"

export default function Error({ error }) {
    return (
        <main>
        <h1>Oops!</h1>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        </main>
    )
    }

    // Path: src/pages/_error.js
    // This is the default Error Boundary for the entire app
    // It will catch any errors that are not caught by other Error Boundaries
    // and render a generic error page
