import React, { Component } from 'react';
import './MyBooks.css';
import Card from '../Card/Card';

class MyBooks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             savedBooks: []
        }
    }
    


    async componentDidMount() {
        const response = await fetch('/api/books'); // quesiton: how does this know where to fetch
        const savedBooks = await response.json();

        console.log(savedBooks);
        this.setState({ savedBooks })
    }

    render() {
        return (
            <div className="container">
            <div className="row">
                {this.state.savedBooks.map( item => {
                    return (<Card 
                        title={item.title}
                        authors={item.authors}
                        description={item.description}
                        link={item.link}
                        image={item.image}
                        delete={true}
                        id={item._id}
                        />)
                })}
            </div>
        </div>
        );
    }
}

export default MyBooks;