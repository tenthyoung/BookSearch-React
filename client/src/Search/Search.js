import React, { Component } from 'react';
import Card from '../Card/Card';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: "",
            booksArray: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    // componentDidMount() {
    //     fetch('https://www.googleapis.com/books/v1/volumes?q')
    // }
    handleSubmit(evt) {
        evt.preventDefault();
        this.requestBooksAPI();
        this.setState({ searchQuery: "" });
    }

    handleChange(evt) {
        this.setState({ searchQuery: evt.target.value });
    }

    async requestBooksAPI() {
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}`)
        let bookObj = await response.json();
        // console.log(bookObj.items[0].volumeInfo.title)
        // console.log(bookObj.items[0].volumeInfo.authors)
        // console.log(bookObj.items[0].volumeInfo.description)
        // console.log(bookObj.items[0].volumeInfo.imageLinks.thumbnail)
        // console.log(bookObj.items[0].volumeInfo.infoLink)

        const newArr = [];

        for (let idx = 0; idx < bookObj.items.length; idx++) {
            let { title, authors, description, imageLinks, infoLink } = bookObj.items[idx].volumeInfo;
            let thumbnail;
            imageLinks === undefined ? thumbnail = "" : thumbnail = imageLinks.thumbnail;
            let tempObj = {
                title: title,
                authors: authors,
                description: description,
                image: thumbnail,
                link: infoLink
            }

            newArr.push(tempObj);
        }

        // console.table(newArr)
        this.setState({ booksArray: [...newArr] })
        console.log(this.state.booksArray)
    }

    render() {
        return (
            <div className="Search container">
                <br />
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s8">
                                <i className="material-icons prefix">search</i>
                                <input id="searchQuery" type="text" value={this.state.searchQuery} onChange={this.handleChange} />
                                <label htmlFor="searchQuery">Search</label>
                            </div>
                            <div className="col s4">
                                <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="container">
                    <div className="row">
                        {this.state.booksArray.map( item => {
                            return (<Card 
                                title={item.title}
                                authors={item.authors}
                                description={item.description}
                                link={item.link}
                                image={item.image}
                                />)
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;