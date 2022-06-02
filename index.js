function addingEventListener() {
    const input = document.getElementById('input')
    input.addEventListener('click',clickAlert)
}
addingEventListener();

const clickAlert = () => {
    alert('I was clicked!')
}