import "./App.css";
import useApi from "./hook/useApi";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const { userState } = useApi(url);
  const { state: users, loading, error } = userState;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="App">
      <h1>App con fetch</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h1>
            {user.name} {user.email}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default App;
