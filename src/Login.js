const login_check = () => {
  axios
    .get("https://backend-clg-app.herokuapp.com/admin/login")
    .then((response) => {
      if (response.status == "200") {
        renderForm();
      } else {
        return (
          <div className="userbox">
            <form action="" className="userForm">
              <input
                className="userItem"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                type="text"
                placeholder="Username"
              />
              <br />
              <input
                className="userItem"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <br />
              <input
                className="userItem"
                onClick={checkUser}
                type="submit"
                value="Submit"
              />
              <br />
              <br />
              {error ? <h3>Enter Right Credentials</h3> : null}
            </form>
          </div>
        );
      }
    });
};
