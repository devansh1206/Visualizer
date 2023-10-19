import React, { Component } from "react";

import "./Node.css"

export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        const { isfinish, isstart } = this.props;
        const extraclassname = isfinish ? 'node-finish' : (isstart ? 'node-start' : '');
        return <div className={`node ${extraclassname}`}></div>

    }
}

export const DEFALUT_NODE = {
    row:0,
    col:0,
};