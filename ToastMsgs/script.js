const buttons = document.querySelectorAll('.buttons .btn');
notifications = document.querySelector('.notifications');
toasts = document.querySelectorAll('li');

// const addMouseOverEvent = (toast) => {
//     toast.addEventListener('mouseover', () => {
//         window.alert('Hi');
//     });
// };

toasts.forEach( (toast) => {
    addMouseOverEvent(toast);
});

const toastdetails = {
    success : {
        icon: 'fa-circle-check',
        text: 'Success'
    },
    error : {
        icon: 'fa-circle-xmark',
        text: 'Error'
    },
    warning : {
        icon: 'fa-triangle-exclamation',
        text: 'Warning'
    },
    info : {
        icon: 'fa-circle-info',
        text: 'Info'
    }
}

const removeToast = (toast) => {
    toast.remove();
}

const createToast = (buttionId) => {
    var toast = document.createElement("li");
    toast.className = `toast ${buttionId}`;
    toast.innerHTML = `<div class="column">
                            <i class="fa-solid ${toastdetails[buttionId].icon}"></i>
                            <span>${toastdetails[buttionId].text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.append(toast);
    // addMouseOverEvent(toast);
    setTimeout( () => removeToast(toast), 5000);
}

buttons.forEach( (btn) => {
    btn.addEventListener('click',() => createToast(btn.id));
});