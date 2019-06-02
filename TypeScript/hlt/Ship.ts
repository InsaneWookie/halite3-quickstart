import { Commands } from "./Commands";
import { Constants } from "./Constants";
import { Direction } from "./Direction";
import { Entity } from "./Entity";
import { Position } from "./Position";

/** Represents a ship. */
export class Ship extends Entity {
    constructor(owner: number, id: number, position: Position, public haliteAmount: number) {
        super(owner, id, position);
    }

    /** Is this ship at max halite capacity? */
    get isFull() {
        return this.haliteAmount >= Constants.MAX_ENERGY;
    }

    /** Return a move to turn this ship into a dropoff. */
    public makeDropoff() {
        return `${Commands.CONSTRUCT} ${this.id}`;
    }

    /**
     * Return a command to move this ship in a direction without
     * checking for collisions.
     */
    public move(direction: Direction) {
        return `${Commands.MOVE} ${this.id} ${direction.toWireFormat()}`;
    }

    /**
     * Return a command to not move this ship.
     *
     * Not strictly needed, since ships do nothing by default.
     */
    public stayStill() {
        return `${Commands.MOVE} ${this.id} ${Commands.STAY_STILL}`;
    }

    public updateShip(x: number, y: number, halite: number) {
        this.position.x = x;
        this.position.y = y;
        this.haliteAmount = halite;
    }

    public toString() {
        return `${this.constructor.name}(id=${this.id}, ${this.position}, cargo=${this.haliteAmount} halite)`;
    }
}
