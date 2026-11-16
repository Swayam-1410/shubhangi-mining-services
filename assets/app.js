const form = document.querySelector('#enquiry-form');
if (form) {
  const recipient = 'business@shubhangimining.com';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = 'Business enquiry: ' + data.get('project').trim();
    const body = [
      'Name: ' + data.get('name').trim(),
      'Company: ' + data.get('company').trim(),
      'Business email: ' + data.get('email').trim(),
      'Project / Location: ' + data.get('project').trim(),
      '',
      'Requirement:',
      data.get('requirement').trim()
    ].join('\r\n');
    window.location.href = 'mailto:' + recipient + '?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
  form.hidden = false;
}
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.16 });
  document.querySelectorAll('.operations, .client-wall, .values, .leadership').forEach((element) => observer.observe(element));
}
