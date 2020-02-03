import React, { Component } from 'react';


class Feed extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: 9,
            feed:[],
        }
    }

    getFeed(items){
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7f543a6626042418272345f78b0ebe0&pageSize='+items)
            .then(results =>{
                    return results.json()
            }).then(data =>{
                    let resultsAmount = data.totalResults;
                    let feed = data.articles.map((item, index)=>{
                            if(index <= items || index <= resultsAmount ){
                                return (
                                    <div className="feedItem" key={index}>
                                        <img className="feedItem-img" src={item.urlToImage}></img>
                                        <div className="feedItem-content">
                                            <p className="feedItem-title">{item.title}</p>
                                            <p className="feedItem-desc">{item.content}</p>
                                            <a href={item.url}>Read more...</a>
                                        </div>
                                    </div>
                                )}
                            
                    });
                    this.setState({feed: feed});
            })
    }

    componentDidMount(){
        this.getFeed(this.state.items);
    }
    
    loadMore(){
        this.setState({items: this.state.items + 10},() => this.getFeed(this.state.items))
        
    }


    render(){   
        return (
            <div className="feed">
                {this.state.feed}
                <button className="feedButton"
                    onClick={() => this.loadMore()}>
                    Load more
                </button>
            </div>
        )  
    }
}
export default Feed;

