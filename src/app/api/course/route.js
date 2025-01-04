import { NextResponse } from "next/server";
import courses from '../../../data/courses.json';

export async function GET ( request , response ) {
    // we need to figure out what course we want.
    const { searchParams } = new URL( request.url );
    const id = searchParams.get('id');
    
    const course = courses.find( ( course ) => course.UcasCode === id );
    console.log( course )
    return NextResponse.json( course );
}