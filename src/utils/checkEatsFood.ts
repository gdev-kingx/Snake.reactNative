import { Coordinate } from "../types/types";

export const checkEatsFood = (
    head: Coordinate,
    food: Coordinate,
    area: number
): boolean => {
    const distbtwFoodnSnakeX: number = Math.abs(head.x - food.x);
    const distbtwFoodnSnakeY: number = Math.abs(head.y - food.y);
    return (
        distbtwFoodnSnakeX < area && distbtwFoodnSnakeY < area
    );
}