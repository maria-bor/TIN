import React, { Component } from 'react';
import Input from './Input/Input.js';
import Button from './Button.js'
import './../../src/App.css';
import Label from './../Task1/Label'
import Error from './../Task1/Text'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            newUser: {
                name: "",
                age: "",
                email: ""
            },
            errors: {},
            msg: '',
        }
        this.handleInput = this.handleInput.bind(this);
        // this.nameChangeHandler = this.nameChangeHandler.bind(this);
        // this.ageChangeHandler = this.ageChangeHandler.bind(this);
        // this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(prev => {
            return {
                newUser: {
                    ...prev.newUser, [name]: value
                }
            }
        }
        )
    }

    // nameChangeHandler(e) {
    //     let value = e.target.value;
    //     this.setState(prev => ({
    //         newUser:
    //         {
    //             ...prev.newUser, name: value
    //         }
    //     }))
    // }

    // ageChangeHandler(e) {
    //     let value = e.target.value;
    //     this.setState(prev => ({
    //         newUser:
    //         {
    //             ...prev.newUser, age: value
    //         }
    //     }))
    // }

    // emailChangeHandler(e) {
    //     let value = e.target.value;
    //     this.setState(prev => ({
    //         newUser:
    //         {
    //             ...prev.newUser, email: value
    //         }
    //     }))
    // }

    handleFormSubmit(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let msg = "Wszystkie pola wypełnione prawidłowo!";
            this.setState({ msg: msg });
        }
        else {
            let msg = "Nie wszystkie pola wypełnione prawidłowo!";
            this.setState({ msg: msg });
        }
    }

    validateForm() {
        let newUser = this.state.newUser;
        let errors = {};
        let msg = this.state.msg;
        let formIsValid = true;

        if (!newUser.name) {
            formIsValid = false;
            errors["name"] = "*Proszę, wprowadź swoje imię.";
        }
        if (typeof newUser.name !== "undefined") {
            if (!newUser.name.match(/^[a-zA-Z]{3,20}?$/)) {
                formIsValid = false;
                errors["name"] = "*Wprowadź od 3 do 20 liter.";
            }
        }

        if (!newUser.age) {
            formIsValid = false;
            errors["age"] = "*Proszę, wprowadź swój wiek.";
        }
        if (typeof newUser.age !== "undefined") {
            if (!newUser["age"].match(/^[1-9]{1}[0-9]{0,1}$/)) {
                formIsValid = false;
                errors["age"] = "*Tylko liczby dozwolone.";
                if (newUser["age"] > 100) {
                    errors["age"] = "*Wprowadź wiek poniżej 100 lat.";
                }
            }
        }

        if (!newUser.email) {
            formIsValid = false;
            errors["email"] = "*Proszę, wprowadź swój email.";
        }
        else if (typeof newUser.email !== "undefined") {
            if (!(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/).test(newUser["email"])) {
                formIsValid = false;
                errors["email"] = "*Niepoprawny format.";
            }
        }

        this.setState({
            errors: errors,
            msg: msg
        });
        return formIsValid;
    }

    render() {
        return (
            <div className="d-flex flex-row">
                <div className="p-2" style={{ width: '400px' }}>
                    <form className="container-fluid">
                        <h2>Formularz</h2>
                        <Input
                            type={'text'}
                            title={'Wprowadź swoje imię: '}
                            name={'name'}
                            value={this.state.newUser.name}
                            placeholder={'Podaj imię'}
                            onChange={this.handleInput}
                        />
                        <Error style={errorMsg} name={this.state.errors.name} />

                        <Input type={'text'}
                            title={'Wprowadź swój wiek: '}
                            name={'age'}
                            value={this.state.newUser.age}
                            placeholder={'Podaj wiek'}
                            onChange={this.handleInput}
                        />
                        <Error style={errorMsg} name={this.state.errors.age} />


                        <Input type={'text'}
                            title={'Wprowadź swój email: '}
                            name={'email'}
                            value={this.state.newUser.email}
                            placeholder={'Podaj email'}
                            onChange={this.handleInput}
                        />
                        <Error style={errorMsg} name={this.state.errors.email} />

                        <Button action={this.handleFormSubmit}
                            type={"btn btn-primary"}
                            title={"Zaloguj się"}
                            style={buttonStyle} />
                    </form>
                </div>
                <div className="p-2" style={{ width: '600px', marginLeft: '80px' }}>
                    <h2>Wartości</h2>
                    <Label
                        name={"Wprowadź swoje imię: "}
                        value={this.state.newUser.name}
                    />
                    <Label
                        name={"Wprowadź swój wiek: "}
                        value={this.state.newUser.age}
                    /><Label
                        name={"Wprowadź swój email: "}
                        value={this.state.newUser.email}
                    />
                    <Error style={errorMsgForm} name={this.state.msg} />
                </div>
            </div>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};
const errorMsg = {
    color: '#cc0000',
    marginBottom: '36px',
}
const errorMsgForm = {
    display: 'inline-block',
    border: '1px solid #eee',
    boxShadow: '0 2px 2px #ccc',
    width: '350px',
    padding: '20px',
}

export default Form;