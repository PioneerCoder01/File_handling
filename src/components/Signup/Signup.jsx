import './signup.css'

export default function Signup() {
  return (
    <div className='sifnup'>

        <form>
            <h1>Sign up</h1>
            <div className="form_group">
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email"/>
            </div>
            <div className="form_group">
                <label htmlFor="u-name">User Name</label>
                <input type="text" name="u-name"/>
            </div>
            <div className="form_group">
                <label htmlFor="passw">Your Password</label>
                <input type="text" name="passw"/>
            </div>
            <div className="form_group">
                <label htmlFor="c-passw">COnfirm Password</label>
                <input type="text" name="c-passw"/>
            </div>
            <button>Register</button>
            <a href="">I already have account?</a>
        </form>
    </div>
  )
}
