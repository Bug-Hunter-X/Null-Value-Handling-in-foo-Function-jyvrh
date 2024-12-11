function foo(a, b) {
  if (a === null || b === null) {
    return 0; // or any other appropriate default value
  }
  // ... rest of the function, which is now safe to execute
  return a + b; // Example operation
}