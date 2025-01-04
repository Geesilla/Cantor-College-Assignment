import { NextResponse } from "next/server";
import courses from '../../../data/courses.json';

export async function GET ( ) {

    // load your csv or  JSON and return

    // const courses = [
    //     {
    //         title: 'courseAb' , id: 'courseA'  , type: 'a'
    //     },
    //     {
    //         title: 'courseBb' , id: 'courseB' , type: 'b'
    //     },
    // ];
    return NextResponse.json( courses );
}