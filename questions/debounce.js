// Implement debounce
function debounce(fn, time) {
  if (!fn) return;
  
  return (...args) => {
    if (this.timeout) clearTimeout(this.timeout);
    
    this.timeout = setTimeout(() => {
      fn.apply(fn, args);
      this.timeout = null;
    }, time);
  }
}