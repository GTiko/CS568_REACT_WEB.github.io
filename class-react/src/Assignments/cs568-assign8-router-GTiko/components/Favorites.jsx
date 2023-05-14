export default function Favorite({student, setStudent, hobbies, setHobbies, hobbiesList}) {

    function handleEvents(e) {
        const { name, value } = e.target;
        setStudent((prevValue) => {
          return {
            ...prevValue,
            [name]: value,
          };
        });
      }

    function handleHobbies(e) {
        const { value, checked } = e.target;
        if (checked) {
          setHobbies([...hobbies, value]);
        } else {
          const remainingHobbies = hobbies.filter((each) => each !== value);
          setHobbies(remainingHobbies);
        }
      }

  return (
    <>
      <div>
        <div id="favoriteColor">
          <h5>Favorite color</h5>
          <input
            type="color"
            name="favoriteColor"
            value={student.favoriteColor}
            onChange={handleEvents}
          />
          <input
            type="text"
            name="colorName"
            value={student.favoriteColor}
            disabled={true}
            style={{ width: 100 }}
            placeholder="color number"
            onChange={handleEvents}
          />
        </div>
        <br />
        <div id="luckyNumber">
          <h5>Lucky number</h5>
          <input
            style={{ width: 150 }}
            type="number"
            name="luckNumber"
            value={student.luckNumber}
            placeholder="luck number"
            onChange={handleEvents}
          />
        </div>
        <br />
        <div id="hobbies">
          <h5>Hobbies</h5>
          {hobbiesList.map((each, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={each}
                name={each}
                onChange={handleHobbies}
              />
              <span> {each} </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
