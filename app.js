const result = document.getElementById("result");

document.querySelectorAll('.btn-number').forEach(button => {
    button.addEventListener('click', () => {
        appendToResult(button.textContent);
    });
});

document.querySelectorAll('.btn-operator').forEach(button => {
    button.addEventListener('click', () => {
        appendToResult(button.textContent);
    });
});

document.querySelector('.btn-clear').addEventListener('click', clearResult);
document.querySelector('.btn-delete').addEventListener('click', deleteLast);

document.querySelector('.btn-equals').addEventListener('click', calculateResult);

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}
