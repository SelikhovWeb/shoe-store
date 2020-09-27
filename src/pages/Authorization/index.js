import React from "react";
import styles from "./Authorization.module.css";
import authorizthionBackground from "../../images/AuthorizationBackground.jpg";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../actions";

function Authorization() {
  const dispatch = useDispatch();
  //Using react-hook-form library there
  const { register, handleSubmit, errors } = useForm();
  // Get access to 'isAuth' prop
  const isAuth = useSelector((state) => state.user.isAuth);
  // Function that calls when form is submitted
  const onSubmit = ({ name, email, tel }) => {
    dispatch(logIn({ name, email, tel }));
  };

  //Redirect to main page after authoriztion
  if (isAuth === true) return <Redirect to={"/"} />;

  return (
    <div
      style={{ backgroundImage: `linear-gradient(120deg, #f6d365 0%, #fda085 100%)` }}
      className={styles.authorizationPage}
    >
      <div className={styles.box}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className={styles.textCenter}>Authorization</span>
          <div className={styles.inputContainer}>
            <input name="name" type="text" ref={register({ required: true })} />
            {errors.name && (
              <p className={styles.validationError}>First name is required</p>
            )}
            <label>First Name</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              name="email"
              type="mail"
              ref={register({ required: true })}
            />
            {errors.email && (
              <p className={styles.validationError}>Email is required</p>
            )}
            <label>Email</label>
          </div>
          <div className={styles.inputContainer}>
            <input name="tel" type="tel" ref={register({ required: true })} />
            {errors.tel && (
              <p className={styles.validationError}>Telephone is required</p>
            )}
            <label>Telephone</label>
          </div>
          <input type="submit" value="Ok" className={styles.btn} />
        </form>
      </div>
    </div>
  );
}

export default Authorization;
