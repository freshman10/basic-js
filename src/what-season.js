const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if(date === undefined){
    return 'Unable to determine the time of year!'
  }

  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
}

  const month = date.getMonth()
  const seasons = {
    "winter":[11,0,1],
    "spring":[2,3,4],
    "summer":[5,6,7],
    "autumn":[8,9,10]
  }
 
  for(let [s,m] of Object.entries(seasons)){
    if(m.includes(month)){
      return s
    }
  }

}

module.exports = {
  getSeason
};
