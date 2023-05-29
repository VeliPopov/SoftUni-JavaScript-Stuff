function equalSums(array) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

    for (let currentI = 0; currentI < array.length; currentI++) {
        for (let i = 0; i < array.length; i++) {
            if (currentI !== i) {
                let num = array[i];
                if (currentI > i) {
                    leftSum += num;
                } else if (currentI < i) {
                    rightSum += num;
                }
            }
            if (currentI === 0) {
                leftSum = 0;
            } else if (currentI === array.length - 1) {
                rightSum = 0;
            }
        }
        if (leftSum === rightSum) {
            console.log(currentI);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}
equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]) 