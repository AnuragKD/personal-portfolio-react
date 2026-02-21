// import SeparatorSVG from "../../assets/svgs/separator.svg";
import Container from "../layout/Container";
import Icon from '../Icon'

export default function Separator({ className = "" }) {
  return (
    <div className={`section-border w-full overflow-hidden ${className}`}>
      <Container className="container-border !p-0">
        <Icon name="separator" className="w-full"/>
      </Container>
    </div>
  );
}
