export default function PersonalInfo({student, setStudent, gender, setGender}) {
  const MIN_DOB = "2000-12-30";
  const MAX_DOB = "2029-12-30";

  function handleGender(e) {
    setGender(e.target.value);
  }

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
      <div style={{ marginLeft: 100 }}>
        <div id="fullName">
          <h5>First name</h5>
          <input
            required
            type="text"
            name="firstName"
            value={student.firstName}
            placeholder="First name"
            onChange={handleEvents}
          />
          <br />

          <h5>Last name</h5>
          <input
            required
            type="text"
            name="lastName"
            value={student.lastName}
            placeholder="Last name"
            onChange={handleEvents}
          />
        </div>
        <div id="phone">
          <h5>Phone Number</h5>
          <input
            required
            type="tel"
            name="phoneNumber"
            value={student.phoneNumber}
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            onChange={handleEvents}
          />
        </div>
        <div id="DOB">
          <h5>Birth date</h5>
          <input
            required
            type="date"
            name="DOB"
            min={MIN_DOB}
            max={MAX_DOB}
            value={student.DOB}
            onChange={handleEvents}
          />
        </div>
        <div>
        <h5>Email</h5>
        <input
            required
            type="email"
            name="email"
            placeholder="email"
            value={student.email}
            onChange={handleEvents}
          />
        </div>
        <br />
        <div id="gender">
          <h5>Gender</h5>
          <input
            type="radio"
            name="male"
            value="male"
            checked={gender === "male"}
            onChange={handleGender}
          />
          male &nbsp;
          <input
            type="radio"
            name="female"
            value="female"
            checked={gender === "female"}
            onChange={handleGender}
          />
          female
        </div>
        <br />
      </div>
    </>
  );
}
