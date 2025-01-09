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
                              
                            </p>
                        </li>
                    </ul>
                  </div>
            </div>
    </div>
    );
  }