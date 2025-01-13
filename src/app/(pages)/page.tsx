import Image from "next/image"
import styles from "./page.module.css"
import Head from "next/head"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cantor College</title>
        <meta name="description" content="Welcome to the Cantor homepage" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <div className={ styles.banner}>
          <Image src="/assets/Images/CantorAtrium3.jpg" 
          fill 
          style={{ objectFit: 'cover'}}
           alt={""}
            />
            <header className={styles.header}>
            <h1>Welcome to the Cantor College Website</h1>
        </header>
      </div>
      
      <main className={styles.main}>

        <div className={ styles.landingInfo }>
            <p> The College is located in the attractive and pleasantly refurbished Building. 
                The building houses computing laboratories, and lecture/tutorial rooms. 
                It has its own catering facilities and student work areas. 
                There is also a car park to the back of the building. 
                Our building has space of 9500m², 
                houses over 240 staff and provides teaching space for more than 1600 students.
            </p>
        </div>

        <h2> Facilities  include </h2>
        <ul>
            <li> wi-fi technology </li>
            <li> pool teaching rooms, including classrooms to teach from 25 - 80 students </li>
            <li> specialist faculty facilities</li>
            <li> a double height lecture theatre at first and second floor level </li>
            <li> dramatic three-storey glass open atrium</li>
            <li> meeting rooms. </li>
            <li> office accommodation </li>
            <li> specialist IT facilities </li>
            <li> reception desk area </li>
            <li> catering outlet</li>          
            <li> parking for disabled badge holders </li>
            <li> cycle racks </li>
            <li> Galllery </li>
        </ul>
      </main>
    </div>
  );
}