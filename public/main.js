var trash = document.getElementsByClassName("fa-trash")

Array.from(trash).forEach(function(element) {
    element.addEventListener('click', function() {
        const word = this.parentNode.parentNode.childNodes[1].innerText
        const isIt = this.parentNode.parentNode.childNodes[3].innerText
        fetch('palindrome', {
            method: 'delete',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'word': word,
                'isIt': isIt
            })
        }).then(function (response) {
            window.location.reload()
        })
    })
})

// function checkPalindrome() {
//     let nameEntered = document.querySelector('input').value.toLowerCase()
//     fetch(`/api?name=${nameEntered}`)
//         .then(response => response.json())
//         .then((data) => {
//         document.querySelector('h2').innerText = data.result
//         })
// }