function spy(func) {

  function wrapper(...args) {
    // χρησιμοποιώντας ...args αντί για ορίσματα για να κρατήσουμε τον "πραγματικό" πίνακα στην wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}
