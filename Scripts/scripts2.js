*{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
body{
    min-height: 100vh;
    background: linear-gradient(#7d6cfc,#c635ea);
}
.action{
    position: fixed;
    bottom: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 5px 5px rgba(0,0,0,0.1);
}
.action span{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a13dea;
    font-size: 2em;
    transition: 0.3em ease-in-out;
}
.action.active span{
    transform: rotate(135deg);
}
.action ul{
    position: absolute;
    bottom: 55px;
    background: #fff;
    min-width: 250px;
    padding: 20px;
    border-radius: 20px;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}
.action.active ul{
    bottom: 65px;
    opacity: 1;
    visibility: visible;
    transition:0.3s;
}
.action ul li{
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: 10px 0;
    padding: 10px 0;
    transition: 0.3s;
}
.active ul li:hover{
    font-weight: 600;
}
.action ul li:not(:last-child){
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.action ul li img{
    margin-right: 10px;
    opacity: 0.2;
    transform: scale(0.8);
}
.action ul li:hover img{
    opacity:0.8
}