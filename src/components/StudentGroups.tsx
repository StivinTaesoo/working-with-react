import type { Student } from "../types";

interface StudentGroupsProps {
    students: Student[];
}

type StudentsByGrade = Record<string, Student[]>;

const StudentGroups: React.FC<StudentGroupsProps> = ({ students }) => {
    const studentsByGrade: StudentsByGrade = students.reduce(
        (acc: StudentsByGrade, student: Student) => {
            if (!acc[student.grade]) {
                acc[student.grade] = [];
            }
            acc[student.grade].push(student);
            return acc;
        },
        {} as StudentsByGrade
    );

    return (
        <div className="container red_border">
            <div className="title flex_center">
                <span className="item_number light_red_bg">2.6</span>
                <span className="light_red_text">Student Grade Grouping</span>
            </div>
            <p className="task_summary">
                Task: Use reduce() to group students by grade, then render each
                group with a heading and a nested list of names.
            </p>

            {Object.entries(studentsByGrade).map(([grade, studentsInGrade]) => (
                <div key={grade} className="text_left">
                    <h3 className="blue_text">Grade {grade}</h3>
                    <ul className="list">
                        {studentsInGrade.map((student) => (
                            <li key={student.id} className="item_name">
                                • {student.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default StudentGroups;
