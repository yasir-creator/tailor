import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import "./login.css";
// import axios from "axios";
import { loginuser } from "../../actions/authAction";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/shop");
    }
  }

  onChnage = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/shop");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginuser(userData);

    //   axios
    //     .post("http://localhost:5000/api/users/login/", User)
    //     .then(res => {
    //       console.log("yahoooooooooooooooooo", res);
    //     })
    //     .catch(e => {
    //       console.log("Login error", e.response.data);
    //     });
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="titile">
          <h1>Sign In Here</h1>
        </div>
        <div className="container">
          <div className="row  justify-content-center">
            <div className="tg-widgetcontent">
              <form onSubmit={this.onSubmit}>
                <fieldset>
                  <div className="form-group ">
                    <input
                      type="email"
                      className={classnames("form-control rounded", {
                        "is-invalid": errors.email
                      })}
                      name="email"
                      value={this.state.email}
                      placeholder="Enter Your Email Here*"
                      onChange={this.onChnage}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className={classnames("form-control rounded", {
                        "is-invalid": errors.password
                      })}
                      name="password"
                      value={this.state.password}
                      placeholder="Enter Your Password Here*"
                      onChange={this.onChnage}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <button type="submit" className="tg-btn">
                      Login
                    </button>
                  </div>
                </fieldset>
              </form>
              <p className="message">
                Not registered? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      //     </div>
      //   </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginuser }
)(Login);
