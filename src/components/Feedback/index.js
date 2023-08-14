// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: true}

  onClickEmoji = () => this.setState({isFeedbackSelected: false})

  renderEmojisItems = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="emojis-container">
        <h1 className="heading-of-emoji">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="ul-things">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emojis"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderCustomerFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="love-container">
        <img src={loveEmojiUrl} alt="love Emoji" className="loveemoji" />
        <h1 className="heading-love">Thank You</h1>
        <p className="para-font">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderEmojisItems()
            : this.renderCustomerFeedback()}
        </div>
      </div>
    )
  }
}
export default Feedback
