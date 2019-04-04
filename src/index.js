import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import JoystickManager from './UI/JoystickManager';
import AimAreaManager from './UI/AimAreaManager';

import * as Phaser from 'phaser';

import MainScene from './Phaser/Scenes/MainScene';

var config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    //roundPixels: true,
    parent: 'phaser-content',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade'
    },
    scene: [MainScene],
    scale: {
        parent: 'phaser-content',
        mode: Phaser.Scale.FIT,
        width: window.innerWidth,
        height: window.innerHeight
    }
};

var main = new Phaser.Game(config);

//var scaleManager = new Phaser.ScaleManager(main);

window.main = main;

window.mainScene = main.scene.keys['MainScene'];

// set up UI managers first, so react can pull state from them
window.joystickManager = new JoystickManager();
window.aimAreaManager = new AimAreaManager();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// The joystick relies on a few methods

// One for continuing to monitor that touch's ID and updating the touch position based on its movements

// One for detecting first touch, determining if the touch is within the bounds of the joystick circle area, and registering its ID as the currentJoystickTouchID

const onTouchStart = e => {
    e.preventDefault();
};

const onTouchMove = e => {
    e.preventDefault();
};

const startup = () => {
    var element = document.getElementById('root');

    element.addEventListener('touchstart', onTouchStart, false);

    element.addEventListener('touchmove', onTouchMove, false);

    element.addEventListener(
        'touchend',
        e => {
            e.preventDefault();
            console.log('end');
        },
        false
    );
};

window.addEventListener('load', function () {
    window.scrollTo(0, 1);
    console.log('load called');
    startup();

    console.log('x: ' + window.innerWidth + 'y: ' + window.innerHeight);
});

document.addEventListener('contextmenu', event => event.preventDefault());

window.addEventListener('resize', () => {
    console.log('calling resize');
    //window.main.resize(window.innerWidth, window.innerHeight);
    window.mainScene.resize(window.innerWidth, window.innerHeight);
    //main.scene.keys["MainScene"].resize(window.innerWidth, window.innerHeight);
});
