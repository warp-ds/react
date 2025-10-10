export function debounce(func, wait = 200, immediate = false) {
  let timeout;
  return function () {
    var later = () => {
      timeout = null;
      // @ts-expect-error
      if (!immediate) func.apply(this, arguments);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    // @ts-expect-error
    if (callNow) func.apply(this, arguments);
  };
}
