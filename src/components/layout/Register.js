import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
// import axios from "axios";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authAction";

// import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log("hello", newUser);

    this.props.registeruser(newUser, this.props.history);

    // axios
    //   .post("http://localhost:5000/api/users/register", newUser)
    //   .then(res => {
    //     console.log("this is the response of register", res);
    //     this.props.history.push("/login");
    //   })
    //   .catch(e => {
    //     console.log("register error", e.response);
    //   });
  };
  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        {/* Sign up form */}

        <div className="container">
          <div className="tg-column">
            <div className="tg-widget">
              <div className="tg-widgettitle">
                <h1>Create Account</h1>
              </div>
              <div className="tg-widgetcontent">
                <form onSubmit={this.onSubmit}>
                  <fieldset>
                    <div className="form-group">
                      <input
                        type="text"
                        className={classnames("form-control rounded", {
                          "is-invalid": errors.name
                        })}
                        name="name"
                        value={this.state.name}
                        placeholder="Enter Your Name"
                        onChange={this.onChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className={classnames("form-control rounded", {
                          "is-invalid": errors.email
                        })}
                        name="email"
                        value={this.state.email}
                        placeholder="Enter Your Email Here*"
                        onChange={this.onChange}
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
                        onChange={this.onChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={classnames("form-control rounded", {
                          "is-invalid": errors.password2
                        })}
                        name="password2"
                        value={this.state.password2}
                        placeholder="Confirm Password*"
                        onChange={this.onChange}
                      />
                      {errors.password2 && (
                        <div className="invalid-feedback">
                          {errors.password2}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <button type="submit" className="tg-btn">
                        signup
                      </button>
                      <p className="message">
                        Already registered? <Link to="/login">Sign In</Link>
                      </p>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Sing in  Form */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registeruser }
)(withRouter(Register));
