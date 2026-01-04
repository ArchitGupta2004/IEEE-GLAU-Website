export const animatedScrollTo = (id, offset = 80, duration = 900) => {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end =
    target.getBoundingClientRect().top + window.scrollY - offset;

  let startTime = null;

  const easeInOut = (t) =>
    t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const animate = (time) => {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);

    const ease = easeInOut(progress);
    window.scrollTo(0, start + (end - start) * ease);

    if (progress < 1) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};