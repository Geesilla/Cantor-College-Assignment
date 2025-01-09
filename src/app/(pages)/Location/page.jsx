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
                    <div className={styles.LP_Top}>
                        <div>
                                <Image src="/assets/Images/SHUSpaceCitymap.jpg" width={700} height={500} alt="Image of Cantor map"/>
                        </div>
                    </div>
                    <div>
                        <h3>How to find us:</h3>
                    </div>
                    <div>
                        <ul>
                            <li>Cantor College</li>
                            <li>Main Street</li>
                            <li>Sheffield</li>
                            <li>SC4 2BB</li>
                            
                        </ul>   
                        
                    </div>
            </div>
    )
}