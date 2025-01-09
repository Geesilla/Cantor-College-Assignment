'use server'
import Image from 'next/image'
import styles from './style.module.css'

export default async function BusinessPage() {
    return (
        <div className={styles.BusinessPage}>
            <header>
                <div>
                <h1 className={styles.BusinessTitle}>Business Information</h1>
                </div>              
            </header>
            <div className={styles.BP_Top}>
                <div>
                    {/* <Image></Image> */}
                </div>
                <div className={styles.BusinessInfo}>
                    <div>
                        <h2>Partner with Cantor College: Unlock Expertise,
                    Innovation, and Growth
                        </h2>
                    </div>
                    <div>
                        <p>
                        At Cantor College, we believe in the power of 
                        collaboration between education and industry. 
                        Our College offers a range of specialized services
                        designed to support businesses in achieving their goals
                        through cutting-edge expertise, innovation, and tailored solutions.
                        With a focus on Computing, Design, and Technology, we are 
                        uniquely positioned to help your business thrive in an increasingly digital world.
                    </p>
                    </div>
                </div>
                <div className={ styles.services }>                        
                    <div>
                        <h3>Our Services</h3>
                    </div>
                    <ol>
                        <li>
                            <strong>Custom Training and Development Programs</strong>
                            <p>Empower your workforce with skills that matter. Our faculty can develop custom training programs that address your 
                            business's specific needs, whether in advanced computing technologies, creative design, or the latest in tech innovation.
                             We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences.</p>
                        </li>
                        <li>
                            <strong>Research and Development Partnerships</strong> 
                            <p>Leverage the talent and creativity of our students and faculty by partnering with Cantor College on research and development
                             projects. Whether you’re looking to explore new technologies, innovate your product line, or solve complex technical challenges, 
                             our R&D team is ready to collaborate with you.</p>
                        </li>
                        <li>
                            <strong>Design and Technology Consultancy </strong>
                            <p>Our experienced professionals and top-tier students can provide consultancy services to help you with a variety of projects,
                             from web development and software engineering to product design and user experience optimization. We offer fresh perspectives
                              and innovative approaches tailored to your business.</p>
                        </li>
                        <li>
                            <strong>Internships and Graduate Recruitment</strong>
                            <p>Gain access to a pool of highly skilled and motivated students ready to contribute to your business. Our internship and recruitment
                             services can connect you with top talent in computing, design, and technology, providing you with candidates who are equipped with
                              the latest industry knowledge and practical experience.</p>
                        </li>
                        <li>
                            <strong>Event Hosting and Sponsorship </strong>
                            <p>Cantor College hosts a range of events throughout the year, including hackathons, design challenges, and technology expos. We offer
                             businesses the opportunity to sponsor events or collaborate in their organization, giving you direct access to the brightest minds
                              in the field and the chance to showcase your brand to our community.</p>
                        </li>
                    </ol>
                </div>

                <div className={ styles.explanation }> 
                    <div>
                        <h3>Why Partner with Cantor College?</h3>
                    </div>
                    <ul>
                        <li>
                            <strong>Cutting-Edge Expertise:</strong>
                            <p> Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design.</p>
                        </li>
                        <li>
                            <strong>Innovation at the Core:</strong>
                            <p>We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions.</p>
                        </li>
                        <li>
                            <strong>Tailored Solutions:</strong>
                            <p>We understand that every business is unique. Our services are customized to meet your specific objectives and challenges.</p>
                        </li>
                        <li>
                            <strong>Future-Ready Talent:</strong>
                            <p>Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills.</p>
                        </li>
                    </ul>
                </div>
              
                <div>
                    <h3>Get in Touch</h3>
                </div>
                <div>
                    <p>Ready to explore how Cantor College can help your business grow?
                         Contact our Business Services team today to discuss your needs 
                         and learn more about our offerings. We look forward to working 
                         with you to achieve your business goals.
                    </p>
                </div>
            </div>
        </div>
    )
}