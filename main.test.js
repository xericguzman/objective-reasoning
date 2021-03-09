const {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
} = require('./main.js');

describe('isAdmin', () => {

    it('returns true if the user is an admin', () => {

        expect(isAdmin({
            firstName: 'Eileen',
            lastName: 'Smith',
            userRole: 'REGULAR_USER'
        })).toBe(false);

        expect(isAdmin({
            firstName: 'Ian',
            lastName: 'Rogers', 
            userRole: 'USER_MANAGER'
        })).toBe(false);

        expect(isAdmin({
            firstName: 'Jeff',
            lastName: 'Wilson', 
            userRole: 'ADMIN'
        })).toBe(true);
    });
});

describe('getEmail', () => {

    it('returns an email from a user object', () => {

        expect(getEmail({
            firstName: 'Brian',
            lastName: 'Carela'
        })).toBe('brian.carela@codeimmersives.com');

        expect(getEmail({
            firstName: 'Mesuara',
            lastName: 'Kaleziq'
        })).toBe('mesuara.kaleziq@codeimmersives.com');

        expect(getEmail({
            firstName: 'Anthony',
            lastName: 'DeRosa'
        })).toBe('anthony.derosa@codeimmersives.com');
    });
});

describe('getPlaylistLength', () => {

    it('returns the length of the given playlist', () => {

        expect(getPlaylistLength({
            name: 'playlist 1',
            songs: ['song1', 'song2', 'song3']
        })).toBe(3);

        expect(getPlaylistLength({
            name: 'playlist 2',
            songs: ['song4', 'song3']
        })).toBe(2);
    
        expect(getPlaylistLength({
            name: 'playlist 3',
            songs: []
        })).toBe(0);
    });
});

describe('getHardestHomework', () => {

    it('returns the name of hardest homework', () => {
        
        expect(getHardestHomework([
            { name: 'homework 1', averageScore: 50 }
        ])).toBe('homework 1');
    
        expect(getHardestHomework([
            { name: 'hip-hip-array', averageScore: 20 },
            { name: 'wait-i-object', averageScore: 50 }
        ])).toBe('hip-hip-array');

        expect(getHardestHomework([
            { name: 'some hw', averageScore: 99 },
            { name: 'other hw', averageScore: 20 },
            { name: 'third hw', averageScore: 3 }
        ])).toBe('third hw');
    });

    it('should return an empty string if given an empty array', () => {
        expect(getHardestHomework([])).toBe('');
    });
});

describe('createPhonebook', () => {

    it('creates a phonebook from two arrays', () => {

        expect(createPhonebook(
            ['Jimothy', 'Maria', 'Karl'],
            ['123-456-7890', '000-000-0000', '999-888-7766'],
        )).toStrictEqual({
            'Jimothy': '123-456-7890',
            'Maria': '000-000-0000',
            'Karl': '999-888-7766'
        });

        expect(createPhonebook(
            ['Melissa', 'Andre'],
            ['206-111-2233', '321-123-2424']
        )).toStrictEqual({
            'Melissa': '206-111-2233',
            'Andre': '321-123-2424'
        });

        expect(createPhonebook([], [])).toStrictEqual({});
    });
});