document.getElementById('manageUser').addEventListener('click', () => {
    alert('Manage User option clicked!');
});

document.getElementById('notifications').addEventListener('change', (event) => {
    if (event.target.checked) {
        alert('Notifications turned on');
    } else {
        alert('Notifications turned off');
    }
});


document.getElementById('darkMode').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f5f5f5';
        document.body.style.color = '#333';
    }
});

document.getElementById('signOut').addEventListener('click', () => {
    alert('You have signed out!');
});

