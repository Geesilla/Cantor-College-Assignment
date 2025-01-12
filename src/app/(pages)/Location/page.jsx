import Image from "next/image"
import styles from "./styles.module.css"

export default function Location () {
    return(
            <div className={styles.LocationPage}>
                <header>
                    <div>
                        <h1 className={styles.LocationTitle}>How to Find Us</h1>
                    </div> 
                </header>
                <div className={ styles.container }>
                     <div className={styles.image}>
                           <Image src="/assets/Images/SHUSpaceCitymap.jpg" fill alt="Image of Campus map"/>
                    </div>
                    <div className={ styles.location }>
                        <h3>Our Address</h3>      
                        <ul>
                            <li>Cantor College</li>
                            <li>Main Street</li>
                            <li>Sheffield</li>
                            <li>SC4 2BB</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}