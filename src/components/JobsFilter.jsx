import { useContext } from "react"

// context
import AppState from "../context/AppState.js"
import AppDispatch from "../context/AppDispatch.js"

export default function JobsFilter(props) {
  // app state
  const { languages } = useContext(AppState)

  // app dispatch
  const appDispatch = useContext(AppDispatch)

  return(
    <div className={`absolute top-0 left-0 z-10 w-full px-10 ${languages.length ? '-translate-y-1/2' : 'opacity-0'} transition duration-300`}>
      <div className="flex p-4 bg-white rounded-md shadow-lg shadow-desaturated-dark-cyan/30">
        <div className="flex items-center flex-1">
          {languages.map(language => (
            <div
              key={language}
              className="flex items-center bg-primary rounded-md ml-4 first:ml-0 overflow-hidden"
            >
              <span className="inline-block px-4 font-semibold text-desaturated-dark-cyan capitalize">
                {language}
              </span>
              <button
                className="block w-8 h-8 bg-desaturated-dark-cyan text-primary leading-8"
                onClick={() => appDispatch({ type: "remove-filter-language", value: language })}
              >
                <i className="fa-solid fa-times" />
              </button>
            </div>
          ))}
        </div>
        <button
          className="block px-2 font-semibold text-center text-desaturated-dark-cyan capitalize leading-8 hover:underline"
          onClick={() => appDispatch({ type: "clear-filter-languages" })}
        >
          clear
        </button>
      </div>
    </div>
  )
}
