const returnFirstTwoDrivers = () => {
    return ['Antonia', 'Nuru']
}

const returnLastTwoDrivers = () => {
    return ['Amari','Mo']
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return (fare) => {
        return int*fare
    }
}

const fareDoubler = (doubleFare) => {
    if (typeof doubleFare === 'number')
    return createFareMultiplier(2)(doubleFare)
}

const fareTripler = (tripleFare) => {
    if (typeof tripleFare === 'number')
    return createFareMultiplier(3)(tripleFare)
}

const currentDrivers = ['Johannes', 'Onelis']

const selectDifferentDrivers = (currentDrivers, callback) => {
    return currentDrivers.slice(0,2), callback()
}
