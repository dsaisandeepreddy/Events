// Write your code here
import {Component} from 'react'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'

import './index.css'

class EventItem extends Component {
  state = {registrationData: false, apiRegister: ''}

  onClickevent = props => {
    const {Event} = this.props
    console.log(Event)
    this.setState({
      registrationData: true,
      apiRegister: Event.registrationStatus,
    })
  }

  render() {
    const {registrationData, apiRegister} = this.state
    const {Event} = this.props
    const {imageUrl, name, location, registrationStatus} = Event
    return (
      <div>
        <ul>
          <li>
            <button type="button" onClick={this.onClickevent}>
              <img className="image-data" src={imageUrl} alt="event" />
            </button>
            <p className="heading-part">{name}</p>
            <p className="paragraph-part">{location}</p>
            {registrationData ? (
              <ActiveEventRegistrationDetails apiData={apiRegister} />
            ) : (
              <p>Click on an event, to view its registration details</p>
            )}
          </li>
        </ul>
      </div>
    )
  }
}

export default EventItem
