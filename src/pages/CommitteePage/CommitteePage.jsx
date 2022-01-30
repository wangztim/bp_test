import "./CommitteePage.css";
import CommitteeCard from "./CommitteeCard";
import NavBar from "../../components/NavBar/NavBar";

export default function CommitteePage() {
  return (
    <div className="CommitteePage" id="committeepage">
      <NavBar />
      <div className="cCommitteesPageTitle">Committees</div>
      <div className="cFillViewport">
        <CommitteeCard id={1} />
        <CommitteeCard id={2} />
        <CommitteeCard id={3} />
        <CommitteeCard id={4} />
        <CommitteeCard id={5} />
        <CommitteeCard id={6} />
      </div>
    </div>
  );
}
