import React from 'react';
import { Route } from 'react-router-dom';

// each component is a "page" on the website;
import Home from './Home';
import EconomicOpportunity from './EconomicOpportunity';
import Education from './Education';
import PublicSafety from './PublicSafety';
import Neighborhood from './Neighborhood';

// temporarily using screenshots for the buttons;
// can be custom-built later on;
import BtnEcon from '../assets/btn-economic-opportunities.png';
import BtnEdu from '../assets/btn-education.png';
import BtnPublic from '../assets/btn-public-safety.png';
import BtnNeighborhood from '../assets/btn-neighborhood.png';


const ContentArea = props => {

    return (
        <React.Fragment>
            <div className="root-div">




                <div className="home-top">
                    <h1>Current Performance</h1>
                    <p>Below is a category breakdown of Los Angeles' Promise Zone goals. It is the first comprehensive vision for education, community, economy, and public safety.</p>
                    <p>The scorecards in each area are red, gray, or green -- indication positive or negative progress.</p>

                    <div className="row text-center nav-buttons-row">

                        <button className="btn btn-economic-opportunities btn-working-group col-6 col-sm-3">
                            <img src={BtnEcon} className="img-working-group" alt="Economic Development" onClick={() => window.location='/economic-opportunity'} />
                        </button>

                        <button className="btn btn-education btn-working-group col-6 col-sm-3">
                            <img src={BtnEdu} className="img-working-group" alt="Economic Development" onClick={() => window.location = '/education'}/>
                        </button>

                        <button className="btn btn-public-safety btn-working-group col-6 col-sm-3">
                            <img src={BtnPublic} className="img-working-group" alt="Economic Development" onClick={() => window.location = '/public-safety'}/>
                        </button>

                        <button className="btn btn-neighborhood btn-working-group col-6 col-sm-3">
                            <img src={BtnNeighborhood} className="img-working-group" alt="Economic Development" onClick={() => window.location = '/neighborhood'}/>
                        </button>
                    </div>
                </div>




                <div className="data-vis">
                    <Route exact path="/" component={Home} />
                    <Route path="/economic-opportunity" component={EconomicOpportunity} />
                    <Route path="/education" component={Education} />
                    <Route path="/public-safety" component={PublicSafety} />
                    <Route path="/neighborhood" component={Neighborhood} />
                </div>


            </div>
        </React.Fragment>
    );

};

export default ContentArea;
