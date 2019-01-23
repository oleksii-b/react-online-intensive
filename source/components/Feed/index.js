// Core
import React, { Component } from 'react';

//Components
import Composer from 'components/Composer';
import Post from 'components/Post';
import StatusBar from 'components/StatusBar';

// Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    render () {
        const {
            avatar,
            currenUserFirstName
        } = this.props;

        return (
            <section className = { Styles.feed }>
                <StatusBar {...this.props} />
                <Composer
                    avatar={avatar}
                    currenUserFirstName={currenUserFirstName }
                />
                <Post {...this.props} />
            </section>
        );
    }
}

