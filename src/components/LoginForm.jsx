import {useState} from "react"
import axios from 'axios'


const LoginForm =()=>{
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")

    const handleSubmit =async (e) =>{
        e.preventDefault()
        const authObject = { 'Project-ID' :"a84ba77f-6344-4054-80c7-a2bc1c95a67d" , 'User-Name':username, "User-Secret":password }
        try {
            await axios.get('https://api.chatengine.io/chats' ,{ headers: authObject })
            localStorage.setItem('username',username)
            localStorage.setItem('password',password)

            window.location.reload()

        } catch (error) {
            seterror ('ooops incorrect username or password')
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application </h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) =>setusername (e.target.value) } className='input' placeholder='userName' required />
                    <input type='password' value={password} onChange={(e) =>setpassword (e.target.value) } className='input' placeholder='password' required />
                    <div align='center'>
                        <button type='submit' className='button' >
                            <span>start chatting</span>
                        </button>

                    </div>
                    <h2 className="error"> {error} </h2>


                </form>

            </div>

        </div>
    )
}
export default LoginForm