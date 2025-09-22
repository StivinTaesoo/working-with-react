const animals = ["Cat", "Dog", "Elephant", "Cow", "Eagle"];

const AnimalFilter: React.FC = () => {
    const animalsStartWithE = animals.filter((animal) =>
        animal.startsWith("E")
    );
    return (
        <div className="container blue_border">
            <div className="title flex_center">
                <span className="item_number ">2.5</span>
                <span>Animal Filter</span>
            </div>
            <p className="task_summary">
                Task: Only render animals that start with the letter "E".
            </p>
            <ul className=" text_left">
                {animalsStartWithE.map((animal, index) => {
                    return (
                        <li className="item_name" key={index}>
                            {animal}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default AnimalFilter;
