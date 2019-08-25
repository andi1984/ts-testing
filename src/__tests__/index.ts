import Dog from '../index.ts';
describe('dog', () => {
    test('dog should bark', () => {
        const dog = new Dog;
        expect(dog.bark()).toBe("Bark Bark");
    })
});