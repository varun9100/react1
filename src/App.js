import React, { Component } from 'react';
import Unsplash from './api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { images : [] };
    }

    onSearchSubmit = async (term) => {
        console.log(term);
        const response = await Unsplash.get('/search/photos', {
            params: {query : term},
        });
        console.log(response.data.results);
        this.setState({images: response.data.results});
    }
    render() { 
        return(
            <div className = 'ui container' style = {{ margin: '10px'}}>
                <h1>SearchApp</h1>
                <SearchBar myCallBack = {this.onSearchSubmit}/>
                Found: {this.state.images.length} images
                <ImageList images = {this.state.images} />
            </div>
            );
    }
}
 
export default App;
