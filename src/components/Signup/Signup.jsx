import './signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='signup'>

        <form autoComplete='off'>
            <h1>Sign up</h1>
            <div className="form_group">
                <label htmlFor="email">E-mail *</label>
                <input type="text" name="email" required/>
            </div>
            <div className="form_group">
                <label htmlFor="u-name">User Name *</label>
                <input type="text" name="u-name" required/>
            </div>
            <div className="form_group">
                <label htmlFor="passw">Your Password *</label>
                <input type="text" name="passw" required/>
            </div>
            <div className="form_group">
                <label htmlFor="c-passw">Confirm Password *</label>
                <input type="text" name="c-passw" required/>
            </div>
            <button type='submit'>Register</button>
            <Link to="/">I already have account?</Link>
        </form>
    </div>
  )
}
