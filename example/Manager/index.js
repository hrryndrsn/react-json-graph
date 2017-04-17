import React, {Component} from 'react';
import {Button} from 'react-toolbox/lib/button';
import styles from './manager.css';

const Icon = (props) => {
    const types = {
        graph: (
            <path fill='#000000' d='M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17' />
        ),
        node: (
            <path fill='#000000' d='M22,9H19.97C18.7,5.41 15.31,3 11.5,3A9,9 0 0,0 2.5,12C2.5,17 6.53,21 11.5,21C15.31,21 18.7,18.6 20,15H22M20,11V13H18V11M17.82,15C16.66,17.44 14.2,19 11.5,19C7.64,19 4.5,15.87 4.5,12C4.5,8.14 7.64,5 11.5,5C14.2,5 16.66,6.57 17.81,9H16V15' />
        ),
        edge: (
            <path fill='#000000' d='M15,3V7.59L7.59,15H3V21H9V16.42L16.42,9H21V3M17,5H19V7H17M5,17H7V19H5' />
        ),
    };

    return (
        <svg className={styles.tabIcon} viewBox='0 0 24 24'>
            {types[props.type]}
        </svg>
    );
};

export default class Manager extends Component {
    constructor(props) {
        super();

        this.state = {
            isCollapsed: false,
        };
    }

    changeZoom(value) {

    }

    toogleManager() {
        this.setState({isCollapsed: !this.state.isCollapsed});
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.zoom}>
                    <Button onClick={() => { this.changeZoom(1) }} className={styles.zoom_in} icon='add' floating mini />
                    <Button onClick={() => { this.changeZoom(-1) }} className={styles.zoom_out} icon='remove' floating mini />
                </div>
            </div>
        );
    }
}
