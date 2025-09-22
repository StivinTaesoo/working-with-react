const animals = ["Cat", "Dog", "Elephant", "Cow", "Eagle"];

const AnimalFilter: React.FC = () => {
    const animalsStartWithE = animals.filter((animal) =>
        animal.startsWith("E")
    );
    return (
        <div className="container red_border">
            <div className="title flex_center">
                <span className="item_number light_red_bg">2.5</span>
                <span className="light_red_text">Animal Filter</span>
            </div>
            <p>Only render animals that start with the letter "E".</p>
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
