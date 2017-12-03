const Card = React.createClass({
    
      propTypes: {
        backImage: React.PropTypes.string.isRequired,
        frontImage: React.PropTypes.string.isRequired,
        flipped: React.PropTypes.bool.isRequired,
        clickHandler: React.PropTypes.func.isRequired
      },
    
      getInitialState() {
        return {
          flipped: false
        };
      },
    
      whichPic() {
        if(this.props.flipped){
          return this.props.frontImage;
        }
        else{
          return this.props.backImage
        }
      },
    
      render() {
        return(
          <span>
          <img onClick={this.props.clickHandler} className="cardPic" src={this.whichPic()}/>
          </span>
        );
      }
    });
    