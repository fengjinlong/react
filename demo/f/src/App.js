import React, {Component} from 'react';
import Com from  './component/com-c'

export default class App extends Component {
  // constructor (p) {
  //   super(p)
  //   this.add = this.add.bing(this)
  // }
  state = {
    s: [1,2,3,4,5]
  }
  add = () => {
    let {s} = this.state
    s.push(1)
    this.setState({s})
  }
  del = (i) => {
    let {s} = this.state
    s.splice(i,1)
    this.setState({s})
  }
  render () {
    return (
      <div>
        <Com s={this.state.s} add={this.add} del={this.del}/>
      </div>
    )
  }
}
