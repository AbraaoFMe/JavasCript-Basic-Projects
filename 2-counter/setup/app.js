//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const action = e.currentTarget.dataset.function;

        switch (action) {
            case 'decrease':
                count--;
                break;
            case 'reset':
                count = 0;
                break;
            case 'increase':
                count++;
                break;
        }

        if (count > 0) {
            value.style.color = 'green';
        }
        else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = '#222';
        }

        value.textContent = count;
    });
});