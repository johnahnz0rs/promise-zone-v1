import React from 'react';
import Metric1 from "../assets/btn-metric-1.png";
import Metric2 from "../assets/btn-metric-2.png";
import Metric3 from "../assets/btn-metric-3.png";


class EconomicOpportunity extends React.Component {

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
                <div className="div-economic-opportunity">

                    <div className='data row'>

                        {/*left-col*/}
                        <div className="data-text col-12 col-sm-8">

                            <h2>Economic Opportunity</h2>

                            <p>Improved educational outcomes, public safety, and community sustainability closely connect to the economic health of households and businesses in the Los Angeles Promise Zone.</p>
                            <p>With 25% of Promise Zone households earning less than $15,000 a year, the PZ strives to increase accessible, quality employment opportunities as well as financial literacy among its residents.</p>
                            <p>These efforts align with strengthening the numerous small businesses in and around the Zone where over half of workers in the PZ are employed.</p>
                            <p>In addition, the initiative aims to emphasize the rich cultural treasures that each community has to offer, drawing the attention of consumers and investors alike.</p>
                            <p>The three metrics used by the Promise Zone to measure economic opportunity include:</p>

                            <ol className="">
                                <li>
                                    <h5>Federal Poverty Line</h5>
                                    <p>Percentage of households earning income below the federal poverty line, based on American Community Survey data. The ACS determines poverty status by comparing a household’s gross cash income against a threshold of three times the cost of a minimum food diet in 1963. This threshold is updated annually for inflation and adjusted for family size, composition, and age of the head of household.</p>
                                </li>
                                <li>
                                    <h5>Job Creation</h5>
                                    <p>Total number of jobs created, based on the Longitudinal Employer-Household Dynamics (LEHD) Origin-Destination Employment Statistics (LODES), version 7, from 2010-2014.</p>
                                </li>
                                <li>
                                    <h5>Private Investments</h5>
                                    <p>Dollar amount of total valuation for all construction permits, both commercial and residential, for new and existing buildings, based on data from the Los Angeles Department of Building and Safety.</p>
                                </li>
                            </ol>
                        </div>

                        {/*<div className="col-sm-1">&nbsp;</div>*/}
                        {/*right-col*/}
                        <div className="data-metrics col-12 col-sm-3">
                            <img src={Metric2} className="img-metric" alt="Another metric" />
                            <img src={Metric3} className="img-metric" alt="One more metric" />
                            <img src={Metric1} className="img-metric" alt="A metric" />
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


export default EconomicOpportunity;
