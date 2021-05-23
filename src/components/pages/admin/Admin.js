import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import AuthContext from '../../../context/AuthContext';
import Footer from '../../layout/Footer';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FiMail, FiPlusCircle} from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

function Admin() {
  const [Auth, setAuth] = useContext(AuthContext);
  const history = useHistory();
  function logout(){
      setAuth(null);
      history.push("/signin");
  }

  return (
    <>
      <div className="admin-container">
        <Container>
          <div className="admin-card">
            <Row className="justify-content-md-center">
              <Col lg={6} md={10} sm={12}>
                <h1 className="admin-card__header">Dashboard</h1>
                <h4 className="admin-card__sub-header">
                  What do you want to do?
                </h4>
                <div className="admin-card__info-text">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="admin-card__content-list">
                  <ul>
                    <li className="admin-card__content-list-item">
                      <Link to="/enquiries">
                        <BsQuestionCircle
                          aria-label="Questionmark Icon"
                          size={25}
                        />{" "}
                        Enquiries
                      </Link>
                    </li>
                    <li className="admin-card__content-list-item">
                      <Link to="/contactmessages">
                        <FiMail aria-label="Letter/Mail Icon" size={25} />{" "}
                        Messages
                      </Link>
                    </li>
                    <li className="admin-card__content-list-item">
                      <Link to="/establishment">
                        <FiPlusCircle aria-label="Plus Icon" size={25} /> Add
                        Establishment
                      </Link>
                    </li>
                    <li className="admin-card__content-list-item">
                    <Link onClick={logout}>Sign Out</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
