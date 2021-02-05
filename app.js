let appElement = document.getElementById('appElement');

if (appElement) {
    startApp();
}

function startApp(parent){
    let subElement = document.createElement('span');
    subElement.style.width="50%";
    subElement.style.height="30px"
    subElement.innerHTML = "uyjtgfd";
}

function getTheme(save) {
    let root = document.getElementById('theme-path').value;
    let theme = window.localStorage.getItem('theme');
    if (save){
        theme = (theme!=='dark') ? 'dark':'light';
    }
    let style = document.querySelector('link');
    style.href = root + "/assets/css/"+theme + ".css";
    window.localStorage.setItem('theme', theme);
}