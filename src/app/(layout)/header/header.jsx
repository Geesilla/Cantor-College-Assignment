import Link from "next/link"
import Image from 'next/image';
import BurgerNav from "./nav/nav";


export default function Header  ( ) {
    return (
        <header>
            <h1> 
                <Image
                src="/assets/images/CantorLogo.png"
                width={300}
                height={300}
                alt="Cantor College Logo" /> 
            </h1>
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