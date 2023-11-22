export default class Validator {

    validateUsername(name) {
        return !!name && /^[a-z]([\da-z-_]*[a-z])?$/i.test(name) && !/\d{3}/.test(name)
    }
}

