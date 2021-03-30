import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//youtube api key AIzaSyAH9DcpIHLqGSZpFNBL9wpY3Hf7ZRHBFr0

class App extends React.Component {
    state = {videos: [], selectedVideo: null}

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {params: {
            q: term
        }})

        console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        
        });
    };

    onVideoSelect = (video) => {
        console.log('from the App!', video);
        this.setState({selectedVideo: video})
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="six wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;