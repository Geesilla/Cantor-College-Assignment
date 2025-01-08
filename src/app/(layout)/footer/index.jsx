import styles from './style.module.css'

export default function Footer ( ) {
    return (
        <footer className={ styles.footer }>
            <div>
                <h3> Located at: </h3>
                <ul>
                    <li> Cantor College , Main Street </li>
                    <li> Sheffield </li>
                    <li> SC4 2BB </li>
                </ul>
            </div>
            <div>
                <h3> Contact us by </h3>
                <ul>
                    <li> Tel:(01321) 2340 235  </li>
                    <li> Fax: (01321) 2340 236 </li>
                    <li> Email: info@cantorcollege.ac.uk </li>
                </ul>
            </div>
        </footer>
    )
}
 