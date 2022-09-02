<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="login">
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email address"
          v-model="register_form.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="register_form.password"
        />
        <input type="submit" value="Register" />
      </form>

      <form class="login" @submit.prevent="login">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email address"
          v-model="login_form.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <input type="submit" value="Login" />
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();
    const login = () => {
      store.dispatch("login", login_form.value);
    };
    const register = () => {
      store.dispatch("register", register_form.value);
    };
    return {
      login_form,
      register_form,
      login,
      register,
    };
  },
};
</script>
<style>
.forms {
  display: flex;
  max-height: 100vh;
}

form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
  background-image: linear-gradient(
    to bottom right,
    rgba(249, 199, 79) 0%,
    rgba(249, 132, 74) 100%
  );
}
form.register {
  color: #720026;
  background-color: #fb5607;
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 0, 110) 0%,
    rgba(131, 56, 236) 100%
  );
}

h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

input {
  appearance: none;
  border: navy;
  outline: none;
  background: none;

  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}
input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #3a86ff;
  border-bottom: 2px solid #8ecae6;
}
form.login input:not([type="submit"]) {
  color: #f94144;
  border-bottom: 2px solid #f9844a;
}

form.login input[type="submit"] {
  background-color: #f8961e;
  color: #390099;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
form.register input[type="submit"] {
  background-color: #9e0059;
  color: #240046;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}
</style>