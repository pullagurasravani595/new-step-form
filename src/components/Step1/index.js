import {Component} from 'react'
import Step from '../../context/Step'
import './index.css'

class Step1 extends Component {
    state = {name: "", email: "", phoneNumber: ""}

    changeName = event => {
        this.setState({name: event.target.value})
    }

    changeEmail = event => {
        this.setState({email: event.target.value})
    }

    changePhoneNumber = event => {
        this.setState({phoneNumber: event.target.value})
    }

    render() {
        const {name, email, phoneNumber} = this.state 
        const detailsItem = {
            name,
            email,
            phoneNumber
        }

        return(
            <Step.Consumer>
                {value => {
                    const {step,increaseStep, detailsList, updateList} = value
                    const clickNextStep = () => {
                        increaseStep()
                        updateList(detailsItem)
                    }
                    console.log(step)
                    return (
                        <div className="step-one-container">
                            <div className='image-container'>
                                <img src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1699450528/bg-sidebar-desktop_zdpsoa.svg" alt="step1" className='step-1-img'/>
                            </div>
                            <div>
                                <h1>Personal Info</h1>
                                <p>Please provide your name, email address and phone number</p>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" placeholder="e.g. Stephen King" value={name} onChange={this.changeName}/>
                                </div>
                                <div>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="text" id="email" placeholder="e.g. stephenking@lorem.com" value={email} onChange={this.changeEmail}/>
                                </div>
                                <div>
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <input type="text" id="phonenumber" placeholder="e.g. +1234567890" value={phoneNumber} onChange={this.changePhoneNumber} />
                                </div>
                                <button onClick={clickNextStep} type="button">Next Step</button>
                            </div>
                        </div>

                    )
                }}
            </Step.Consumer>
        )
        
    }
}


export default Step1 
    