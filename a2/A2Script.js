function openModal() {
    document.getElementById('button').addEventListener('click', function() {
        document.querySelector('.bg-modal').style.display = 'flex';
    });
}

function closeModal() {
    document.querySelector('.close').addEventListener('click', function() {
        document.querySelector('bg.modal').style.display = 'none';
    });
}