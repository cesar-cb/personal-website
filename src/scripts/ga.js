import { trackOutboundLink } from './utils/ga';

const linkedin = document.querySelector('[data-track-id="linkedin"]');
const github = document.querySelector('[data-track-id="github"]');
const mail = document.querySelector('[data-track-id="mail"]');

const sendLinkEvent = (e) => {
  const href = e.target.href;
  trackOutboundLink(href);
};

const sendMailEvent = () => {
  ga('send','event','mailto','click','email clicked');
};

linkedin.addEventListener('click', sendLinkEvent);
github.addEventListener('click', sendLinkEvent);
mail.addEventListener('click', sendMailEvent);
