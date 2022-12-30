let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

console.table(activities);

activities.forEach(j => {
    let percentage = (j[1] / 24) * 100;
    j[2] = percentage + "%";
});

console.table(activities);
