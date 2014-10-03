var house = {
    rooms: 7,
    sharedEntrance: false,
    lock: function() {},
    unlock: function() {}
};

// Read out the values of the two properties
console.log(house.rooms); // 7
console.log(house.sharedEntrance); // false

// Execute the ‘lock’ method of the object
house.lock();

// Update the value for the ‘rooms’ property
house.rooms = 8;

// Add a completely new property dynamically
house.floors = 2;

// Read out the ‘rooms’ property again – notice it has now changed
console.log(house.rooms); // 8