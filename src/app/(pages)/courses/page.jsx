'use server'
import Link from "next/link";
import { getCourses } from "./actions";

import styles from './style.module.css'
/*
        client and server relationnship.
        client - is what the user sees and interacts with ( the page ).
        the server ( is the machine either hosted or sat on localhost that deals with requests, data handling and operations. )
        http requests comes  from the client ( reqest and response )

        interacting with our server.
                1. API. ( GET , POST , PUT , DELETE ).
                2. server actions.
*/

export default async function CoursesPage ( ) {
    // const courses = await getCourses();
    const res = await fetch('http://localhost:3000/api/courses' , { cache: 'no-cache' } );
    const courses = await res.json();
    
    return (
        <div className={ styles.coursesPage}>

            <div>
                <h2> Our curriculum </h2>
                <p>
                The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.
                The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.
                The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
                </p>
            </div>

           <div className={ styles.coursesInfo }>
                <div className={ styles.courseInfo}>
                    <h3> Computing Courses </h3>
                    <p>
                        The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.
                        The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.
                        The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
                    </p>
                </div>

                <div className={ styles.courseInfo }>
                    <h3> Design Courses </h3>
                    <p>
                        The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
                        The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.
                        You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.
                    </p>
                </div> 
                    
           </div>
         
            <div className={styles.courses }>
                <h2> Courses </h2>
                <ul className={ styles.courseList }>
                    { courses.map( ( course , index ) => 
                        <li key={ index }> 
                            <Link href={`/courses/${ course.UcasCode || course.CourseTitle }`} className={ styles.courseLink }> 
                                { course.CourseTitle } 
                            </Link> 
                        </li>
                    )}
                </ul>
            </div>
          
        </div>
    )
}