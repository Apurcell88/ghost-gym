const signUpForm = () => {
  return (
    <section className="bg-gray-800 h-screen">
      <h1 className="text-center text-white text-3xl py-10">
        Sign Up For Ghost Gym
      </h1>
      <form>
        <div>
          <label for="firstName">First Name: </label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div>
          <label for="lastName">Last Name: </label>
          <input type="text" id="lastName" name="lastName" required />
        </div>

        <div>
          <label for="userName">Username: </label>
          <input type="text" id="username" name="username" required />
        </div>

        <div>
          <label for="password">Password: </label>
          <input type="password" id="password" name="password" required />
        </div>

        <div>
          <label for="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>

        <div>
          <label for="age">Are you a personal trainer? </label>
          <select name="trainer" id="trainer">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div>
          <label for="age">Age: </label>
          <input type="number" id="age" name="age" required />
        </div>

        <div>
          <label for="phoneNumber">Phone Number: </label>
          <input type="text" id="phoneNumber" name="phoneNumber" required />
        </div>

        <div>
          <label for="email">Email: </label>
          <input type="email" id="email" name="email" required />
        </div>
      </form>
    </section>
  );
};

export default signUpForm;
