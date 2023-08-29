import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {

    return(
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId= "75290f72-6bb7-4b90-a8c8-22930800e9d7"
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
    </div>
    );
} ;

// const ChatsPage = () => {
//     return <div className="background">chats...</div>;
//   }
  export default ChatsPage;
