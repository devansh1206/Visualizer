import React from "react";
import './sv1.css';
import { getinsertionsortanimations, getmergesortanimations, getquicksortanimation } from "../SortingAlgorithms/sortingalgos";

export default class sv1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            numberofbars: 100,
            animationspeed: 10
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        const { numberofbars } = this.state;

        for (let i = 0; i < numberofbars; i++) {
            array.push(randomIntFromIntervals(5, 700));
        }
        this.setState({ array });
    }

    handleBarsSliderChange = (event) => {
        this.setState({ numberofbars: event.target.value }, () => this.resetArray());
    };

    handleSpeedSliderChange = (event) => {
        this.setState({ animationspeed: event.target.value });
    };

    mergeSort() {
        const { animationspeed } = this.state;
        const animations = getmergesortanimations(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');

        for (let i = 0; i < animations.length; i++) {
            const isColorChange = i % 3 !== 2;
            const [barOneIdx, barTwoIdxOrHeight] = animations[i];

            if (isColorChange) {
                const color = i % 3 === 0 ? 'red' : 'black';
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdxOrHeight].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationspeed);
            } else {
                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${barTwoIdxOrHeight}px`;
                }, i * animationspeed);
            }
        }
    }

    quickSort() {
        const { animationspeed } = this.state;
        const animations = getquicksortanimation(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');

        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx] = animations[i];

            if (barTwoIdx < 0) {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx * -1].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'red';
                }, i * animationspeed);
                setTimeout(() => {
                    const barOneHeight = barOneStyle.height;
                    const barTwoHeight = barTwoStyle.height;
                    barOneStyle.height = barTwoHeight;
                    barTwoStyle.height = barOneHeight;
                    barOneStyle.backgroundColor = 'black';
                    barTwoStyle.backgroundColor = 'black';
                }, i * animationspeed + animationspeed / 2);
            } else {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'red';
                }, i * animationspeed);
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'black';
                    barTwoStyle.backgroundColor = 'black';
                }, i * animationspeed + animationspeed / 2);
            }
        }
    }

    insertionSort() {
        const { animationspeed } = this.state;
        const animations = getinsertionsortanimations(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');

        for (let i = 0; i < animations.length; i++) {
            const [barOneIdx, barTwoIdx] = animations[i];

            setTimeout(() => {
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                // Change color to indicate the bars being compared/swapped
                barOneStyle.backgroundColor = 'red';
                barTwoStyle.backgroundColor = 'red';

                // Swap heights
                const barOneHeight = barOneStyle.height;
                const barTwoHeight = barTwoStyle.height;
                barOneStyle.height = barTwoHeight;
                barTwoStyle.height = barOneHeight;

                // Change color back to indicate the end of this operation
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'black';
                    barTwoStyle.backgroundColor = 'black';
                }, animationspeed);
            }, i * animationspeed);
        }
    }

    render() {
        const { array, numberofbars, animationspeed } = this.state;
        const wd = 10;

        return (
            <>
                <div className="nav">
                    <button onClick={() => this.resetArray()}>Generate new array</button>
                    {/* <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.selectionSort()}>Selection Sort</button> */}
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <div>
                        <label htmlFor="barsRange">Number of Bars: {numberofbars}</label>
                        <input
                            type="range"
                            min="50"
                            max="100"
                            value={numberofbars}
                            onChange={this.handleBarsSliderChange}
                            className="slider"
                            id="barsRange"
                        />
                    </div>
                    <div>
                        <label htmlFor="speedRange">Animation Speed: {animationspeed}ms</label>
                        <input
                            type="range"
                            min="10"
                            max="200"
                            value={animationspeed}
                            onChange={this.handleSpeedSliderChange}
                            className="slider"
                            id="speedRange"
                        />
                    </div>
                </div>
                <div className="array-container">
                    {array.map((value, idx) => (
                        <div className="array-bar" key={idx} style={{ height: `${value}px`, width: `${wd}px`}}></div>
                    ))}
                    <hr style={{ margin: 0, padding: 0 }} />
                </div>
            </>
        );
    }
}

function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
