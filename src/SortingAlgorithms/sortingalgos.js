export function getmergesortanimations(array){
    const animation =[];
    if(array.length <= 1) return array;
    const auxiliaryarray = array.slice();
    mergesorthelper(array, 0, array.length -1, auxiliaryarray, animation);
    return animation;
}

function mergesorthelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryarray,
    animation
){
    if(startIdx===endIdx) return;

    const mid= Math.floor((startIdx+endIdx)/2);
    mergesorthelper(auxiliaryarray, startIdx,mid, mainArray, animation);
    mergesorthelper(auxiliaryarray, mid+1, endIdx, mainArray, animation);
    merge(mainArray, startIdx, mid, endIdx, auxiliaryarray, animation);
}

function merge(mainArray, startIdx, mid, endIdx, auxiliaryarray, animation){
    let k = startIdx;
    let i = startIdx;
    let j = mid+1;

    while(i<=mid && j<=endIdx){
        animation.push([i,j]);
        animation.push([i,j]);
        if(auxiliaryarray[i]<=auxiliaryarray[j]){
            animation.push([k, auxiliaryarray[i]]);
            mainArray[k++] = auxiliaryarray[i++];
        }
        else{
            animation.push([k,auxiliaryarray[j]]);
            mainArray[k++] = auxiliaryarray[j++];
        }
    }

    while(i<=mid){
        animation.push([i,i]);
        animation.push([i,i]);

        animation.push([k,auxiliaryarray[i]]);
        mainArray[k++] = auxiliaryarray[i++];
    }

    while(j<=endIdx){
        animation.push([j,j]);
        animation.push([j,j]);
        
        animation.push([k,auxiliaryarray[j]]);
        mainArray[k++] = auxiliaryarray[j++];
    }
}

// Quick Sort functions 

export function getquicksortanimation(array){
    const animation = [];
    if(array.length <= 1) return array;
    const auxiliaryarray = array.slice();
    quicksorthelper(array,0,array.length -1,animation);
    return animation;
}

function quicksorthelper(array, startIdx, endIdx, animation){
    if(startIdx >= endIdx) return;

    let small = startIdx-1;
    for(let i=startIdx;i<=endIdx;i++){
        animation.push([i,endIdx]);
        animation.push([i,endIdx]);
        if(array[endIdx]>=array[i]){
            small ++;
            animation.push([small,i*(-1)]);
            let temp = array[small];
            array[small] = array[i];
            array[i] = temp;
        }
    }
    quicksorthelper(array, startIdx,small-1, animation);

    quicksorthelper(array, small+1, endIdx, animation);

    // merge(mainArray, startIdx, small, endIdx, auxiliaryarray, animation);
}

export function getinsertionsortanimations(array){
    const animations = [];
    insertion_sort(array, animations);
    return animations;
}
function insertion_sort(array, animations){
    for(let i=1;i<array.length;i++){
        let j = i;
        while(array[j]<array[j-1]){
            let temp = array[j-1];
            array[j-1]=array[j];
            array[j] = temp;
            animations.push([j,j-1]);
            j--;
        }
    }
}
// function insertion_sort(array, animations){
//     for(let i=1;i<array.length;i++){
        
        
//         while(array[i]<array[i-1]){
//             let temp = array[i-1];
//             array[i-1]=array[i];
//             array[i] = temp;
//             animations.push([i,i-1]);
//         }
//         for(j=0;j<i;j++){
//             if(array[j]>array[i]) {
//                 break;
//             }
//         }
//         if(j!=i){
//             let curr = array[i];
//             for(let k = i;k>j;k--){
//                 array[k] = array[k-1];
//                 animations.push([k,k-1]);
//             }
//             animations.push([j, curr*(-1)]);
//             array[j] = curr;
//         }
//         console.log(array); 
//     }
// }