---
layout: post
title: javascript_error_type
---
    
# javascript_error_type

Error

Base type for all errors. Never actually thrown by the engine.

EvalError

Thrown when an error occurs during execution of code via eval().

RangeError

Thrown when a number is outside the bounds of its range—for example, trying to create an array with –20 items (new Array(-20)). These errors rarely occur during normal execution.

ReferenceError

Thrown when an object is expected but not available—for instance, trying to call a method on a null reference.

SyntaxError

Thrown when the code passed into eval() has a syntax error.

TypeError

Thrown when a variable is of an unexpected type—for example, new 10or "prop" in true.

URIError

Thrown when an incorrectly formatted URI string is passed intoencodeURI, encodeURIComponent, decodeURI, ordecodeURIComponent.