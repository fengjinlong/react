import React, {Component} from 'react'
import List from './list'
import PropTypes from 'prop-types'
export default class Com extends Component {
  // const state = {

  // }
  static ropTypes = {
    s: PropTypes.array.isRequired,
    add: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired
  }
  render () {
    const arr = this.props.s
    return (
      <div>
        {arr.map((ele, i) =>{
          return <List key={i} data={ele} i={i} del={this.props.del}/>
        })}
        <button onClick={this.props.add}>add</button>
      </div>
    )
  }
}