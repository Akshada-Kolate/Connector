import "./register.scss";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Connector</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odio minus, atque numquam fugit ad. Culpa labore explicabo harum, laborum vero corporis, suscipit libero facere quo eius magni alias aperiam.
          </p>
          <span>Do you Have an account</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password"/>
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default register
