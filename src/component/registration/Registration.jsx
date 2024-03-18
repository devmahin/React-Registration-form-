import 'App.css'

function Registration() {
    return (
        <div>
            <div  className='middle'>
                    <form>
                    <input type="text" placeholder='first name' />
                    <input type="text" placeholder='last name' />
                    <input type="password" placeholder='passwoed' />
                    <button>signup</button>
                    </form>
            </div>
        </div>
    );
}

export default Registration;