[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/KQjjqJQJ)
# CS568 Assignment 6 - Forms
## Main task
Practice various of HTML input types in React and learn how to capture and process input data entered by the user.
  * Text type input - firstname, lastname. VALIDATION, these 2 are required.
  * [Date type input](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_date_max_min) - Date of Birth, VALIDATION with min and max.
  * [Tel type input](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_tel) - Phone in 123-45-678 format, VALIDATION make sure phone is in the right format. ```<input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>```
  * [Color type input](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_color) - Favorite color in #ff0000 format.
  * [Range type input](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_input_range) - Course satisfaction score (0 to 10). 
  * Dropdown type input - Education degree (high school, collage, bachelor, master, doctor)
  * Select type input - Hobbies (Basketball, motorcycle, pool billiards, so on ...).
  * Radio button type input - Gender (Female, Male, Other)
  * Number type input - Lucky number
  * Text area type input - About

Sample data:
```
{
	id: "632373a9170462d65b9ed26c",
	firstname: "Unubold",
	lastname: "Tumenbayar",
	about: "looooooong paragraph",
	favColor: "#00e1ff",
	gender: "male",
	email: "utumenbayar@miu.edu",
	dob: "2000-09-15",
	luckNumber: 521,
	courseSatisfaction: 8,
	phone: 123-45-678,
	education: "master",
	hobbies: ["motorcycle", "pool billiards"]
}
```

## Microtasks
* Implement the "focus me" demo.
```
function App() {
  const textInput = useRef(null);

  useEffect(() => {
    focus();
  }, [])

  function focus() {
    textInput.current.focus();
  }

  return (
    <div className="App">
      <input/><br/>
      <input id="input1" ref={textInput} />
    </div>
  );
}
```

## Extra
* OTP form. When you enter the number in the box, it automatically focuses on the next box. When you remove, focuses back.
* Dynamically build a form. There will be inputs state, inside that there will be input element information. Map that to React elements in the render. Have a general `onChange` method (The general onChange method may not work depending on the input type).
```
const [inputs, setinputs] = useState({
  input1: "default",
  input2: "input2",
  input3: "input3"
});

// The general onChanged function
function changed(e) {
  const inputsCopy = {...inputs};
  inputsCopy[e.target.name] = e.target.value;
  setinputs(inputsCopy);
}

return (
  <div className="App">
      // Map the inputs to JSX here.
      <button></button>
  </div>
);
```
* Implement a [Stopwatch Example](https://react.dev/learn/referencing-values-with-refs#example-building-a-stopwatch).
* Implement a [Ref - Does Not Cause Re-renders](https://www.w3schools.com/react/react_useref.asp)
