export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <>
  <p>{props.name}</p>
  <p>{props.grd}</p>
  <p>{props.crd}</p>
  <button onClick = {() =>props.del(props.name)} > x </button>
  </>;
};
