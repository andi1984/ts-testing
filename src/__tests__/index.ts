import Dog from '../index';
describe('dog', () => {
    test('dog should bark', () => {
        const dog = new Dog;
        expect(dog.bark()).toBe("Bark Bark");
    })
});