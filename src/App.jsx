import "./App.css";
import Button from "./components/Button";

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
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <br />
      <div>
        <Button
          bgColor={"bg-sky-400"}
          borderColor={"border-red-600"}
          textColor={"text-green-900"}
          label="Home Page"
        />
        <Button label="About Page" />
        <Button label="Contact Page" />
        <Button label="Products Page" />
        <Button label="Profile Page" />

        {/* <button className="border border-blue-500 rounded-md p-3 m-4">Home Page</button>
        <button className="border border-blue-500 rounded-md p-3 m-4">About Page</button>
        <button className="border border-blue-500 rounded-md p-3 m-4">Contact Page</button> */}
      </div>
    </>
  );
}

export default App;
