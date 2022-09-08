import { Component, createRef } from "react";

class ClickOutsideListener extends Component {
    constructor(props) {
        super(props);
        this.myRef = createRef();
        this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.myRef.current.contains(event.target)) return;
        if (this.myRef) alert("You clicked outside of me!");
    };

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClickOutside);
    }

    render() {
        return <div ref={this.myRef}>{this.props.children}</div>;
    }
}

export default ClickOutsideListener;
