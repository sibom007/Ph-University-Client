import { useGetsemesterQuery } from "../../redex/feature/academicManatgment/AcademicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetsemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>In The AcademicSemester Components</h1>
    </div>
  );
};

export default AcademicSemester;
