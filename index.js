let count = 0;

let element = document.getElementById('counter');

function increase(){
    element.innerText = `${count + 1}`;
    // console.log(element.innerText)
    return count += 1
}

function decrease(){
    element.innerText = `${count - 1}`;
    // console.log(element.innerText)
    return count -= 1
}

function reset(){
    count = 0;
    element.innerHTML = `<mark>${count}</mark>`
    // console.log(count)
    return count
}

function selectTheme(theme){
    document.getElementsByTagName('body')[0].className = theme;
    document.getElementsByTagName('main')[0].className = theme;
    let buttons = document.getElementsByTagName('button');
    for (let i = 0;i<buttons.length;i++){
        buttons[i].className = theme;
    }
}