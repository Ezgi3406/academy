import React from "react";
import { Card, Collapse } from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function WorkExperience(props) {
  return (
    <Card className="person-summary">
      <Card.Header>
        <h5>
          Work Experience
          <span>
            <Link to="workexperience/1">
              <MdEdit />
            </Link>
          </span>
        </h5>
      </Card.Header>
      <Collapse in={true}>
        <div className="person-summary-container"></div>
      </Collapse>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);
