let btnEl = document.querySelectorAll('button');
for (let btn of btnEl) {
    btn.addEventListener('click', () => {
        console.log("button clicked");
    })
}