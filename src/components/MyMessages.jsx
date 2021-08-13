export const MyMessages=({message})=> {
    if(message.attachements && message.attachements.length > 0){
        return(
            <img src={message.attachements[0].file} alt="message loading" className="message-image" style={{ float:'right' }}/>
        )
    }
    return (
            <div className="message" style={{float: 'right',marginRight:'18px',color:'white',backgroundColor: '#3B2A50'}}>
                {message.text}
            </div>
    );
};
