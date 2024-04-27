const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let iceCream = "チョコレート！";
if (iceCream === "チョコレート"){
    alert("やった！チョコレートアイス大好き！");
} else {
    alert("あれれ，でもチョコレートが好きなのに......");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

document.querySelector("html").addEventListener("click", () => {
    alert("痛っ！つつかないで！");
});

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/download.jpg") {
        myImage.setAttribute("src", "images/website-drawing-scan.png");
    } else {
        myImage.setAttribute("src", "images/download.jpg");
    }
}

let myButton = document.querySelector("button");

function setUserName() {
    const myName = prompt("あなたの名前を入力して下さい。");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozillaはかっこいいよ，${myName}さん，Mozillaはかっこいいよ。`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozillaはかっこいいよ，${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};