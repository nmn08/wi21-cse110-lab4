let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (let sta in statistics) {
    if (sta[0] == 'r' || statistics[sta] % 2 == 1)
        console.log("Key: " + sta + " with value: " + statistics[sta]);
}