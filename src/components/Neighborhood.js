import React from 'react';
import Metric2 from "../assets/btn-metric-2.png";
import Metric3 from "../assets/btn-metric-3.png";
import Metric1 from "../assets/btn-metric-1.png";


class Neighborhood extends React.Component {

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
                <div className="div-neighborhood">

                    <div className='data row'>

                        {/*left-col*/}
                        <div className="data-text col-12 col-sm-8">

                            <h2>Neighborhood</h2>

                            <p>The Los Angeles Promise Zone initiative is dedicated to making PZ communities more sustainable and livable.</p>
                            <p>Renters currently occupy about 93% of housing in the Zone. Over half of these renters are rent-burdened (paying 30% or more of income for rent), and one third are severely rent burdened (paying 50% or more of income for rent).</p>
                            <p>Homelessness in the PZ also indicates that existing housing stock does not align with demand; 3,000 PZ residents experience homelessness at any given time.</p>
                            <p>The Promise Zone initiative pursues a holistic vision for its communities, focusing on addressing housing-related needs while also investing in community benefitting infrastructure such as improving access to fresh food, parks, clean streets, and non-automotive transit options.</p>

                            <p>The three metrics used by the Promise Zone to measure sustainability and livability include:</p>

                            <ol className="">
                                <li>
                                    <h5>Housing Affordability</h5>
                                    <p>Percentage of households experiencing rent burden, determined by dividing gross rent by gross income; based on American Community Survey data.</p>
                                </li>
                                <li>
                                    <h5>Homeless Population</h5>
                                    <p>New and total number of jobs within and around the Promise Zone boundaries; based on American Community Survey data.</p>
                                </li>
                                <li>
                                    <h5>Acceptably Clean Streets</h5>
                                    <p>Percent of streets within the PZ that are either “clean” or “acceptably clean” according to the City of LA’s Clean Streets Index.</p>
                                </li>
                            </ol>
                        </div>

                        {/*<div className="col-sm-1">&nbsp;</div>*/}
                        {/*right-col*/}
                        <div className="data-metrics col-12 col-sm-3">
                            <img src={Metric3} className="img-metric" alt="One more metric" />
                            <img src={Metric1} className="img-metric" alt="A metric" />
                            <img src={Metric2} className="img-metric" alt="Another metric" />
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


export default Neighborhood;
