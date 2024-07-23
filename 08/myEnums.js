// const AISLE = 0
// const MIDDEL = 1
// const WINDOW = 2
// if(seat === AISLE){
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 2] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hsSeat = SeatChoice.AISLE;
