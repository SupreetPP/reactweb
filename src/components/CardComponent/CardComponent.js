import React from 'react';

class CardComponent extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.img} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={this.props.img} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{this.props.name}</p>
                            <p className="subtitle is-6">{this.props.age}, {this.props.gender}</p>
                        </div>
                    </div>

                    <div className="content">
                        <p>{this.props.about}</p>
                        <br />
                        <time datetime="2016-1-1">{this.props.balance}</time>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardComponent;