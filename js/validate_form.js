const authForm = document.querySelector('#authForm')
const btn = document.querySelector('#btnForm')
const overlay = document.querySelector('.overlay')
const overlayBtn = overlay.querySelector('.popup__btn')

let statusValidatePass = false
let statusValidatePhone = false
btn.addEventListener('click', (e) => {
    // overlay.classList.toggle('active')

    // let inputs = document.querySelectorAll('input')
    // inputs.forEach(input => {
    //     validateForm(e, input)
    // })    
    if (statusValidatePass === false || statusValidatePhone === false) {
        event.preventDefault()
    }
    let inputs = authForm.querySelectorAll('input')
    inputs.forEach(input => {
        validateForm(e, input)
    })

    // overlay.classList.toggle('active')
})

overlayBtn.addEventListener('click', () => {
    overlay.classList.toggle('active')
})

const inputsAuthForm = authForm.querySelectorAll('input')
inputsAuthForm.forEach(input => {
    input.addEventListener('input', validateForm)
})

function validateForm(eventForm = null, inputform = null) {
    const e = eventForm || event
    const input = inputform || this
    if (input.id === 'phone') return
    const inputParent = input.parentElement
    const inputParentWrapper = inputParent.parentElement
    const errorMsg = inputParentWrapper.querySelector('.input-error')
    let errorTag
    // debugger
    if (input.id === 'password' && input.id !== 'email') {
        let resultCheckPass = checkPassword(input, errorMsg, e, inputParent)
        if (resultCheckPass !== true) {

        }
        return
    } if (input.id === 'passwordConfirm') {
        if (input.value === undefined || input.value === '') {
            addError(errorMsg, input, 'Required', e)
        } else if (input.value !== document.querySelector('#password').value && input !== '') {
            addError(errorMsg, input, 'Passwords do not match', e)
        } else if (input !== '') {
            statusValidatePass = true
            deleteError(errorMsg, input)
            deleteError(document.querySelector('#password').closest('#inputCheck').querySelector('.input-error'), document.querySelector('#password'))
        }
        return
    }

    if (input.id === 'telInput') {
        input.value = input.value.replace(/[^\d]/, '')
        if (input.value === '') {
            addError(errorMsg, input, 'Required', e)
            return
        } else if (input.value !== '') {
            statusValidatePhone = true
            document.querySelector('#phone').value += input.value
        }
    }
    if (input.type === 'checkbox') {
        if (!input.checked) {
            input.parentElement.querySelector('.form__label-text').style.color = '#EB0305'
            e.preventDefault()
        } else {
            input.value = 'yes'
            input.parentElement.querySelector('.form__label-text').style.color = '#2F3640'
        }
        return
    }
    if (input.value === '' && input.type !== 'checkbox' && input.id !== 'selectPhone') {
        addError(errorMsg, input, 'Required', e)
        return
    } else if (input.value !== '' && input.type !== 'checkbox' && input.id !== 'selectPhone') {
        deleteError(errorMsg, input)
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

const checkPassword = (input, errorMsg, e, inputParent) => {
    const secondInput = authForm.querySelector('#passwordConfirm')
    const secondValue = secondInput.value

    if (input.value === '' || input.value === null) {
        addError(errorMsg, input, 'Required', e)
    } else if ((input.value).length < 8) {
        addError(errorMsg, input, 'Passwords must be 8 symbols', e)
    } else if (!((input.value).match(/[!@#$%^&*()]/))) {
        addError(errorMsg, input, 'Passwords must be special symbols', e)
    } else if (!((input.value).match(/[0-9]/))) {
        addError(errorMsg, input, 'Passwords must be numbers', e)
    } else if (input.value !== secondValue) {
        addError(errorMsg, input, 'Passwords do not match', e)
    } else {
        deleteError(errorMsg, input)
        deleteError(secondInput.closest('#inputCheck').querySelector('.input-error'), secondInput)
        statusValidatePass = true
        return true
    }
}
