const authForm = document.querySelector('#authForm')
const btn = document.querySelector('#btnForm')


btn.addEventListener('click', (e) => {
    let inputs = document.querySelectorAll('input')
    inputs.forEach(input => {
        validateForm(e, input)
    })
})


const validateForm = (e, input) => {
    const inputParent = input.parentElement
    const inputParentWrapper = inputParent.parentElement
    const errorMsg = inputParentWrapper.querySelector('.input-error')
    const inputParentAttr = inputParent.dataset.name

    // debugger
    if (input.type === 'checkbox') {
        if (!input.checked) {
            e.preventDefault()
        } else {
            input.value = 'yes'
        }
        return
    }
    if (input.type === 'radio') {
        console.log(input.checked)
        document.querySelectorAll('input').type === 'radio'
        if (!input.checked) {
            e.preventDefault()
        }
        return
    }
    if (input.value === '' && input.type !== 'checkbox') {
        if (inputParent.id === 'selectInput') {
            addError(errorMsg, input, 'Please, choose one', e)
        } else {
            addError(errorMsg, input, 'Required', e)
        }

        if (document.querySelector(`#${inputParentAttr}`) !== null) {
            document.querySelector(`#${inputParentAttr}`).style.color = 'red'
        }
        return
    } else if (input.value !== '' && input.type !== 'checkbox' && input.type !== 'radio') {
        deleteError(errorMsg, input)
        if (document.querySelector(`#${inputParentAttr}`) !== null) {
            document.querySelector(`#${inputParentAttr}`).style.color = '#2F3640'
        }
    }
}

const inputSetError = (text) => {
    const inputErrorTag =
        `<p class="input-error" id="inputError">${text}</p>`
    return inputErrorTag
}

const addError = (errorMsg, input, errorText, e) => {
    if (errorMsg !== null) {
        errorMsg.innerHTML = errorText
    } else {
        input.parentElement.insertAdjacentHTML('afterEnd',
            inputSetError(errorText))
        input.parentElement.style.border = '1px solid #EB0305'
    }
    e.preventDefault()
}

const deleteError = (errorMsg, input) => {
    if (errorMsg !== null) {
        errorMsg.remove()
        input.parentElement.style.border = '1px solid #DEDEDE'
    } else {
        input.parentElement.style.border = '1px solid #DEDEDE'
    }
}
