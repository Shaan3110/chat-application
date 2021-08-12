import React from 'react'

export const OthersMessages=({lastMessage,message})=> {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username!==message.sender.username
    return (
        <>
            <div className="message-row">
                {isFirstMessageByUser && (
                    <div className="message-avatar" style={{backgroundImage: `url(${message?.sender?.avatar})`}}>
                    </div>
                )}
                {
                    message?.attachements?.length > 0 ?(<img src={message.attachements[0].file} alt="message loading" className="message-image" style={{ marginLeft: isFirstMessageByUser ? '4px':'48px' }}/>):
                    (<div className="message" style={{float: 'left',backgroundColor: '#3B2A50', marginLeft: isFirstMessageByUser ? '4px':'48px'}}>
                    {message.text}
                </div>)
                }
            </div>
        </>
    );
}
