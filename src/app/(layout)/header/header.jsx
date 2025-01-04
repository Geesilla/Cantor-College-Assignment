import Link from "next/link"

export default function Header  ( ) {
    return (
        <header>
            <h1> My App </h1>
            <nav>
                <ul> 
                    <li> <Link href='/about'> about </Link> </li>
                    <li> <Link href='/courses'> courses </Link> </li>
                    <li> <Link href='/info'> info </Link> </li>
                </ul>
            </nav>
        </header>
    )
}