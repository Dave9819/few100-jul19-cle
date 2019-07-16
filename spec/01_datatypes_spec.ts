describe('data types', () => {
    it('using let', () => {
        let x: any;

        x = 'Blue';
        x = 19;

        expect(x).toBe(19);

        let y = 34;

        expect(y).toBe(34);
    });

    it('using const', () => {
        const PI = 3.1415;

        const favoriteColors = ["blue", "red", "green"];

        favoriteColors[0] = 'Purple';
        expect(favoriteColors[0]).toBe('Purple');
    });

    it('has a var keyword but do not use it because it is broken', () => {
        let age = 22;

        if (age > 21) {
            var message = 'Old Enough'; // Do not do this. Ever. Don't Use VAR.  If you use Let, then limits the scope of this variable to the IF statement.  Using VAR does not limit the scope to the IF statement block.
        }

        expect(message).toBe('Old Enough');
    });
});

describe('literals in typescript', () => {
    it('has numeric literals', () => {
        let x1 = 12;
        let x2 = 12.3;
        let x3 = 1_000_000; //you can put underscorces in the thousands places for readability (typescript only)
        let x4 = 0xff; //0x means this is hexadecimal (base 16) number
        let x5 = 0o22; //0o means it is base 8 (octal)
        let x6 = 0b1101; //0b means it is binary (base 2)
    });
    it('has string literals', () => {
        let name = 'Dave';
        expect(name).toBe("Dave");

        let quote = 'As Emerson said, "A foolish consistency is the hobgoblin of small minds".';

        quote = "As Emerson said, \"A foolish consistency is the hobgoblin of small minds\".";
    });

    it('has template strings', () => {
        //use backtick to have multiline string
        let story = `chapter 1.
        
        It was a nice sunny day.
        
        The end.`;

        console.log(story);

        //substitutions - use backtick
        let name = 'Bob', age = 53;

        let info = `The name is ${name} and the age is ${age}`; //must use backtick - if using quote, will not work
        expect(info).toBe('The name is Bob and the age is 53');

        let message = `This is just a "string" by 'Dave'.`;
    });
    it('has the standard stuff', () => {
        let oldEnough = true;
        let tooYoung = false;

        expect("dog").toBeTruthy();
        expect("").toBeFalsy();
        expect(99).toBeTruthy();
        expect(0).toBeFalsy();
        expect(-1).toBeTruthy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(({})).toBeTruthy();
        expect([]).toBeTruthy();
    });
    it('has array literals', () => {
        let shoppingList: (string | number)[] = [];
        shoppingList[0] = 'Bread';
        shoppingList[1] = 'Shampoo';
        shoppingList[999] = 'Beer';
        shoppingList[2] = 12;

        expect(shoppingList[999]).toBe('Beer');
        expect(shoppingList[22]).toBeUndefined();
    });
    it('destructuring arrays', () => {
        const shoppingList = ['Bread', 'Shampoo', 'Beer'];
        const [firstElement, , thirdElement, fourthElement] = shoppingList;

        expect(firstElement).toBe('Bread');
        expect(thirdElement).toBe('Beer');
        expect(fourthElement).toBe(undefined);

        const [head, ...rest] = shoppingList;
        expect(head).toBe('Bread'); //first array element
        expect(rest).toEqual(['Shampoo', 'Beer']); //... in front of 'rest' gets the rest of the array elements
    });
    it('also has a spread operator', () => {
        let numbers = [1, 2, 3, 4, 5, 6];
        let numbers2 = [0, ...numbers, 7];
        expect(numbers2).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('has tuples', () => {
        type Musician = [string, string, number, string];
        let warren: Musician = ['Warren', 'Ellis', 51, 'Musician'];

        const [, lastName, howOld] = warren;
        expect(lastName.toUpperCase()).toBe('ELLIS');
        expect(howOld).toBe(51);
    });
});