import React from 'react';
import CardComponent from '../components/CardComponent/CardComponent';

import cardData from '../data/cardData';

class Card extends React.Component {
    render() {
        return (
            <div className="columns">

                {cardData.map((value, index) => {
                    return (
                        <div key={index} className="column">
                            <CardComponent
                                name={value.name}
                                age={value.age}
                                gender={value.gender}
                                company={value.company}
                                about={value.about}
                                img={value.picture}
                                balance={value.balance}
                            />
                        </div>
                    )
                })}


            </div>
        )
    }
}

export default Card;