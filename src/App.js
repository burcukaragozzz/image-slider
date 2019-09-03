import React, { Component } from 'react';
import './App.css';

const clientId = 'fea53a1f5c0834f750d027df42f235043cb7205daa1b6ca365824d670f645d47';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      currentIndex:0,
    };
  }

  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/?client_id=${clientId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(response => {
        console.log(response[0]);
        this.setState({images: response})
      })
      .catch(error => console.error('Error:', error));
  }


  goToPrevSlide = (event) => {
    var code = (event.which) ? event.which : event.keyCode;

    if((this.state.currentIndex === 0)||kc == 37) {
      return;
    }

    this.setState({
      currentIndex: this.state.currentIndex - 1
    });
  }
  
  goToNextSlide = () => {

    if(this.state.currentIndex === this.state.images.length - 1) {
      return;
    }

     this.setState({
      currentIndex: this.state.currentIndex + 1
    });
  }

  
  render() {
    const { images, currentIndex } = this.state;
    const sliderItems = images.map(function(item, index) {
      return (
        <img
          className={`image ${index === currentIndex ? "active" : ""}`}
          src={item.urls.regular}
          alt="backgroundImage"
        />
      )
    });

    return(
        <div className="content">
          <div className="slider">
          <i className={`fa fa-arrow-left left-icon ${currentIndex===0 ? "deactive" : ""}`} onClick={this.goToPrevSlide}></i>
            <div className="image-wrapper">
              {sliderItems}
            </div> 
            <i className={`fa fa-arrow-right right-icon ${images.length - 1 === currentIndex ? "deactive" : ""}`} onClick={this.goToNextSlide}></i>
          </div>

        </div>
    );
  }
}

export default App;



