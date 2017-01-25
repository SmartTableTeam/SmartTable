import React from 'react';
import AlertContainer from 'react-alert'
import LocalRestaurant from 'react-icons/lib/fa/cutlery'

class ReactAlert extends React.Component {
  constructor(props) {
    super(props);
      this.alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    };
  }

  showAlert(){
    this.msg.show('Dish Is Added To The Order', {
      time: 2000,
      type: 'success',
      icon: <LocalRestaurant />
    });
  }


  render() {
    return(
      <div>
      <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
       <button onClick={this.showAlert.bind(this)}>Show Alert</button>
      </div>
    );
  }
}
export default ReactAlert;
