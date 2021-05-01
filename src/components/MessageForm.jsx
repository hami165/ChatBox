import React,{useState} from "react"
import {SendOutlined, PictureOutlined} from '@ant-design/icons'
import {sendMessage, isTyping} from "react-chat-engine"
import ChatFeed from "./ChatFeed"

const MessageForm = (props)=> {
    const [value, setvalue] = useState('')
    const {chatId,creds}=props


    const handleSubmit=(event)=>{
        event.preventDefault()
        const text =value.trim()
        if (text.length > 0){
            sendMessage(creds,chatId,{text })
        }
        setvalue('')

    }
    const handleChange=(event)=>{
        setvalue(event.target.value)

        isTyping(props, chatId)
        
    }
    const handleUpload =(event)=>{
        sendMessage(creds,chatId,{files: event.target.files, text:''})

    }
    return(
        <form className="message-form" onSubmit= {handleSubmit}>
            <input
            className='message-input'
            placeholder='send a message..'
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            />
            <label htmlfor='upload-button'>
                <span className='image-button'>
                     <PictureOutlined className='picture-icon'/>
                 </span>

            </label>
            <input
                type="file"
                multiple={false}
                id='upload-button'
                style={{display: 'none'}}
                onchange={handleUpload}
            />
            <button type="submit" className="sendt-button">
                <SendOutlined className='send-icon'/>
            </button>

        </form>
    )

}

export default MessageForm
