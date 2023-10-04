import { useState, useEffect } from 'react'
import { useImmerReducer } from "use-immer"

// context
import AppState from "./context/AppState.js"
import AppDispatch from "./context/AppDispatch.js"

// components
import {
  PostedJobsList,
  JobPost
} from "./components/"

function App() {
  // initialState
  const initialState = {
    jobs: [],
    languages: []
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-jobs":
        draft.jobs = action.value
        break
      case "insert-filter-language":
        draft.languages.push(action.value)
        break
      case "remove-filter-language":
        draft.languages = draft.languages.filter(language => language.toLowerCase() != action.value.toLowerCase())
        break
      case "clear-filter-languages":
        draft.languages = []
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  // component mounted
  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch("/data.json")
        const jobs = await response.json()
        dispatch({ type: "set-jobs", value: jobs })
      } catch (e) {
        console.log(e)
      }
    }
    fetchJobs()
  }, [])

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        <main className="">
          <div className="relative bg-desaturated-dark-cyan">
            <picture>
              <source media="(min-width:768px)" srcset="/images/bg-header.svg" />
              <img
                src="/images/bg-header-mobile.svg"
                alt="top section image"
                className="block w-full"
              />
            </picture>
          </div>
          <PostedJobsList />
        </main>
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}

export default App
