import { useState, useEffect } from 'react'

// components
import { JobPost } from "./components/"

function App() {
  // state
  const [jobs, setJobs] = useState([])

  // component mounted
  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch("/data.json")
        const jobs = await response.json()
        console.log(jobs)
        setJobs(jobs)
      } catch (e) {
        console.log(e)
      }
    }
    fetchJobs()
  }, [])

  return (
    <main className="">
      <div className="bg-desaturated-dark-cyan">
        <picture>
          <source media="(min-width:768px)" srcset="/images/bg-header.svg" />
          <img
            src="/images/bg-header-mobile.svg"
            alt="top section image"
            className="block w-full"
          />
        </picture>
      </div>
      <div className="max-w-6xl mx-auto p-10 pt-0">
        {jobs.map(job => <JobPost key={job.id} job={job} />)}
      </div>
    </main>
  )
}

export default App
