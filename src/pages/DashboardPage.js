import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import { AthletePreview } from '../components'
import athletes from '../data/athletes';


export default class DashboardPage extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Dashboard`}>
      <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Dashboard</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="ol">
                 {athletes.map(function(athleteData){
                     return <AthletePreview key={athleteData.id}{...athleteData}/>
                 })}
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}