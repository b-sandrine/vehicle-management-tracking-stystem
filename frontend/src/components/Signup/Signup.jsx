import logo from '../../assets/logo.png'
import './Signup.css'

function Signup () {
    return (
        <div className="signup--container">
            <img src={logo} alt="App logo" />
            <h5>Register to have access</h5>
            <div className="form">
                <input placeholder='Enter your full names'></input>
                <input placeholder='Enter your email'></input>
                <input type="text" name="" id="" placeholder='Enter your phone number' />
                <input type="text" name="" id="" placeholder='Enter your national ID' />
                <div className='flex'>
                    <input type="text" name="" id="" placeholder='Enter your password' style={{marginRight: '10px' }}/>
                    <input type="text" name="" id="" placeholder='Confirm password' style={{marginLeft: '10px' }}/>
                </div>
                <input type="submit" name="" id="" value='Continue' />
            </div>
        </div>
    )
}

export default Signup;