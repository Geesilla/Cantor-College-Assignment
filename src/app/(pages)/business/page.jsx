import Image from "next/image"
import styles from style.module.css

export default function BusinessPage() {
    return (
        <div className={Styles.BusinessPage}>
            <header>
                <div>
                <h1 className={sytles.BusinessTitle}>Business Information</h1>
                </div>              
            </header>
            <div className={styles.BP_Top}>
                <div>
                    <Image></Image>
                </div>
                <div className={BusinessInfo}>
                    <p>
                    Partner with Cantor College: Unlock Expertise,
                    Innovation, and Growth
                    At Cantor College, we believe in the power of 
                    collaboration between education and industry. 
                    Our College offers a range of specialized services
                    designed to support businesses in achieving their goals
                    through cutting-edge expertise, innovation, and tailored solutions.
                    With a focus on Computing, Design, and Technology, we are 
                    uniquely positioned to help your business thrive in an increasingly digital world.
                    </p>
                </div>
                <div>
                    <ul>
                        <h3>Our Services</h3>
                        <li>1. Custom Training and Development Programs </li>
                        <p>Empower your workforce with skills that matter. Our faculty can develop custom training programs that address your business's specific needs, whether in advanced computing technologies, creative design, or the latest in tech innovation. We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences.</p>
                    </ul>
                </div>

            </div>
        </div>
    )
}