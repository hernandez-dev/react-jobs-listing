import { useContext } from "react"

// context
import AppState from "../context/AppState.js"

// components
import JobsFilter from "./JobsFilter.jsx"
import JobPost from "./JobPost.jsx"

export default function PostedJobsList(props) {
  // app state
  const { jobs } = useContext(AppState)

  return(
    <div className="relative max-w-7xl mx-auto p-10 pt-24 lg:pt-18">
      <JobsFilter />
      <section className="">
        {jobs.map(job => <JobPost key={job.id} job={job} />)}
      </section>
    </div>
  )
}
