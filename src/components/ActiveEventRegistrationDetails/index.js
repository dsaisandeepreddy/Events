// Write your code here
import {Component} from 'react'
import './index.css'

const ApiStatusConstant = {initial: 'INITIAL'}

class ActiveEventRegistrationDetails extends Component {
  REGISTRATIONS_CLOSED = () => (
    <div>
      <img
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen </p>
      <p>the registrations soon</p>
    </div>
  )

  REGISTEREDData = () => (
    <div>
      <img
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      />
      <h1>you have already registered for the event</h1>
    </div>
  )

  YET_TO_REGISTER = () => (
    <div>
      <img
        className="image-data"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p>
        A live performance brings so much to your relationship with dance seeing
        dance live can often make you fall totally in love with this beautiful
        art form
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  render() {
    const {apiData} = this.props
    if (apiData === '') {
      this.setState({apiData: ApiStatusConstant.initial})
    }
    switch (apiData) {
      case ApiStatusConstant.initial:
        return <p>Click on an event, to view its registration details</p>
      case 'YET_TO_REGISTER':
        return this.YET_TO_REGISTER()
      case 'REGISTERED':
        return this.REGISTEREDData()
      case 'REGISTRATIONS_CLOSED':
        return this.REGISTRATIONS_CLOSED()
      default:
        return null
    }
  }
}
export default ActiveEventRegistrationDetails
