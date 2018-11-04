import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class CityList extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (!this.props.cities.length) {
            this.props.fetchCities();
        }
    }

    handleClick(cityId) {
        this.props.deleteCity(cityId);
    }

    renderCity() {
        return this.props.cities.map(city => {
            return (
                <tr key={city.id}>
                    <td className="col s3">{city.externalId}</td>
                    <td className="col s6">{city.name}</td>
                    <td className="col s2">{city.country}</td>
                    <td className="col s1"><button onClick={() => this.handleClick(city.id)} className="waves-effect waves-light btn-small">Remove</button></td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div style={{marginBottom: "20px"}}>
                <table className="responsive-table">
                    <thead className="row col s12">
                        <tr className="col s12">
                            <th className="col s3">Id</th>
                            <th className="col s6">City</th>
                            <th className="col s2">Country</th>
                            <th className="col s1"></th>
                        </tr>
                    </thead>
                    <tbody className="row col s12">
                        {this.renderCity()}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({ cities }) => ({ cities });

export default connect(mapStateToProps, actions)(CityList);