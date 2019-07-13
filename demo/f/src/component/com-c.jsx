import React, {Component} from 'react'
import List from './list'
import PropTypes from 'prop-types'
export default class Com extends Component {
  // const state = {

  // }
  static ropTypes = {
    s: PropTypes.array.isRequired
  }
  render () {
    cons
    return (
      <div>
        {this.props.s}
        <List />
      </div>
    )
  }
}