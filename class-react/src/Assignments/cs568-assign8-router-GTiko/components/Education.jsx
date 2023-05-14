export default function Education({ student, setStudent, educationList }) {
  function handleEvents(e) {
    const { name, value } = e.target;
    setStudent((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <>
      <div>
        <div id="courseScore">
          <h5> Course satisfaction score</h5>
          <input
            type="range"
            min={0}
            max={10}
            name="courseSatisfaction"
            value={student.courseSatisfaction}
            onChange={handleEvents}
          />
          <span>{student.courseSatisfaction}</span>
        </div>
        <br />
        <div id="education">
          <h5>Education</h5>
          <select
            value={student.education}
            name="education"
            onChange={handleEvents}
          >
            <option>Education</option>
            {educationList.map((each, index) => (
              <option key={index} value={each} name={each}>
                {each}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div id="about">
          <h5>About</h5>
          <textarea
            name="about"
            value={student.about}
            cols="30"
            rows="2"
            placeholder="About"
            onChange={handleEvents}
          ></textarea>
        </div>
      </div>
    </>
  );
}
