// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(object) {
if (object.userRole ==="ADMIN"){
    return true;
} else {
    return false;
}
}


function getEmail(user) {
    firstName = user.firstName.toLowerCase();
    lastName = lastName = user.lastName.toLowerCase();
    email = firstName + lastName + '@codeimmersives.com';
    return email;
}

function getPlaylistLength(playlist) {
    return playlist.songs.length
}

function getHardestHomework(arr) {
    let lowestScore = 1==
    let hardestHW = ''

    for (let i = 0; i < arr.length; i++) {
        const score = arr[i]averageScore;

        if (score < lowestScore) {
            lowestScore = score
            hardestHW = arr[i].name 
        }
    }
return hardestHW
}

function createPhonebook(firstNameArr, numArr, phonebook = {}) {
    for (let i = 0; i < firstNameArr.length; i++) {
        let firstName = firstNameArr[i];
        let ph = numArr[i];

        phonebook[firstName] = ph;
    }
    return phonebook;
}





// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};