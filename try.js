const box = document.querySelector('.box')
const input = document.querySelector('.oo')
const aa = document.querySelector('ul')

input.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        const nee = this.value
        if(nee.length !== 0){
            send(this.value)
            this.value = ""
        }

    }
})

function send(text = '') {
    const li = document.createElement('li');
    li.innerText = text;
    aa.appendChild(li);
}
