import { Link } from "react-router-dom";
import "./login.scss";
const login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odio minus, atque numquam fugit ad. Culpa labore explicabo harum, laborum vero corporis, suscipit libero facere quo eius magni alias aperiam.
          </p>
          <span>Don't you Have an account</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password"/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default login
