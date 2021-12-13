import {Component} from 'react'
import {
  BgContainer,
  CountDisplayContainer,
  CountSearchInputContainer,
  HeadingContainer,
  Heading,
} from './styledComponents'

class CharsCounter extends Component {
  render() {
    return (
      <BgContainer>
        <CountDisplayContainer>
          <HeadingContainer>
            <Heading>Count characters like a Boss...</Heading>
          </HeadingContainer>
        </CountDisplayContainer>
        <CountSearchInputContainer>
          Count search input container
        </CountSearchInputContainer>
      </BgContainer>
    )
  }
}

export default CharsCounter
