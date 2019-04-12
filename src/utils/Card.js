import React from 'react';

export default class Card extends React.Component {
    state = {
        raised: false
    }

    toggleRaised = () => {
        this.setState((state) => ({raised: !state.raised}))
    }

    render() {
        return <Card
                    onMouseOver={this.toggleRaised}
                    onMouseOut={this.toggleRaised}
                    raised={this.state.raised}
                />
    }
}