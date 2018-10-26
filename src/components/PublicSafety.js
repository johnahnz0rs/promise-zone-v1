import React from 'react';

import Metric1 from '../assets/btn-metric-1.png';
import Metric2 from '../assets/btn-metric-2.png';
import Metric3 from '../assets/btn-metric-3.png';


class PublicSafety extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        // declare methods here;
    }

    componentDidMount() {

    }

    render() {
        return(
            <React.Fragment>
                <div className="div-public-safety">

                    <div className='data row'>

                        {/*left-col*/}
                        <div className="data-text col-12 col-sm-8">

                            <h2>Public Safety</h2>

                            <p>The welfare and protection of LAPZ residents are important aspects in the work of the Los Angeles Promise Zone. LAPZ residents experience public safety incidents such as crime and traffic collisions more frequently compared to the rest of Los Angeles.</p>
                            <p>For instance, in 2012, the Promise Zone’s Part 1 violent crime rate was over twice the City-wide rate, according to data provide by LA Police Department and using Census 2010 population numbers.</p>
                            <p>The Promise Zone goals and objectives related to public safety expand upon the collaborative partnerships and work established by YPI with federal support through the BYRNE Criminal Justice Innovation Grant, focusing on strategies that promote community policing and resident engagement approaches.</p>
                            <p>The three measures the Promise Zone tracks to measure the public safety climate within the Zone are meant to illustrate a non-conventional understanding of public safety.</p>

                            <ol className="">
                                <li>
                                    <h5>Traffic Collisions (Motor Vehicles vs Pedestrians)</h5>
                                    <p>Raw number of traffic collisions, experienced within the Promise Zone borders, both by census tract and total from 2009 to 2015.</p>
                                </li>
                                <li>
                                    <h5>Number of Part 1 Crimes</h5>
                                    <p>Raw count of Part 1 crimes, defined as murder and non-negligent homicide, forcible rape, robbery, aggravated assault, burglary, motor vehicle theft, larceny-theft, and arson. By census tract and total from 2011 to 2015.</p>
                                </li>
                                <li>
                                    <h5>Number of Part 2 Crimes</h5>
                                    <p>Raw count of Part 2 crimes, defined as forgery and counterfeiting, fraud, embezzlement, stolen property, vandalism, weapons, prostitution and commercialized vice, sex offenses, drug abuse violations, gambling. By census tract and total from 2011 to 2015.</p>
                                </li>
                            </ol>
                        </div>

                        {/*<div className="col-sm-1">&nbsp;</div>*/}
                        {/*right-col*/}
                        <div className="data-metrics col-12 col-sm-3">
                            <img src={Metric1} className="img-metric" alt="A metric" />
                            <img src={Metric2} className="img-metric" alt="Another metric" />
                            <img src={Metric3} className="img-metric" alt="One more metric" />
                        </div>
                    </div>


                    <div className="maps text-center">
                        <h4 className="map-placeholder">Map goes here</h4>
                        <h4 className="map-placeholder">Map goes here</h4>
                        <h4 className="map-placeholder">Map goes here</h4>
                    </div>


                </div>

            </React.Fragment>
        );
    }


}


export default PublicSafety;
