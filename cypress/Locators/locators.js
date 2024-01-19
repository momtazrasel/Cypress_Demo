class locatorsPage {

  // signUp
  signUpButton = "(//a[normalize-space()='Sign up'])[1]"
  password = '//input[@type="password"]'
  userName = "(//input[@id='sign-username'])[1]"
  passwordField = "(//input[@id='sign-password'])[1]"
  signupButton = "(//button[normalize-space()='Sign up'])[1]"

  // signIn
  loginTab = "(//a[normalize-space()='Log in'])[1]"
  loginUsernmae = "(//input[@id='loginusername'])[1]"
  loginPassword = "(//input[@id='loginpassword'])[1]"
  loginButton = "(//button[normalize-space()='Log in'])[1]"



}
export default locatorsPage;