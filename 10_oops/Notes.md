# Javascript and Classes
# Yes, JavaScript has classes.

# JavaScript introduced class syntax in ES6 (ECMAScript 2015) to provide a more familiar and cleaner way to create objects and handle inheritance, similar to other object-oriented languages like Java, Python, or C++.

# However, it's important to note that JavaScript is still fundamentally a prototype-based language, and the class syntax is essentially syntactic sugar over its existing prototype-based inheritance model.

# Classes in JavaScript are defined using the `class` keyword, and they can include a constructor method, instance methods, and static methods.

# Spaghetti code is a term used to describe code that is tangled, complex, and difficult to maintain. It often arises from poor design choices, lack of structure, or excessive interdependencies between components.
# Spaghetti code can lead to bugs, make it hard to understand the codebase, and increase the difficulty of making changes or adding new features.

# why use OOPs in javascript?

# 4 pillars of OOPs in JavaScript:

# 1. **Abstraction**: OOP allows you to model real-world entities as objects, making it easier to understand and manage complex systems. You can represent data and behavior together, which helps in organizing code logically.
# 2. **Encapsulation**: OOP enables you to hide the internal state and behavior of objects, exposing only what is necessary through public methods. This helps prevent unintended interference and makes the code more robust.
# 3. **Inheritance**: OOP allows you to create new classes based on existing ones, promoting code reuse and reducing redundancy.
# 4. **Polymorphism**: OOP enables you to use a single interface to represent different underlying forms (data types). This allows for more flexible and extensible code.

-Constructor Functions:
# Constructor functions are a way to create objects in JavaScript using the `new` keyword. They are typically named with a capital letter to distinguish them from regular functions. When you call a constructor function with `new`, it creates a new object, sets the `this` context to that object, and returns it implicitly.
-prototype:
# The prototype is an object that is associated with every function and object in JavaScript. It allows you to add properties and methods to all instances of a constructor function. When you access a property or method on an object, JavaScript first checks the object itself, and if it doesn't find it, it looks up the prototype chain until it finds the property or reaches the end of the chain.
-clsses:
# Classes in JavaScript are syntactic sugar over the existing prototype-based inheritance model. They provide a cleaner and more familiar syntax for defining objects and handling inheritance. Classes can have a constructor method, instance methods, and static methods.    
-instance:
# An instance is an individual object created from a class or constructor function. Each instance has its own properties and methods, and they can share behavior through the prototype chain.

