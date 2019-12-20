const Table = require('./Table');
/**
 * A utility function for input validation of facing attribute in the class of robot
 * @param {string} direction
 */
const isValidDirection = direction => {
  return ['NORTH', 'SOUTH', 'WEST', 'EAST'].includes(direction.toUpperCase());
};

/**
 * Robot
 * A class defining robot's state and methods for movements
 */
class Robot {
  /**
   * This will place or replace the robot on the Table(x, y coordination) and
   * direction in which the robot is facing.
   * @param {number} x
   * @param {number} y
   * @param {string} facing
   * @param {Table} table
   */
  place(x, y, facing, table) {
    this.x = x;
    this.y = y;
    if (isValidDirection(facing)) {
      this.facing = facing;
    } else {
      this.facing = 'invalid';
    }
    this.table = table;
  }

  /**
   * Reports the location and the direction towards which the robot is facing
   * If the robot is not placed on the table, returns false.
   */
  report() {
    if (this.table) {
      return {
        x: this.x,
        y: this.y,
        facing: this.facing
      };
    }
    return false;
  }

  /**
   * Sticking to the instructions of the problem of moving only one unit
   * in the direction. However, it can be easily implemented to cover more
   * distance or allow direction input.
   *
   * This function returns true if the movement was successful else
   * returns false
   */
  move() {
    switch (this.facing) {
      case 'NORTH':
        if (this.table.isValidMove(this.x, this.y + 1)) {
          this.y += 1;
          return true;
        }
        return false;

      case 'SOUTH':
        if (this.table.isValidMove(this.x, this.y - 1)) {
          this.y -= 1;
          return true;
        }
        return false;

      case 'EAST':
        if (this.table.isValidMove(this.x + 1, this.y)) {
          this.x += 1;
          return true;
        }
        return false;

      case 'WEST':
        if (this.table.isValidMove(this.x - 1, this.y)) {
          this.x -= 1;
          return true;
        }
        return false;

      default:
        return false;
    }
  }

  /**
   * This method will rotate the robot 90 degrees in the left
   * direction without changing the position of the robot.
   */
  left() {
    switch (this.facing) {
      case 'NORTH':
        this.facing = 'WEST';
        break;

      case 'SOUTH':
        this.facing = 'EAST';
        break;

      case 'EAST':
        this.facing = 'NORTH';
        break;

      case 'WEST':
        this.facing = 'SOUTH';
        break;

      default:
        break;
    }
  }

  /**
   * This method will rotate the robot 90 degrees in the right
   * direction without changing the position of the robot.
   */
  right() {
    switch (this.facing) {
      case 'NORTH':
        this.facing = 'EAST';
        break;

      case 'SOUTH':
        this.facing = 'WEST';
        break;

      case 'EAST':
        this.facing = 'SOUTH';
        break;

      case 'WEST':
        this.facing = 'NORTH';
        break;

      default:
        break;
    }
  }
}

module.exports = Robot;
