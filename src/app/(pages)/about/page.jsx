'use server'
import Image from 'next/image'
import styles from './style.module.css'


export default async function AboutPage ( ) {
    return (
        <div className={styles.AboutPage}>
            <header>
                <div className={styles.CantorBuildingImage}>
                    <h1 className={styles.AboutTitle}> About Us</h1>
                </div>
            </header>
            <div className={ styles.AP_Top }>
                    <div>
                        <Image src="/assets/Images/cantor-building-out.jpg" 
                        width={1200} height={300} alt="Picture of Cantor's building" 
                        className={styles.CantorBuilding}/>
                    </div>
                    <div className={styles.AboutInfo}>
                        <p>
                            Cantor College was established in 1989 to specialize in Computing and Design.   
                            At Cantor College, we want to give students the education they need to achieve 
                            their career aims, leaving them equipped with the knowledge, 
                            skills and experience to succeed. 
                            
                        </p>
                    </div>
            </div>
         
            <div className={ styles.AP_Bottom }>
                <div>
                    <p>
                        Cantor College gives you the opportunities that can give you the edge when you 
                        enter the world of work, through our teaching and our links to some 
                        of the world's leading researchers and employers. Our students have 
                        gone on to successful careers in a wide range of industries across the globe. 
                    </p>
                </div>
                <div>
                      <Image src="/assets/Images/CantorAtrium4.jpg" 
                        width={1200} height={300} alt="Picture of Cantor's building" 
                        className={styles.CantorBuilding}/>
                </div>
               
            </div> 
            <div className={ styles.aboutQuote }>
                <div>
                    <p> <span> " </span> 
                        Whatever your ambitions, our learning and support can help to get the most 
                        out of your time with Cantor College, both as a student and in your future 
                        career. <span> " </span>
                    </p>
                </div>
                    
            </div>
        </div>
    )
}