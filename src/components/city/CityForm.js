import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import CityFormError from './CityFormError';

class CityForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            formErrors: { city: '' },
            cityValid: false,
            formValid: false            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleCitiesANDResetForm = this.handleCitiesANDResetForm.bind(this);
    }

    handleCitiesANDResetForm() {
        this.setState({ city: '' });
        this.props.fetchCities();
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let { cityValid } = this.state;
      
        switch(fieldName) {
            case 'city':
            cityValid = value.length > 3;
                fieldValidationErrors.city = cityValid ? '': ' is too short';
                break;
          default:
                break;
        }
        this.setState({ 
            formErrors: fieldValidationErrors,
            cityValid: cityValid,
            }, this.validateForm);
      }
      
    validateForm() {
        this.setState({ formValid: this.state.cityValid });
    }    

    errorClass(error) {
        return (error.length) ? 'red-text' : '';
    }

    handleChange(e) {
        const { name, value } = e.target;    
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }    

    handleClick = () => {
        this.props.submitCity(this.state.city).then(this.handleCitiesANDResetForm);
    }

    render() {
        return (
            <div style={{marginTop: "12px"}}>
                <div className="row">
                    <form onSubmit={this.props.handleSubmit(this.handleClick)} className="col s12">
                        <div className="row">
                            <div className={`input-field col s11 ${this.errorClass(this.state.formErrors.city)}`}>
                                <input 
                                    value={this.state.city} 
                                    onChange={this.handleChange} 
                                    type="text" 
                                    name="city" 
                                    className="validate" />
                                <label htmlFor="city">City Name</label>
                            </div>
                            <div className="input-field col s1" style={{marginTop: "24px"}}>
                                <button 
                                    className="waves-effect waves-light btn"
                                    disabled={!this.state.formValid} >
                                    Save
                                </button>
                            </div>         
                        </div>

                        <div className="red-text">
                            <CityFormError formErrors={this.state.formErrors} />
                        </div>           
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(reduxForm({ form: 'cityForm' })(CityForm));
