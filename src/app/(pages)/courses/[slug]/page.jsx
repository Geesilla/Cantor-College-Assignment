'use server'
import Image from "next/image"
import styles from './style.module.css'


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

    /*
      "CourseTitle": "Computing",
      "CourseType": "Undergraduate",
      "CourseSummary": "Learn how to code, configure and integrate applications, databases and systems architectures which form the pillars of modern technology in today&rsquo;s world.",
      "CourseAwardName": "BSc (Honours)",
      "UcasCode": "G504",
      "UcasPoints": 112,
      "YearOfEntry": "2025/26",
      "ModeOfAttendance": "Full-time",
      "StudyLength": "3 / 4 Years",
      "HasFoundationYear": false,
      "CourseSubject": "Computing",
      "NoLongerRecruiting": false
    */
     
    return (
        <div className={ styles.CoursePage }>

            {/* <Image src='/assets/Cantor4.jpg' width={200} height={ 200} alt="img"/> */}
                { course &&
                <>
                    <header>
                        <h2 className={ styles.CourseTitle }> 
                            { course.CourseTitle }  
                            <span > { course.CourseType } degree </span>
                        </h2>
                    </header> 

                    { !course.UcasPoints &&
                        <div>
                                This course is missing some important info 
                        </div>
                    }
                

                    <main className={ styles.CourseInfo }>  
                        <div>
                            <h3> Course info </h3>
                            <ul>
                                <li> start date: { course.YearOfEntry } </li>
                                <li> { course.StudyLength } at { course.ModeOfAttendance } </li>
                                <li> { course.CourseAwardName } </li>
                            </ul>
                        </div>
                       
                        <div>
                            <h3> Course Summary </h3>
                            <p> { course.CourseSummary } </p>
                        </div>
                    
                        <div>
                           { !course.UcasPoints ? (
                                <div>
                                    No UCAS points available
                                </div>
                           ) : (
                                <h3> 
                                    <span> { course.UcasPoints  }  </span>
                                    ucasPoints
                                </h3>
                           )}
                        </div>
                    </main>   
                </>
                }
        </div>
    )
}