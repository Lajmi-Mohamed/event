import React, { useState, useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Form, message, Input, Icon } from "antd"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FileUploadtwo from "./FileUploadtwo"
import DeleteIcon from '@material-ui/icons/Delete';
import {saveEvent,editEvent,deleteEvent} from "../../../../actions/actions"
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
// import Warning from "@material-ui/icons/Warning";
// import DateRange from "@material-ui/icons/DateRange";
// import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// import BugReport from "@material-ui/icons/BugReport";
// import Code from "@material-ui/icons/Code";
// import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "../../components@material/Grid/GridItem.js";
import GridContainer from "../../components@material/Grid/GridContainer.js";
// import Table from "../../components@material/Table/Table.js";
// import Tasks from "../../components@material/Tasks/Tasks.js";
// import CustomTabs from "../../components@material/CustomTabs/CustomTabs.js";
// import Danger from "../../components@material/Typography/Danger.js";
import Card from "../../components@material/Card/Card.js";
import CardHeader from "../../components@material/Card/CardHeader.js";
import CardIcon from "../../components@material/Card/CardIcon.js";
import CardBody from "../../components@material/Card/CardBody.js";
import CardFooter from "../../components@material/Card/CardFooter.js";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { bugs, website, server } from "../../variables/general.js";

import {
  dailySalesChart,
  // emailsSubscriptionChart,
  // completedTasksChart,
} from "../../variables/charts.js";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
const Continents = [
  { key: 1, value: "Sportif" },
  { key: 2, value: "Educatif" },
  { key: 3, value: "Scientifique" },
  { key: 4, value: "Festivate" },
  { key: 5, value: "Artisanat" },
];
function Dashboard(props) {
  console.log(props)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const useStyles = makeStyles(styles);
  const classes = useStyles();


  const [infosUpdate, setInfosUpdate] = useState({
    
    Type_event: "",
    City: "",
    Country: "",
    Titre: "",
    Description: "",
    Zip_Code: "",
    Start_date: "",
    End_date: "",
    EventImage: [],
  });
  const handleChange = (e) => {
    setSave({ ...save, [e.target.name]: e.target.value });
  };
  const [Images, setImages] = useState([]);
  const updateImages = (newImages) => {
    setImages(newImages);
    setInfosUpdate({ ...infosUpdate, EventImage: newImages });
  };
  const [save, setSave] = useState([]);
  useEffect(() => {
    setSave(props.save);
  }, [props.save]);
  return (
    
    <div style={{ backgroundColor: "white" }}>
      {props.event.EventsAdherent.map((el) => (
        <ProductWrapper>
          <div
            className="card container"
            style={{
              backgroundColor: "#f3f3f3",
              marginLeft: "15px",
              marginTop: "20px",
              height: "350px",
              borderRadius: "10px",
            }}
          >
            <div>
              <div className="row">
                <h3
                  style={{
                    marginLeft: "35px",
                    fontFamily: "permanent Marker, cursive",
                    textTransform: "uppercase",
                    color: "#f82249",
                    marginTop: "10px",
                  }}
                >
                  {el.Titre}
                </h3>
                <h4
                  style={{
                    color: "white",
                    backgroundColor: "#f82249",
                    width: "90px",
                    height: "40px",
                    marginLeft: "200px",
                    paddingLeft: "15px",
                    paddingTop: "5px",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                >
                 {el.Type_event}
                </h4>
                <div className="cart-icon"  style={{
                  marginLeft: "550px",
                  
                }} >
                <DeleteIcon  
                 style={{
                  marginLeft: "5px",
                  marginBottom: "5px",
                  fontSize: " 1.8rem",
                  color: "#ffa400 ",
                }}
                onClick={()=>{props.deleteEvent(el._id)} }
                />

               
                  <EditIcon
                    onClick={()=>{props.saveEvent(el) 
                      handleShow() } }
                    style={{
                      marginLeft: "5px",
                      marginBottom: "5px",
                      fontSize: " 1.8rem",
                      color: "#ffa400 ",
                    }}
                  ></EditIcon>
                </div>
              </div>
              <div className="row">
                <h5 style={{ color: "grey", marginLeft: "50px" }}>
                  {el.Start_date} /
                </h5>
                <h5 style={{ color: "grey", marginLeft: "5px" }}>
                  {el.End_date}
                </h5>
              </div>
              <div className="row">
                <h5 style={{ color: "grey", marginLeft: "50px" }}>
                  {el.Country}-
                </h5>
                <h5 style={{ color: "grey" }}>{el.City}</h5>
              </div>

              <div className="row">
                <div className=" col-6">
                  <p
                    className="text-capitalize font-weight-bold "
                    style={{ marginLeft: "55px", marginTop: "10px" }}
                  >
                    Description :
                  </p>
                  <p
                    className="text-muted lead"
                    style={{ marginLeft: "55px", fontSize: "14px" }}
                  >
                    {el.Description}
                  </p>
                </div>
                <div className="col-6">
                  <img
                    className="img-fluid "
                    alt="map"
                    src={`http://localhost:5000/${el.EventImage[0]}`}
                    style={{
                      height: "210px",
                      width: "420px",
                      borderRadius: "10px",
                      marginLeft: "50px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ProductWrapper>
      ))}
      <div>
        <Modal  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <GridContainer styles={{ BackgroundColor: "blue !important" }}>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Modifier évènement</h4>
          </CardHeader>
          <div className="container">
            <Form >
              {/* DropZONE */}

              <div style={{ justifyContent: "space-around" }}>
                <h3
                  className="align-self-center "
                  style={{
                    
                    color: "rgba(6, 12, 34, 0.98)",
                    marginTop: "10px",
                  }}
                >
                  Photos de L'événement :
                </h3>
             

             <FileUploadtwo name={"EventImage"}  onChange={handleChange} value={save.EventImage} refreshfunction={updateImages} />
                <br />
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                
                <h3
                  className="align-self-center "
                  style={{
                   
                   marginLeft:"10px",
                    color: "rgba(6, 12, 34, 0.98)",
                  }}
                >
                  Titre :
                </h3>

                <TextField //value={TitleValue}
                value={save.Titre}
                  onChange={handleChange}
                  name="Titre"
                  style={{
                    width: "20%",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <br />
                <br />
              
                <h3
                  className="align-self-center"
                  style={{
                    marginLeft: "10px",
                   
                    color: "rgba(6, 12, 34, 0.98)",
                  }}
                >
                  Type :
                </h3>

                <TextField
                value={save.Type_event}
                  style={{ marginLeft: "10px" }}
                  id="standard-select-currency"
                  select
                  name="Type_event"
                  onChange={handleChange}
                  helperText="Veuillez sélectionner votre type"
                >
                  {Continents.map((option) => (
                    <MenuItem key={option.key} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <br />
              <br />

              <h3
                className="align-self-center"
                style={{
                  marginLeft: "10px",
                 
                  color: "rgba(6, 12, 34, 0.98)",
                }}
              >
                Date :
              </h3>
              <div className="row">
              
                <TextField
                   value={save.Start_date}
                  onChange={handleChange}
                  style={{ width: "40%", marginLeft: "10px" }}
                  label="date de debut"
                  type="date"
                  name="Start_date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  value={save.End_date}
                  onChange={handleChange}
                  style={{ width: "40%", marginLeft: "10px" }}
                  label="date fe fin"
                  type="date"
                  name="End_date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <br />
              <br />
              <div className="row">
               
               
          
                <h3
                  className="align-self-center"
                  style={{
                    marginLeft: "10px",
                  
                    color: "rgba(6, 12, 34, 0.98)",
                  }}
                >
                  Ville:
                </h3>

                <TextField value={save.City}
                 onChange={handleChange}
                  name="City"
                  style={{ width: "12%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <h3
                  className="align-self-center"
                  style={{
                    marginLeft: "10px",
                   
                    color: "rgba(6, 12, 34, 0.98)",
                  }}
                >
                  Pays:
                </h3>
                <TextField value={save.Country}
                  onChange={handleChange}
                  name="Country"
                  style={{ width: "12%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <h3
                  className="align-self-center"
                  style={{
                 fontSize:"24px",
                    color: "rgba(6, 12, 34, 0.98)",
                    marginLeft: "10px",
                  }}
                >
                  Code Postal:
                </h3>
                <TextField value={save.Zip_Code}
                    onChange={handleChange}
                  name="Zip_Code"
                  style={{ width: "12%" }}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>

              <div className="row" style={{ marginTop: "30px" }}>
                <h3
                  className="align-self-center"
                  style={{
                    marginLeft: "10px",
                   
                    color: "rgba(6, 12, 34, 0.98)",
                  }}
                >
                  Description
                </h3>
               {" "}
               
                <TextField  value={save.Description}
                 onChange={handleChange}
                  style={{
                    width: "90%",
                    marginBottom: "25px",
                    marginLeft: "10px",
                  }}
                  label="Description"
                  name="Description"
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                  // value={DescriptionValue}
                 
                />
              </div>
              <Button
               onClick={()=>
                  props.editEvent(save)
               }
                style={{
                  marginLeft: "10px",
                  backgroundColor: "rgba(6, 12, 34, 0.98)",
                  color: "white",
                  fontSize: "20px",
                  borderRadius: "5px",
                  width: "150px",
                  height: "50px",
                  borderColor: "transparent",
                  marginTop: "10px",
                }}
              >
                {props.save ? 'edit' : "ajouter"}
              </Button>
            </Form>
            <br />
          </div>
        </Card>
      </GridItem>
    </GridContainer>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgb(233, 233, 233);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0rem 0.4rem;

    background: var(--lightBleu);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 1s linear;
  }
  .cart-btn:hover {
    color: var(--mainBleu);
    cursor: pointer;
  }
`;
const mapStateToProps = (state) => {
  return {
    event: state.Reducer1,
    model: state.modelReducertwo,
   save:state.Reducer1.saved,
  };
};

  export default connect(mapStateToProps,{editEvent,saveEvent,deleteEvent})(Dashboard);
 // handleShow