import React, { Component } from 'react';
import WithStyles from 'react-jss';
import Styles from '../assets/jss/home-classes';
import clsx from 'clsx';
import { moveRover, turnRover, stopRover, getRoverData, SetInputs } from '../store/actions/rover-controller.action'
import { Card, Button, Container, IconButton, TextField } from '@material-ui/core';
import { ArrowDropDownCircle, KeyboardArrowDown, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp, PanToolOutlined, PublishOutlined, RefreshOutlined } from '@material-ui/icons';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Welcome to the rover command Interface',
      message2: '',
      xposition: '',
      yposition: '',
    }
  }

  checkDb = async () => {
    const response = await getRoverData();

    let msg = ''
    let msg1 = this.state.message;
    if (response && response.is_destination_reached) {
      msg = "Destination reached";
      msg1 = "";
    }
    else if (response && response.is_block_ahead) {
      msg = "A block detected!"
    }

    this.setState({ message2: msg, message: msg1 });
  };

  componentDidMount() {

    // setInterval(() => this.checkDb(), 1000);
  }


  onClickDown = async () => {
    let msg = this.state.message;

    const response = await moveRover('backward');

    if (response && response.move_backward === true) {
      msg = 'Rover is going backward';
      this.setState({ message: msg });
    }

  }
  onClickUp = async () => {
    let msg = this.state.message;



    const response = await moveRover('forward');

    if (response && response.move_forward === true) {
      msg = 'Rover is going forward';
      this.setState({ message: msg });
    }

  }
  onClickRight = async () => {
    let msg = this.state.message;



    const response = await turnRover('right');

    if (response && response.turn_right === true) {
      msg = 'Rover is turning right';
      this.setState({ message: msg });
    }

  }
  onClickLeft = async () => {
    let msg = this.state.message;



    const response = await turnRover('left');

    if (response && response.turn_left === true) {
      msg = 'Rover is turning left';
      this.setState({ message: msg });
    }
  }
  onClickStop = async () => {
    let msg = this.state.message;



    const response = await stopRover();

    if (response && response.turn_right === false && response.turn_left === false && response.move_forward === false && response.move_backward === false) {
      msg = 'Rover is Stopped';
      this.setState({ message: msg });
    }

  }
  onClickRefresh = async () => {
    let msg = this.state.message;



    const response = await stopRover();

    if (response) {
      msg = 'Welcome to the rover command Interface';
      this.setState({ message: msg });
    }


  }
  onClickEnter = async () => {

    // const x = this.state.xposition;
    // const y = this.state.yposition;
    
    const { xposition, yposition } = this.state;

    if(xposition==='' || yposition==='' ){
   alert('Please enter the  position');
   return ;
    }
    
    const x = Number(xposition);
    const y = Number(yposition);
    const response= await SetInputs(x,y);


    if(response){
    alert('Destination is  set');
    }
    

  }

  onChangeInput =(event) => {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value });
  }
  render() {
    const { classes } = this.props;

    return (
      <Container>
        <Card>
          <h1>{this.state.message}</h1>
          <h2>{this.state.message2}</h2>
        </Card>

        <Card style={{ margin: 10 }}>
          <Button color='primary' className={classes.btn}>forward</Button>
          <IconButton onClick={() => this.onClickUp()} ><KeyboardArrowUp /></IconButton>
        </Card>

        <Card style={{ margin: 10 }}>
          <Button color='primary' className={classes.btn}>Backward</Button>
          <IconButton onClick={() => this.onClickDown()} ><KeyboardArrowDown /></IconButton>
        </Card>


        <Card style={{ margin: 10 }}>
          <Button color='primary' className={classes.btn}>Right</Button>
          <IconButton onClick={() => this.onClickRight()} ><KeyboardArrowRight /></IconButton>
        </Card>

        <Card style={{ margin: 10 }}>
          <Button color='primary' className={classes.btn}>Left</Button>
          <IconButton onClick={() => this.onClickLeft()} ><KeyboardArrowLeft /></IconButton>
        </Card>
        <Card style={{ margin: 10 }}>
          <Button color='primary' className={classes.btn}>STOP</Button>
          <IconButton onClick={() => this.onClickStop()} ><PanToolOutlined /></IconButton>
        </Card>
        <Card style={{ margin: 10 }}>
          <Button color='primary' className={classes.btn} onClick={this.onClickRefresh} >RESET <RefreshOutlined /></Button>
          {/* <IconButton onClick={() => this.onClickRefresh()} >RESET<RefreshOutlined/></IconButton> */}
        </Card>


        <Card>
          <p>Input Destination</p>
          <TextField id="outlined-basic" label="x position" variant="outlined" value={this.state.xposition} onChange={this.onChangeInput} name='xposition'/>
          <TextField id="outlined-basic" label="y position" variant="outlined" value={this.state.yposition} onChange={this.onChangeInput}name='yposition'/>
          <Button color='primary' className={classes.btn} onClick={this.onClickEnter}>Enter<PublishOutlined/></Button>
        </Card>
      </Container>

    )
  }
};

export default WithStyles(Styles)(Home);