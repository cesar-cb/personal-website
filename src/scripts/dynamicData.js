import { diffYears } from './utils/date';

const birth = new Date('May 11, 1997');
const jobStart = new Date('March 15, 2016');

const now = new Date();

const getAge = diffYears(now, birth);
const getExperience = diffYears(now, jobStart);

const ageElement = document.querySelector('#age');
const experienceElement = document.querySelector('#experience');

ageElement.innerHTML = getAge;
experienceElement.innerHTML = getExperience;
