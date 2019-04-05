export default class JoystickManager {
    constructor () {
        this.props = {
            x: 150,
            y: window.innerHeight - (50 + 150),
            w: 50,
            h: 50
        };

        this.props.centerX = this.props.x + (this.props.w / 2);
        this.props.centerY = this.props.y + (this.props.h / 2);
    }
}
