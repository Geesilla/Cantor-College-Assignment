'use server'
import Image from "next/image"

export default async function CoursePage ({ params } ) {
    const { slug } = await params;

    // const courses = await getCourses();
    const res = await fetch( `http://localhost:3000/api/course?id=${slug}` , { cache: 'no-cache' } );
    const course = await res.json();

    console.log( course );

    // // if ( course.status == 500 ) {
    //         return (
    //             <div> response </div>
    //         )
    // // }
     
    return (
        <div>
            Course: { slug }
            <Image src='/assets/Cantor4.jpg' width={200} height={ 200} alt="img"/>
            <div>
                { course &&
                    <div>
                            <h2> { course.CourseTitle } </h2>
                            <h3> { course.UcasPoints  } </h3>
                    </div>
                }
            </div>
        </div>
    )
}