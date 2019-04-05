export default class AimAreaManager {
    constructor () {
        this.props = {
            top: window.innerHeight - (30 + 180),
            left: window.innerWidth - (30 + 180),
            width: 180,
            height: 180
        };

        this.props.centerX = this.props.left + this.props.width / 2;
        this.props.centerY = this.props.top + this.props.height / 2;
    }
}
