document.documentElement.style.scrollBehavior = "smooth"
// set body
document.body.style.backgroundColor = "#151D21"
document.body.style.backgroundImage = "url(../Frontend/image/bg.png)"
document.body.style.backgroundSize = "100%"
document.body.style.backgroundRepeat = "no-repeat"
document.body.style.color = "#fff";
document.body.style.fontFamily = "Poppins"
document.body.style.margin = "0"
document.body.style.padding = "0"

//set a
const a = document.getElementsByTagName("a")
for(let i=0; i<a.length; i++){
    a[i].style.textDecoration = "none"
    a[i].style.color = "inherit"
}

//set class container
const container = document.querySelector(".container");
container.style.width = "80%"
container.style.margin = "0 auto"

//set header ul -> navbar and title
document.querySelector("header ul").style.textAlign = "right" 

// set header ul h1-> title
const titeStyle = document.querySelector("header a ul").style
titeStyle.fontWeight = "700"
titeStyle.fontSize = "48px"
titeStyle.color = "#5DA9D5"
titeStyle.float = "left"
titeStyle.margin = "-0px 0 0 0"
titeStyle.paddingTop = "5px"

//set actived page
document.querySelector(".actived").style.color = "#5DA9D5"
//set header .container ul li -> navbar 
const navbar = document.querySelectorAll("header .container ul li")
for(let i=0; i<navbar.length; i++){
    navbar[i].style.display = "inline-block"
    navbar[i].style.fontSize = "30px"
}
//set header ul li a
const navLink = document.querySelectorAll("header ul li a")
for(let i=0; i<navLink.length; i++){
    navLink[i].style.padding = "25px 20px"
    navLink[i].style.display = "inline-block"   
}

//set class begin
document.querySelector(".begin").style.textAlign = "center"
document.querySelector(".begin").style.padding = "190px"

//set .begin h2
const beginH2 = document.querySelector(".begin h2").style
beginH2.padding = "2px 10px"
beginH2.fontWeight = "400"
beginH2.fontSize = "64px"

//set .begin a -> button
const button = document.querySelector(".begin a").style
button.marginTop = "35px"
button.display = "inline-block"
button.backgroundColor = "#5DA9D5"
button.fontWeight = "600"
button.fontSize = "24px"
button.padding = "5px 10px"
button.borderRadius = "4px"

//set id middle
const middleContent = document.getElementById("middle").style
middleContent.marginTop = "300px"
middleContent.height = "600px"

//set #middle h2
document.querySelector("#middle h2").style.textAlign = "center"
document.querySelector("#middle h2").style.fontSize = '36px'

//set class article
const article = document.querySelector('.article').style
article.margin = "5px 20px"
article.display = "grid"
article.gridTemplateColumns = "33% 33% 33%"

//set class post
const post = document.querySelectorAll(".post")
for(let i=0; i<post.length; i++){
    post[i].style.margin = "10px 20px"
    post[i].height = "600px"
}

//set post h3 -> title of post
const titlePost = document.querySelectorAll(".post h3")
for(let i=0; i<post.length; i++){
    titlePost[i].style.textAlign = "center"
    titlePost[i].style.weight = "600"
    titlePost[i].style.fontSize = "24px"
    titlePost[i].style.marginBottom = "10px"
}

//set image
const image = document.querySelectorAll(".post img");
for(let i=0; i<image.length; i++){
    image[i].style.width = "200px"
    image[i].style.margin = "0 auto"
    image[i].style.display= "block"
}

//set .post p -> content of post
const contentOfPost = document.querySelectorAll(".post p")
for(let i=0; i<post.length; i++){
    contentOfPost[i].style.margin = "10px 0"
    contentOfPost[i].style.height = "265px"
    contentOfPost[i].style.textAlign = "justify"
    contentOfPost[i].style.overflow = "hidden"
}
const readMore = document.querySelectorAll(".post a")
for(let i=0; i<readMore.length; i++){
    readMore[i].style.color = "#5DA9D5"
}
//set footer
const footer = document.getElementsByTagName("footer")[0].style
footer.position = "fixed"
footer.bottom = "0pt"
footer.display = "block"
footer.fontSize = "12px"
function mouseEntered(){
    document.querySelector(".begin a").style.backgroundColor = "#2A76A1"
}
function mouseLeaved(){
    document.querySelector(".begin a").style.backgroundColor = "#5DA9D5"
}