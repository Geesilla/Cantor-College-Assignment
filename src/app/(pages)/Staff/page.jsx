import styles from './staff.module.css'

export default function Staff() {
    return (
<div>
            <header>
                <div>
                <h1>Information for Staff</h1>
                </div>              
            </header>
            <div>
                <div>
                    {/* <Image></Image> */}
                </div>
                <div>
                    <div className={ styles.news }>
                        <h3>
                            News
                        </h3> 
                         <p>
                            Cantor College recently hosted the Software Engineering student of the year awards. Shortlisted candidates from around the country attended the one day event.
                         </p>
                    </div>
                    <ul className={ styles.staffInfo }>
                        <li>
                            <div>
                              <h3>
                              Academic Registry
                              </h3>
                               <p>
                                For academic regulations, assessment, awards, student records and course validation.
                               </p>
                            </div>
                        </li>
                        <li>
                            <h3>
                               Catering Services
                            </h3>   
                            <p>
                              Contact the Catering Services regarding on and off-site catering.
                            </p>
                        </li>
                        <li>
                            <h3>
                            Financial Services
                            </h3>
                            <p>
                            The financial team based on the 2nd Floor are responsible for all areas of student finance as
                            well as College budgeting.
                            </p>
                        </li>
                        <li>
                            <h3>
                            Information Systems Services
                            </h3>
                            <p>
                            The ISS team delivers the College’s computing facilities including all hardware and software.
                            They also run the staff helpdesk.
                            </p>
                        </li>
                        <li>
                            <h3>
                            Marketing Services
                            </h3>
                            <p>
                            The Marketing Team will help promote events and new courses. They will help with press release preparation.
                            </p>
                        </li>
                        <li>
                            <h3>
                            Personnel Services
                            </h3>
                            <p>
                            All staff pay and conditions enquiries should be directed to the Personnel Services team on
                            the 3rd floor
                            </p>
                        </li>
                        <li>
                            <h3>Facilities</h3>
                            <p>
                            The facilities are responsible for the general care and maintenance of the College. All
                            enquiries via the main helpdesk.
                            </p>
                        </li>
                    </ul>
                  </div>
            </div>
    </div>
    );
  }