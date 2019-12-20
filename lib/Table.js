class Table {
  /**
   * TableTop class: This class defines the Table environment for
   * the robot to move around. This puts the restrictions/constraints on the
   * movements.
   * @param {*} length
   * @param {*} width
   */
  constructor(length, width) {
    this.dimension = {
      length,
      width
    };
  }

  /**
   * Utility function to check if the coordinates are on the table
   * @param {number} x coordinates along x-axis (length)
   * @param {number} y coordinates along y-axis (width)
   */
  isValidMove(x, y) {
    if (
      x >= 0 &&
      x < this.dimension.length &&
      y >= 0 &&
      y < this.dimension.width
    ) {
      return true;
    }
    return false;
  }
}

module.exports = Table;
