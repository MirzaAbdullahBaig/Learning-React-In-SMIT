import "./App.css";

function App() {
  const userName = "Abdullah Baig";
  const avatar = "https://avatars.githubusercontent.com/u/112177631?s=96&v=4";
  const loggedIn = true;

  const student = [
    { name: "Altaf", key: 1 },
    { name: "Ali", key: 2 },
    { name: "Adil", key: 3 },
  ];
  return (
    <>
      <h1>Hello {userName}</h1>
      <img src={avatar} alt="Abdullah Baig" className="photo" />
      <ul>
        {student.map((data) => (
          <li key={data.key}>{data.name}</li>
        ))}
      </ul>

      <br />
      <button> {loggedIn ? "Logout" : "Login"} </button>
    </>
  );
}

export default App;
