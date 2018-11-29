import React, {Component} from 'react';

import Search from './Search';
import PicturesList from './PicturesList';

import {SearchSmagesByTags} from '../actions/pictures';

import '../styles/app.scss';

class App extends Component {
    state = {
        searchText: '',
        page: 1,
        pictures: []
    };

    getPictures = (page = 1) => {
        return SearchSmagesByTags(this.state.searchText, page);
    };

    searchPictures = async (e) => {
        e.preventDefault();

        let picturesList = await this.getPictures();

        this.setState({
            pictures: picturesList.photos.photo
        })
    };

    loadMore = async () => {
        const {page, pictures} = this.state;

        let picturesList = await this.getPictures(page + 1);
        this.setState({
            page: page + 1,
            pictures: [...pictures, ...picturesList.photos.photo]
        })
    };


    render() {
        const {searchText, pictures} = this.state;
        return (
            <div className='container'>
                <h1 className='title'>flickr api</h1>

                <Search
                    search={searchText}
                    handleChangeSearch={e => this.setState({searchText: e.target.value})}
                    onSearch={this.searchPictures}
                />
                <PicturesList
                    list={pictures}
                    onLoadMore={this.loadMore}
                />
            </div>
        )
    }
}

export default App;