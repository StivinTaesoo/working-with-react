const BookList: React.FC = () => {
    const books = [
        "React Basics",
        "Learning TypeScript",
        "Advanced JavaScript",
    ];

    return (
        <div className="container red_border">
            <div className="title flex_center">
                <span className="item_number light_red_bg">2.4</span>
                <span className="light_red_text">Book List</span>
            </div>
            <p className="task_summary">
                {" "}
                Render the books in an ordered list, with numbers automatically
                appearing before each title.
            </p>
            <ol className="text_left">
                {books.map((book, index) => {
                    return (
                        <li className="item_name" key={index}>
                            {book}
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};
export default BookList;
