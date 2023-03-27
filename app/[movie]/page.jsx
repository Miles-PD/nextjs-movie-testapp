import Image from "next/image"

export async function generateStaticParams() {
    const data  = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
        )
      const res = await data.json()
      return res.results((mov) => ({
        movie: toString(mov.id)
      }) )
}

export default async function MovieDetail({ params }) {

    const { movie } = params

    const data  = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1`, 
    {next: { revalidate: 60 }})
    const res = await data.json()

    return (
        <>
            <div className="text-2xl">{res.title}</div>
            <div className="text-sm ">{res.release_date}</div>
            <div className="text-sm">{res.runtime} minutes</div>
            <div className="bg-green-500 inline-block mt-2 p-2 rounded">{res.status}</div>
            <Image 
                src={`https://image.tmdb.org/t/p/original${res.backdrop_path}`} 
                width={1000} 
                height={1000} 
                className='my-12 w-full'
                priority />
            <p>{res.overview}</p>
        </>
    )
}