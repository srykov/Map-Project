import states from '../data/states.json';

export function getStateNameByCode(code) {

  let theState = states.find(state =>
    state.code === code
  )
  return theState.name
}

export function getCenterOfState(code){
  if(!code){
    return null
  }

  let theState = states.find(state =>
    state.code === code
  )
  return theState.center
}

export function compareClimbingAreaByStateAndName(area1, area2){
	const stateComparison = compareItems(area1.state, area2.state)
	const comparison = stateComparison !== 0 ?  stateComparison : compareItems(area1.name, area2.name)
	return comparison;
}

function compareItems(a, b) {
  var valueA = a.toUpperCase(); // ignore upper and lowercase
  var valueB = b.toUpperCase(); // ignore upper and lowercase
  if (valueA < valueB) {
    return -1;
  }
  if (valueA > valueB) {
    return 1;
  }

  // names must be equal
  return 0;
};