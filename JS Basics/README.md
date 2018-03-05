# CompleteJavascriptCourse

Working through Jonas' Complete Javascript Course on Udemy

## Basics

* Testing -- Hello!
* Second Test!
* Got github to work with a new repository within VSCode all on my own--feelin' pretty proud! Also inserted Jonas' course code.
* Trying to figure out how to view a page in the browser and have it automatically update as I save files. Google'd something about 'gulp', but could not get it to install correctly. :\
* Marcus told me to go ahead and use extensions to view things in the browser! It does not update automatically, but it gets me going, which is more important. I also downloaded more extensions for formatting, project management, and autocompletion.
* == does type coercion, but === does not. When creating if/else statements, almost always use ===
* Remember, type coercion is when JS is able to consolidate different datatypes into one datatype. So the string `23` can be interpretted as the integer 23.
* Hold onto the vocabulary. The difference between a `statement` and an `expression` is that a statement simply performs an action, while an expression produces a value.
* `Methods` are functions related to arrays. I suspect methods are really a set of functions related to one thing... because I'm sure there are object methods as well.
* ES2015 is still too new to use in production, so we will stick with ES5.

## How Javascript Works Behind the Scenes

* As I understand it, the window itself is an object that contains JS elements. So when I globally declare a variable, I am really creating a property of the `window` object. Therefore `var xyz === window.xyz`
* The execution stack makes complete sense.
* Now I am getting into "hoisting", which has to do with "scope chain" and how variable objects and their functions are declared. Oh dear.
* Function DECLARATIONS are defined in the creation phase of the global object. So you can call on a function on earlier lines of code before the function declaration is actually written, because the EXECUTION of the function doesn't happen until all global properties are created. This is called function hoisting.
* Function EXPRESSIONS, on the other hand, do not work this way. If you declare a function as a variable expression, then in order to call that function, you must do so after the variable is written in the code.
* When the global object is created, all variables are declared as `undefined`. This means calling a variable before it is defined in the code will return `undefined`. Calling a variable that doesn't even exist, however, will return a `ReferenceError`.
* So when a variable is `undefined`, this means Javascript knows the variable exists, and it WILL be assigned something.
* Variables are declared as properties of the object they are nested in. So globally === window object. If I declare a variable within a function, that variable cannot be called outside of that function. This is because that variable is attached to the function the same way the other variable is attached to the global object.
* The biggest takeaway is not really variables... but the fact that we can call functions before they are declared, so long as they are not variable expressions.
