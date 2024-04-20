import './App.css';

function App() {
  return (
    <div className="App">
       <div class="container">
    <div class="l-container">
      <h1 class="l-title">Login Page</h1>
      <form class="form">
        <div class="input-group ">
          <label for="username">Username</label>
          <input type="username" name="username" id="username" />
          
        </div>

        <div class="input-group ">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
          
        </div>

        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
    </div>
  );
}

export default App;
