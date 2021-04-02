export default {
  ValidateEmail: function (mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }
    return false;
  },
  ValidatePassword: function (pass) {
    return pass.length >= 10;
  },
};
