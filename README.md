# Null Value Handling Bug in JavaScript Function

This repository demonstrates a common bug in JavaScript functions: improper handling of null values as arguments. The `foo` function, as initially written, does not account for `null` inputs and might lead to errors or unexpected outcomes. The solution showcases a more robust way to manage null arguments, ensuring predictable behavior.

## Bug Description
The `foo` function lacks explicit checks for `null` values in its parameters (`a` and `b`). If either `a` or `b` is `null`, the function might attempt to perform operations that are undefined for `null`, resulting in an error or unexpected output. 

## Solution
The bug is addressed by adding a check at the beginning of the function that explicitly handles `null` values. If either `a` or `b` is `null`, the function now returns early, preventing any further processing that might lead to errors. This approach ensures that the function behaves predictably even when dealing with null arguments.