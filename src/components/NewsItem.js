import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {

    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }
          }>

            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2023/02/19/1600x900/WhatsApp_Image_2021-09-18_at_094218_1676765744429_1676765744642_1676765744642.jpeg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className='text-muted'>By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_black" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
