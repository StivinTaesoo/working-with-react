const MessageList: React.FC = () => {
    const messages = ["Welcome", "Are you available"];
    const numberOfMessages = messages.length;
    return (
        <div className="container blue_border">
            <div className="title flex_center">
                <span className="item_number ">2.7</span>
                <span>Message List</span>
            </div>
            <p className="task_summary">
                Task: If the array is empty, display "No new messages".
                Otherwise, show them in a list.
            </p>
            {numberOfMessages < 1 ? (
                <p className="light_red_text">You have no messages</p>
            ) : (
                <>
                    <p className="blue_text">
                        You have {numberOfMessages} new messages
                    </p>
                    <ul className="list ">
                        {messages.map((message) => {
                            return <li className="item_name">{message}</li>;
                        })}
                    </ul>
                </>
            )}
        </div>
    );
};
export default MessageList;
