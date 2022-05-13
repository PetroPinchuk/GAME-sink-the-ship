import { random } from "./random"
import { createArray } from "./array"

export const createWarShip = (shipLength, maxSize) => {
    const position = random(0,2) % 2 === 0 ? 'horizontal' : 'vertical'
    return position === 'horizontal' 
        ? createHorizontalWarship(shipLength, maxSize) 
        : createVerticalWarship(shipLength, maxSize)
}

export const createHorizontalWarship = (length, maxSize) => {
    const maxX = maxSize - length;
    const maxY = maxSize;

    const headX = random(0, maxX)
    const headY = random(0, maxY)

    return createArray(length, (i) => {
        return {y: headY, x: headX + i}
    })
}

export const createVerticalWarship = (length, maxSize) => {
    const maxX = maxSize;
    const maxY = maxSize - length;

    const headX = random(0, maxX)
    const headY = random(0, maxY)

    return createArray(length, (i) => {
        return {y: headY + i, x: headX}
    })
}