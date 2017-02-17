// src/components/AthletePage.js
import React from 'react';
import { Link } from 'react-router';
import { NotFoundPage } from '../pages';
import { AthletesMenu } from '../components';
import DocumentTitle from 'react-document-title';
import athletes from '../data/athletes';

export default class AthletePage extends React.Component {
  render() {
    const id = this.props.params.id;
    console.log(id)
    const athlete = athletes.filter((athlete) => athlete.id === id)[0];
    if (!athlete) {
      return <NotFoundPage/>;
    }
    return (
    <DocumentTitle title={`Dashboard`}>
      <div className="container">
          <div className="athlete-full">
            <AthletesMenu athletes={athletes}/>
            <div className="athlete">
              <div className="picture-container">

                <h2 className="name">{athlete.name}</h2>
              </div>

            </div>
            <div className="navigateBack">
              <Link to="/">« Back to the index</Link>
            </div>
          </div>
      </div>
     </DocumentTitle>
      
    );
  }
}