import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    static defaultProps = {
        title: "No Title",
        authors: "Unknown Author",
        description: "",
        image: "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png",
        link: "#"
    }

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.handleSaveBook = this.handleSaveBook.bind(this);
        this.handleDeleteBook = this.handleDeleteBook.bind(this);
    }
    

    async handleSaveBook () {
        let response = await fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props),
        });
        let json = await response.json();
        console.log(json);

    }

    async handleDeleteBook () {
      console.log('hihi');
      let response = await fetch(`/api/books/${this.props.id}`, {
        method: 'DELETE',
      });
      let serverResponse = await response.json();
      console.log(`Server's response to delete request`);
      console.table(serverResponse);
    }

    render() {
      console.log('child props', this.props.id)
        return (
            // <div className="Card card large col s6">
            //     <div className="card-image waves-effect waves-block waves-light">
            //         <img className="activator" src={this.props.image} />
            //     </div>
            //     <div className="card-content">
            //         <span className="card-title activator grey-text text-darken-4">{this.props.title} <span className="author-span"> by {this.props.authors} </span><i className="material-icons right">more_vert</i></span>
            //         <a className="waves-effect waves-light btn">save</a>
            //     </div>
            //     <div className="card-reveal">
            //         <span className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons right">close</i></span>
            //         <p><a href={this.props.link}>Link to Page</a></p>
            //         <p>{this.props.description}</p>
            //     </div>
            // </div>
            <div className="col s12 l6 m8 offset-m2">
            <h2 className="header">{this.props.title} <span className="author-span">by {this.props.authors}</span></h2>
            <div className="card horizontal">
              <div className="card-image">
                <img src={this.props.image} alt={this.props.title}/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    {this.props.description.substring(0,200)+ "..."}
                    <br/>
                    <a href={this.props.link}>Read More...</a>
                  </p>
                </div>
                <div className="card-action">
                  {this.props.delete === true ? 
                  <button className="waves-effect waves-light btn right" onClick={this.handleDeleteBook}>Delete</button>
                  :
                  <button className="waves-effect waves-light btn right" onClick={this.handleSaveBook}>save</button>
                  }
                  <a className="waves-effect waves-light btn right" href={this.props.link}>Buy</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Card;