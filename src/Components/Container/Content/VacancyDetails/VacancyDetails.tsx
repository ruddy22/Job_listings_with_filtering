import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VacancyDetails = () => {
  const jobVacancies = useSelector((state) => state.jobVacancies);
  const { id } = useParams();
  const vacancyDetails = jobVacancies.filter((vacancy) => vacancy.id === id)[0];

  return (
    <>
      <Link to={"/"}>Back to List</Link>
      <div>{vacancyDetails.companyName}</div>
      <div>{vacancyDetails.vacancyName}</div>
      <div>{vacancyDetails.publishingDate}</div>
      <div>{vacancyDetails.location}</div>
      <div>{vacancyDetails.employmentType}</div>
      <div>{vacancyDetails.description}</div>
    </>
  );
};

export default VacancyDetails;
