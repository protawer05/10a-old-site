const form = document.querySelector('.form');

const sendData = async (url, data) => {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};
function deleteData(url){
    fetch(url, {
       method: 'Delete',
   });
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const json = Object.fromEntries(formData.entries());
    sendData('http://localhost:3000/homework', json);
});


