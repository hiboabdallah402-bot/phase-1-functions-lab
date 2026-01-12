// Code your solution in this file!
// index.js

const HQ_BLOCK = 42;
const FEET_PER_BLOCK = 264;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - HQ_BLOCK);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * FEET_PER_BLOCK;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance > 2500) {
    return 'cannot travel that far';
  }

  if (distance <= 400) {
    return 0;
  }

  if (distance > 2000) {
    return 25;
  }

  return (distance - 400) * 0.02;
}

