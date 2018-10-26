import React from 'react';
import Metric2 from "../assets/btn-metric-2.png";
import Metric3 from "../assets/btn-metric-3.png";
import Metric1 from "../assets/btn-metric-1.png";


class Education extends React.Component {

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
                <div className="div-education">

                    <div className='data row'>

                        {/*left-col*/}
                        <div className="data-text col-12 col-sm-8">

                            <h2>Education</h2>

                            <p>Ensuring that residents in the Los Angeles Promise Zone have access to high quality schools is a crucial component of the LAPZ objectives.</p>
                            <p>The significance of being prepared for college and career is highlighted by the fact that over 35% of residents 25 and older lack a high school diploma. Two-thirds of 8th grade students in the Promise Zone are not meeting grade math proficiency standards and only 24% of 3rd grade students are meeting English Language Arts (ELA) standards.</p>
                            <p>The Promise Zone utilizes YPI’s Promise Neighborhoods framework as a template to develop strategies that increase college readiness, enrollment and graduation for students residing in the Promise Zone.</p>
                            <p>The four metrics used by the Promise Zone to measure college preparedness include:</p>

                            <ol className="">
                                <li>
                                    <h5>8th grade students at grade level in math</h5>
                                    <p>Based on the Common Core State Standards and Smarter Balanced Assessment Consortium in Mathematics; percentage meeting or exceeding requirements for years 2015 and 2016</p>
                                </li>
                                <li>
                                    <h5>3rd grade proficiency in English</h5>
                                    <p>Based on the <a href="https://www.celdt.org/" target="_blank" rel="noopener noreferrer">California English Language Development Test</a> (CELDT) scores for PZ schools; transitioned to the English Language Proficiency Assessments for California(ELPAC) by 2018. Years available: 2015, 2016.</p>
                                </li>
                                <li>
                                    <h5>Four-year graduation rate</h5>
                                    <p>Percentage of students graduating high school in PZ schools, provided by LAUSD. Years available: 2014, 2015.</p>
                                </li>
                                <li>
                                    <h5>% of 18-24 year olds enrolled in college</h5>
                                    <p>Including 2 or 4 year postsecondary institutions, from 2010 to 2014.</p>
                                </li>
                            </ol>
                        </div>

                        {/*<div className="col-sm-1">&nbsp;</div>*/}
                        {/*right-col*/}
                        <div className="data-metrics col-12 col-sm-3">
                            <img src={Metric2} className="img-metric" alt="Another metric" />
                            <img src={Metric3} className="img-metric" alt="One more metric" />
                            <img src={Metric1} className="img-metric" alt="A metric" />
                            <img src={Metric3} className="img-metric" alt="Whoa hey a fourth metric" />
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


export default Education;
