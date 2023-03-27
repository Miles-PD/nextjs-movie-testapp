import Movie from "./Movie"


export default async function Home() {

  const data  = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
  const res = await data.json()
  console.log(res)

  return (
    <main>
      <div className="grid gap-8 grid-cols-fluid">
        {res.results.map((mov) => (
          <Movie
            key={mov.id}
            id={mov.id}
            title={mov.title}
            poster_path={mov.poster_path}
            release_date={mov.release_date}
            />
        ))}
      </div>
    </main>
  )
}
