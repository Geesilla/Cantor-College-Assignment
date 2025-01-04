'use server'
import Link from "next/link";
import { getCourses } from "./actions";

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
        <div>
            <h1> Courses </h1>
            <ul>
                { courses.map( ( course , index ) => 
                    <li key={ index }> 
                        <Link href={`/courses/${ course.UcasCode}`}> 
                            { course.CourseTitle } 
                        </Link> 
                    </li>
                )}
            </ul>
        </div>
    )
}