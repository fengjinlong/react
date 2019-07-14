import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class List extends Component {
  static p = {
    data: PropTypes.string.isRequired,
    del: PropTypes.func.isRequired,
    i: PropTypes.number.isRequired
  }
  del = () => {
    let {i, del} = this.props
    del(i)
  }
  render () {
    let {data} = this.props
    return (
      <li>
        {data}
        <button onClick={this.del}>del</button>
      </li>
    )
  }
}