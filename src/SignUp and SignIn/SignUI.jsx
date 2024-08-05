import React, { useState, useEffect } from "react";
import '../SignUp and SignIn/SignUI.css';

const SignUI = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeBullet, setActiveBullet] = useState(1);

  useEffect(() => {
    // Handle input field focus and blur
    const inputs = document.querySelectorAll(".input-field");
    inputs.forEach((inp) => {
      inp.addEventListener("focus", () => {
        inp.classList.add("active");
      });
      inp.addEventListener("blur", () => {
        if (inp.value !== "") return;
        inp.classList.remove("active");
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      inputs.forEach((inp) => {
        inp.removeEventListener("focus", () => {
          inp.classList.add("active");
        });
        inp.removeEventListener("blur", () => {
          if (inp.value !== "") return;
          inp.classList.remove("active");
        });
      });
    };
  }, []);

  useEffect(() => {
    // Handle bullet click and image slider
    const bullets = document.querySelectorAll(".bullets span");
    const images = document.querySelectorAll(".image");

    const moveSlider = (index) => {
      let currentImage = document.querySelector(`.img-${index}`);
      images.forEach((img) => img.classList.remove("show"));
      currentImage.classList.add("show");

      const textSlider = document.querySelector(".text-group");
      textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

      bullets.forEach((bull) => bull.classList.remove("active"));
      document.querySelector(`.bullets span[data-value="${index}"]`).classList.add("active");
    };

    bullets.forEach((bullet) => {
      bullet.addEventListener("click", () => {
        const index = bullet.dataset.value;
        setActiveBullet(Number(index));
        moveSlider(index);
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      bullets.forEach((bullet) => {
        bullet.removeEventListener("click", () => {
          const index = bullet.dataset.value;
          setActiveBullet(Number(index));
          moveSlider(index);
        });
      });
    };
  }, [activeBullet]);

  const handleToggleClick = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'profile.html'; // Adjust based on your routing
  };

  return (
    <main className={isSignUpMode ? "sign-up-mode-225" : "sign-in-mode-225"}>
      <div className="box-225">
        <div className="inner-box-225">
          <div className="forms-wrap-225">
            <form onSubmit={handleSignInSubmit} className={`sign-in-form-225 ${isSignUpMode ? "hidden" : ""}`}>
              <div className="logo-225">
                <img src="../src/Images/hirehaven-high-resolution-logo-white.jpeg" alt="HIREHAVEN" />
                <h4>HIREHAVEN</h4>
              </div>

              <div className="heading-225">
                <h2>Welcome Back</h2>
                <h6>Not registered yet?</h6>
                <a href="#" className="toggle-225" onClick={handleToggleClick}>Sign up</a>
              </div>

              <div className="actual-form-225">
                <div className="input-wrap-225">
                  <input
                    type="email"
                    className="input-field-225"
                    autoComplete="off"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap-225">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field-225"
                    autoComplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <a href="/portfolio"><input type="submit" value="Sign In" className="sign-btn-225" /></a>
              </div>
            </form>

            <form className={`sign-up-form-225 ${!isSignUpMode ? "hidden" : ""}`}>
              <div className="logo-225">
                <img src="../src/Images/hirehaven-high-resolution-logo-white.jpeg" alt="HIREHAVEN" />
                <h4>HIREHAVEN</h4>
              </div>

              <div className="heading-225">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="#" className="toggle-225" onClick={handleToggleClick}>Sign in</a>
              </div>

              <div className="actual-form-225">
                <div className="input-wrap-225">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field-225"
                    autoComplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap-225">
                  <input
                    type="email"
                    className="input-field-225"
                    autoComplete="off"
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap-225">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field-225"
                    autoComplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign Up" className="sign-btn-225" />

                <p className="text-225">
                  By signing up, I agree to the <a href="#">Terms of Services</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel-225">
            <div className="images-wrapper-225">
              <img
                src="../src/Images/internships-high-resolution-logo.jpeg"
                className={`image-225 img-1 ${activeBullet === 1 ? "show" : ""}`}
                alt=""
              />
              <img
                src="../src/Images/jobs-high-resolution-logo.jpeg"
                className={`image-225 img-2 ${activeBullet === 2 ? "show" : ""}`}
                alt=""
              />
              <img
                src="../src/Images/image3.png"
                className={`image-225 img-3 ${activeBullet === 3 ? "show" : ""}`}
                alt=""
              />
            </div>

            <div className="text-slider-225">
              <div className="text-wrap-225">
                <div className="text-group-225">
                  <h2>Explore Internships</h2>
                  <h2>Land your dream job</h2>
                  <h2>Find top talent fast</h2>
                </div>
              </div>

              <div className="bullets-225">
                <span
                  className={activeBullet === 1 ? "active" : ""}
                  data-value="1"
                ></span>
                <span
                  className={activeBullet === 2 ? "active" : ""}
                  data-value="2"
                ></span>
                <span
                  className={activeBullet === 3 ? "active" : ""}
                  data-value="3"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUI;
