import './register.css';
function Register() {
    return (
        <>
            <div className='image-signup'>
                <img className='vector-image' src="Vector.png" />Movie Catelog
            </div>
            <div className="row sign-up page">
                <div className='register'>Register</div>
                <div>
                    <div className='name'> Enter Your Name</div>
                    <input className='sign-input'></input>
                    <div className='email'>Enter Your Email</div>
                    <input className='sign-input'></input>
                    <div>
                        <button className='button'>Register</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Register;



