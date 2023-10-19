import React from "react";
import "./PathFinder.css";
import Node from "./Node/Node.jsx"

export default class PathFinder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount(){
        const nodes = [];
        for(let row = 0;row<20;row++){
            const currRow = [];
            for(let col = 0;col<20;col++){
                currRow.push([]);
            }
            nodes.push(currRow);
        }
        this.setState({nodes});
    }

    render(){
        const {nodes} = this.state;
        console.log(nodes)

        return (
            <div className="grid">
                {nodes.map((row,rowidx) =>{
                    return <div>
                        {row.map((nodes, nodeidx) => <Node></Node>)}
                    </div>
                })}
            </div>
        )
    }
}