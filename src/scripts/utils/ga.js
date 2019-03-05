export const trackOutboundLink = (url) => {
  ga('send', 'event', 'outbound', 'click', url, {
    transport: 'beacon',
    hitCallback: function(){document.location = url;},
  });
}
