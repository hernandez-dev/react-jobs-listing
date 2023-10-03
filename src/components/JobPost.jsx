export default function JobPost({ job }) {
  return(
    <article className={`relative p-5 bg-white mt-16 border-l-4 ${job.featured ? 'border-desaturated-dark-cyan' : 'border-white'} rounded-lg shadow-lg shadow-desaturated-dark-cyan/30 lg:flex lg:items-center lg:p-8 lg:mt-10`}>
      <div className="hidden lg:block lg:w-20">
        <img
          src={job.logo}
          alt={job.name}
          className="block w-full"
        />
      </div>
      <div className="pt-6 space-y-5 lg:flex-1 lg:pt-0 lg:ml-6">
        <h2 className="flex items-center text-desaturated-dark-cyan font-bold">
          {job.company}
          {job.new ? (
            <span className="inline-block p-1 px-2 ml-4 bg-desaturated-dark-cyan rounded-full text-xs text-primary uppercase">
              new!
            </span>
          ) : ''}
          {job.featured ? (
            <span className="inline-block p-1 px-2 ml-2 bg-very-dark-grayish-cyan rounded-full text-xs text-primary uppercase">
              feature
            </span>
          ) : ''}
        </h2>
        <a
          href="#"
          className="inline-block font-bold text-lg text-very-dark-grayish-cyan capitalize leading-none hover:text-desaturated-dark-cyan"
        >
          {job.position}
        </a>
        <p className="text-very-dark-grayish-cyan/70 capitalize leading-none">
          {job.postedAt} . {job.contract} . {job.location}
        </p>
      </div>
      <div className="pt-5 mt-6 border-t border-very-dark-grayish-cyan/30 lg:pt-0 lg:border-none">
        {job.languages.map(language => (
          <button
            key={language}
            className="inline-block bg-primary px-4 ml-4 first:ml-0 rounded-md font-bold text-sm text-center text-desaturated-dark-cyan leading-10 transition duration-100 hover:bg-desaturated-dark-cyan hover:text-primary"
          >
            {language}
          </button>
        ))}
      </div>
      <div className="absolute top-0 left-5 z-5 -translate-y-1/2 w-16 lg:hidden">
        <img
          src={job.logo}
          alt={job.name}
          className="block w-full"
        />
      </div>
    </article>
  )
}
