interface LabelValue {
    lable: string;
}

function printLabel(labelledObj: LabelValue) {
    return labelledObj.lable;
}

let myObj = { size: 10, lable: "Mark Liu" };
let aa = printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: string;
}
function createSquare(config: SquareConfig) {
    let newConfig: SquareConfig = {};
    if (config.color) {
        newConfig.color = config.color;
    }
    if (config.width) {
        newConfig.width = config.width;
    }
    return newConfig;
}
let bb = createSquare({ color: 'red' })
document.body.innerHTML = bb.color + " " + bb.width;

