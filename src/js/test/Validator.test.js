import Validator from "../Validator";

const nameList = [
    ['asdfaf', true],
    ['_sdfaf', false],
    ['3sdfaf', false],
    ['-sdfaf', false],
    ['as22af', true],
    ['as2-2af', true],
    ['as2_2af', true],
    ['!sdfaf', false],
    ['sdfa2', false],
    ['sdfa_', false],
    ['sdfa-', false],
    ['', false],
    [null, false],
    ['фив', false],
    [{}, false],
    [['фив'], false],
    [22, false],
    ['asf5555asdfag', false],
    ['asdf____asdfaf', true],
    ['asdf--asdfaf', true],
];

const validatorHandler = test.each(nameList);
validatorHandler('validation name %s', (name, expected) =>
    expect(new Validator().validateUsername(name)).toBe(expected)
)
