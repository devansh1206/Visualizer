// import React, { useState } from "react";
// import './SortingVisualizer.css';
// import { getinsertionsortanimations, getmergesortanimations, getquicksortanimation } from "../SortingAlgorithms/sortingalgos";

// const animationspeed = 10;
// const numberofbars = 100;


// export default class SortingVisualizer extends React.Component{
    
//     constructor(props){
//         super(props);

//         this.state = {
//             array: [],
//         };
//     }

//     componentDidMount(){
//         this.resetArray();
//     }

//     resetArray(){
//         const array = [];

//         for(let i=0;i<numberofbars;i++){
//             array.push(randomIntFromIntervals(5,700));
//         }
//         this.setState({array});
//     }
//     mergeSort(){

//         const animations = getmergesortanimations(this.state.array);
//         for (let i=0;i<animations.length; i++){

//             const arrayBars = document.getElementsByClassName('array-bar');
//             const iscolorchange = i%3!==2;
//             if(iscolorchange){
//                 const [barOneidx, barTwoidx] = animations[i];
//                 const barOneStyle = arrayBars[barOneidx].style;
//                 const barTwoStyle = arrayBars[barTwoidx].style;
//                 const color = i%3 === 0 ? 'red' : 'black';
//                 setTimeout(() => {
//                     barOneStyle.backgroundColor = color;
//                     barTwoStyle.backgroundColor = color;
//                 }, i*animationspeed);
//             }
//             else{
//                 setTimeout(() =>{
//                     const [barOneidx, newheight] = animations[i];
//                     const barOneStyle = arrayBars[barOneidx].style;
//                     barOneStyle.height = `${newheight}px`;
//                 }, i*animationspeed);
//             }
//         }
//     }
//     quickSort(){
//         const animations = getquicksortanimation(this.state.array);
//         const arrayBars = document.getElementsByClassName('array-bar');
//         for (let i=0;i<animations.length; i++){

            
//             const [barOneidx, barTwoidx] = animations[i];
            
//             if(barTwoidx<0){
//                 // swap the heights of bars at barOneidx and barTwoidx 
//                 const barOneStyle = arrayBars[barOneidx].style;
//                 const barTwoStyle = arrayBars[barTwoidx*(-1)].style;  
//                 setTimeout(() => {
//                     barOneStyle.backgroundColor = 'red';
//                     barTwoStyle.backgroundColor = 'red';
//                     const baronehg = barOneStyle.height;
//                     const bartwohg = barTwoStyle.height;
//                     //swapping elements in terms of heights 
//                     barTwoStyle.height = baronehg;
//                     barOneStyle.height = bartwohg;
//                     barOneStyle.backgroundColor = 'black';
//                     barTwoStyle.backgroundColor = 'black';
//                 }, i*animationspeed);
//             }
//             else{ // just comparisons but not changing the height
//                 const barOneStyle = arrayBars[barOneidx].style;
//                 const barTwoStyle = arrayBars[barTwoidx].style;
//                 setTimeout(() =>{

//                     barOneStyle.backgroundColor = 'red';
//                     barTwoStyle.backgroundColor = 'red';
//                     barOneStyle.backgroundColor = 'black';
//                     barTwoStyle.backgroundColor = 'black';
//                 }, i*animationspeed);
//             }
//         }
//     }
//     bubbleSort(){

//     }
//     selectionSort(){

//     }
//     insertionSort(){
//         const animations = getinsertionsortanimations(this.state.array);
//         console.log(this.state.array);
//         console.log(animations);
//         const arrayBars = document.getElementsByClassName('array-bar');

//         for (let i=0;i<animations.length; i++){

//             const [barOneidx, barTwoidx] = animations[i];

//             setTimeout(() =>{
//                 const baronehg = arrayBars[barOneidx].style.height;
//                 const bartwohg = arrayBars[barTwoidx].style.height;
//                 arrayBars[barOneidx].style.height = bartwohg;
//                 arrayBars[barTwoidx].style.height = baronehg;
//             }, i*animationspeed)
            

//             // if(barTwoidx<0){
//             //     // swap the heights of bars at barOneidx and barTwoidx   
                
//             //     setTimeout(() => {
//             //         const barOneStyle = arrayBars[barOneidx].style;
//             //         const barhg = barTwoidx*(-1);
//             //         barOneStyle.height = `${barhg}px`;
//             //         console.log("changing height of ", barOneidx+1, "th bar to ", barhg, 'px');
//             //     }, i*animationspeed);
//             // }
//             // else{ // just comparisons but not changing the height
//             //     setTimeout(() =>{
//             //         const barOneStyle = arrayBars[barOneidx].style;
//             //         const barTwoStyle = arrayBars[barTwoidx].style;
//             //         barOneStyle.height = barTwoStyle.height;
//             //         console.log("changing height of ", barOneidx+1, "th bar to ", barTwoStyle.height)
//             //     }, i*animationspeed);
//             // }
//         }
//     }
//     render(){
//         const{array} = this.state;

//         return (
//             <>
//             <div className="nav">
//                 <button onClick={()=> this.resetArray()}>Generate new array</button>
//                 <button onClick={()=> this.bubbleSort()}>Bubble Sort</button>
//                 <button onClick={()=> this.selectionSort()}>Selection Sort</button>
//                 <button onClick={()=> this.insertionSort()}>Insertion Sort</button>
//                 <button onClick={()=> this.mergeSort()}>Merge Sort</button>
//                 <button onClick={()=> this.quickSort()}>Quick Sort</button>

//             </div>
//             <div className="array-container">
//             {array.map((value, idx) => (
//             <div className="array-bar" key={idx} style={{height:`${value}px`}}></div>
//             ))}
//             <hr style={{margin: 0, padding:0}} />
//             </div>
//             </>
//         )
//     }
// }

// function randomIntFromIntervals(min,max){
//     return Math.floor(Math.random()*(max-min + 1)+min);
// }

// code change number 2
// import React, { useState } from "react";
// import './SortingVisualizer.css';
// import { getinsertionsortanimations, getmergesortanimations, getquicksortanimation } from "../SortingAlgorithms/sortingalgos";

// const animationspeed = 10;

// export default class SortingVisualizer extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             array: [],
//             numberofbars: 100,
//         };
//     }

//     componentDidMount() {
//         this.resetArray();
//     }

//     resetArray() {
//         const array = [];
//         const { numberofbars } = this.state;

//         for (let i = 0; i < numberofbars; i++) {
//             array.push(randomIntFromIntervals(5, 700));
//         }
//         this.setState({ array });
//     }

//     handleSliderChange = (event) => {
//         this.setState({ numberofbars: event.target.value }, () => this.resetArray());
//     };

//     mergeSort() {
//         const animations = getmergesortanimations(this.state.array);
//         for (let i = 0; i < animations.length; i++) {
//             const arrayBars = document.getElementsByClassName('array-bar');
//             const iscolorchange = i % 3 !== 2;
//             if (iscolorchange) {
//                 const [barOneidx, barTwoidx] = animations[i];
//                 const barOneStyle = arrayBars[barOneidx].style;
//                 const barTwoStyle = arrayBars[barTwoidx].style;
//                 const color = i % 3 === 0 ? 'red' : 'black';
//                 setTimeout(() => {
//                     barOneStyle.backgroundColor = color;
//                     barTwoStyle.backgroundColor = color;
//                 }, i * animationspeed);
//             } else {
//                 setTimeout(() => {
//                     const [barOneidx, newheight] = animations[i];
//                     const barOneStyle = arrayBars[barOneidx].style;
//                     barOneStyle.height = `${newheight}px`;
//                 }, i * animationspeed);
//             }
//         }
//     }

//     // quickSort() {
//     //     const animations = getquicksortanimation(this.state.array);
//     //     const arrayBars = document.getElementsByClassName('array-bar');
//     //     for (let i = 0; i < animations.length; i++) {
//     //         const [barOneidx, barTwoidx] = animations[i];
//     //         if (barTwoidx < 0) {
//     //             const barOneStyle = arrayBars[barOneidx].style;
//     //             const barTwoStyle = arrayBars[barTwoidx * -1].style;
//     //             setTimeout(() => {
//     //                 barOneStyle.backgroundColor = 'red';
//     //                 barTwoStyle.backgroundColor = 'red';
//     //                 const baronehg = barOneStyle.height;
//     //                 const bartwohg = barTwoStyle.height;
//     //                 barTwoStyle.height = baronehg;
//     //                 barOneStyle.height = bartwohg;
//     //                 barOneStyle.backgroundColor = 'black';
//     //                 barTwoStyle.backgroundColor = 'black';
//     //             }, i * animationspeed);
//     //         } else {
//     //             const barOneStyle = arrayBars[barOneidx].style;
//     //             const barTwoStyle = arrayBars[barTwoidx].style;
//     //             setTimeout(() => {
//     //                 barOneStyle.backgroundColor = 'red';
//     //                 barTwoStyle.backgroundColor = 'red';
//     //                 barOneStyle.backgroundColor = 'black';
//     //                 barTwoStyle.backgroundColor = 'black';
//     //             }, i * animationspeed);
//     //         }
//     //     }
//     // }
//     quickSort() {
//     const animations = getquicksortanimation(this.state.array);
//     const arrayBars = document.getElementsByClassName('array-bar');
//     for (let i = 0; i < animations.length; i++) {
//         const [barOneidx, barTwoidx] = animations[i];
//         if (barTwoidx < 0) {
//             const barOneStyle = arrayBars[barOneidx].style;
//             const barTwoStyle = arrayBars[barTwoidx * -1].style;
//             setTimeout(() => {
//                 barOneStyle.backgroundColor = 'red';
//                 barTwoStyle.backgroundColor = 'red';
//             }, i * animationspeed);
//             setTimeout(() => {
//                 const baronehg = barOneStyle.height;
//                 const bartwohg = barTwoStyle.height;
//                 barTwoStyle.height = baronehg;
//                 barOneStyle.height = bartwohg;
//                 barOneStyle.backgroundColor = 'black';
//                 barTwoStyle.backgroundColor = 'black';
//             }, i * animationspeed + animationspeed / 2);
//         } else {
//             const barOneStyle = arrayBars[barOneidx].style;
//             const barTwoStyle = arrayBars[barTwoidx].style;
//             setTimeout(() => {
//                 barOneStyle.backgroundColor = 'red';
//                 barTwoStyle.backgroundColor = 'red';
//             }, i * animationspeed);
//             setTimeout(() => {
//                 barOneStyle.backgroundColor = 'black';
//                 barTwoStyle.backgroundColor = 'black';
//             }, i * animationspeed + animationspeed / 2);
//         }
//     }
// }


//     bubbleSort() {
//         // Implementation of bubbleSort can be added here
//     }

//     selectionSort() {
//         // Implementation of selectionSort can be added here
//     }

//     insertionSort() {
//         const animations = getinsertionsortanimations(this.state.array);
//         const arrayBars = document.getElementsByClassName('array-bar');

//         for (let i = 0; i < animations.length; i++) {
//             const [barOneidx, barTwoidx] = animations[i];

//             setTimeout(() => {
//                 const baronehg = arrayBars[barOneidx].style.height;
//                 const bartwohg = arrayBars[barTwoidx].style.height;
//                 arrayBars[barOneidx].style.height = bartwohg;
//                 arrayBars[barTwoidx].style.height = baronehg;
//             }, i * animationspeed);
//         }
//     }

//     render() {
//         const { array, numberofbars } = this.state;
//         const wd=10;

//         return (
//             <>
//                 <div className="nav">
//                     <button onClick={() => this.resetArray()}>Generate new array</button>
//                     <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
//                     <button onClick={() => this.selectionSort()}>Selection Sort</button>
//                     <button onClick={() => this.insertionSort()}>Insertion Sort</button>
//                     <button onClick={() => this.mergeSort()}>Merge Sort</button>
//                     <button onClick={() => this.quickSort()}>Quick Sort</button>
//                     <input
//                         type="range"
//                         min="10"
//                         max="100"
//                         value={numberofbars}
//                         onChange={this.handleSliderChange}
//                         className="slider"
//                         id="myRange"
//                     />
//                     <label>Number of Bars: {numberofbars}</label>
//                 </div>
//                 <div className="array-container">
//                     {array.map((value, idx) => (
//                         <div className="array-bar" key={idx} style={{ height: `${value}px`, width:`${wd}px`}}></div>
//                     ))}
//                     <hr style={{ margin: 0, padding: 0 }} />
//                 </div>
//             </>
//         );
//     }
// }

// function randomIntFromIntervals(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// code change number 3
import React, { useState } from "react";
import './SortingVisualizer.css';
import { getinsertionsortanimations, getmergesortanimations, getquicksortanimation } from "../SortingAlgorithms/sortingalgos";

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            numberofbars: 100,
            animationspeed: 10,
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
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const iscolorchange = i % 3 !== 2;
            if (iscolorchange) {
                const [barOneidx, barTwoidx] = animations[i];
                const barOneStyle = arrayBars[barOneidx].style;
                const barTwoStyle = arrayBars[barTwoidx].style;
                const color = i % 3 === 0 ? 'red' : 'black';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * animationspeed);
            } else {
                setTimeout(() => {
                    const [barOneidx, newheight] = animations[i];
                    const barOneStyle = arrayBars[barOneidx].style;
                    barOneStyle.height = `${newheight}px`;
                }, i * animationspeed);
            }
        }
    }

    quickSort() {
        const { animationspeed } = this.state;
        const animations = getquicksortanimation(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const [barOneidx, barTwoidx] = animations[i];
            if (barTwoidx < 0) {
                const barOneStyle = arrayBars[barOneidx].style;
                const barTwoStyle = arrayBars[barTwoidx * -1].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'red';
                }, i * animationspeed);
                setTimeout(() => {
                    const baronehg = barOneStyle.height;
                    const bartwohg = barTwoStyle.height;
                    barTwoStyle.height = baronehg;
                    barOneStyle.height = bartwohg;
                    barOneStyle.backgroundColor = 'black';
                    barTwoStyle.backgroundColor = 'black';
                }, i * animationspeed + animationspeed / 2);
            } else {
                const barOneStyle = arrayBars[barOneidx].style;
                const barTwoStyle = arrayBars[barTwoidx].style;
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

    bubbleSort() {
        // Implementation of bubbleSort can be added here
    }

    selectionSort() {
        // Implementation of selectionSort can be added here
    }

    // insertionSort() {
    //     const { animationspeed } = this.state;
    //     const animations = getinsertionsortanimations(this.state.array);
    //     const arrayBars = document.getElementsByClassName('array-bar');

    //     for (let i = 0; i < animations.length; i++) {
    //         const [barOneidx, barTwoidx] = animations[i];

    //         setTimeout(() => {
    //             const baronehg = arrayBars[barOneidx].style.height;
    //             const bartwohg = arrayBars[barTwoidx].style.height;
    //             arrayBars[barOneidx].style.height = bartwohg;
    //             arrayBars[barTwoidx].style.height = baronehg;
    //         }, i * animationspeed);
    //     }
    // }
    insertionSort() {
        const { animationspeed } = this.state;
        const animations = getinsertionsortanimations(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
    
        for (let i = 0; i < animations.length; i++) {
            const [barOneidx, barTwoidx] = animations[i];
    
            setTimeout(() => {
                const barOneStyle = arrayBars[barOneidx].style;
                const barTwoStyle = arrayBars[barTwoidx].style;
                
                // Change color to indicate the bars being compared/swapped
                barOneStyle.backgroundColor = 'red';
                barTwoStyle.backgroundColor = 'red';
    
                // Swap heights
                const baronehg = barOneStyle.height;
                const bartwohg = barTwoStyle.height;
                barOneStyle.height = bartwohg;
                barTwoStyle.height = baronehg;
    
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
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <div>
                        <label>Number of Bars: {numberofbars}</label>
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
                        <label>Animation Speed: {animationspeed}ms</label>
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
                        <div className="array-bar" key={idx} style={{ height: `${value}px`, width: `${wd}px` }}></div>
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
