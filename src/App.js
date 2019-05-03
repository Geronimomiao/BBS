import React from 'react';
import ReactDom from 'react-dom'
class Modal extends React.Component{

  constructor(props) {
    super(props)
    this.container = document.createElement('div')
    document.body.appendChild(this.container)
  }

  componentWillUnmount() {
    document.body.removeChild(this.container)
  }

  render() {
    return ReactDom.createPortal(
      <div className="modal">
        <span className="close" onClick={this.props.onClose}>&times;</span>
        <div className="content">{this.props.children}</div>
      </div>,
      this.container
    )
  }
}



class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {showModal: true}
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        {this.state.showModal && (<Modal onClose={this.closeModal}>Dialog</Modal>)}
      </div>
    )
  }

}

export default App;
