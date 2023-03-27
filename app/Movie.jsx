import Link from "next/link"
import Image from "next/image"

export default function Movie ({ key, id, title, poster_path, release_date }) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
                <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={id} width={320} height={240} />
            </Link>
        </div>
    )
}