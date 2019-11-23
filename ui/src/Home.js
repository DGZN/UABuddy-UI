import React from 'react';
import logo from './react.svg';
import './Home.css';
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Grid, Segment, Step, Card, Feed, Image, Icon } from 'semantic-ui-react'
import RegistrationBox from './RegistrationBox';

class Home extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    displayUATypes: true
  }
}


  selectUAType(type) {
    console.log(`SELECTED ${type}`)
    this.setState({
        selectedUAType: type,
        displayUATypes: false
    })
  }

  displayUATypes() {
      return this.state.displayUATypes ? (
          <Grid stackable columns={3} >
                <Grid.Column >
                        <Image onClick={()=>{this.selectUAType('colorCodes')}} centered size="medium" src='./paintbrush-white.svg' />
                </Grid.Column>
                <Grid.Column >
                        <Image onClick={()=>{this.selectUAType('ivrCode')}} centered size="medium" src='./question-01.svg' />
                </Grid.Column >
                <Grid.Column>
                        <Image onClick={()=>{this.selectUAType('other')}} centered size="medium" src='./2199505.png' />
                </Grid.Column>
            </Grid>
      ) : (
        <RegistrationBox selectedUA={this.state.selectUAType} />
      )
  }
  
  render() {
    return (
        <Container fluid >
            <Header size="large" as='h3' dividing>
                <Icon name='home' size='large' />
            </Header>
            <br></br>
            <Container>
                <h1 className="title">WHAT TYPE OF UA SERVICE DO YOU USE ? </h1>
                    Select the type of UA testing service that your program uses such as color codes or personal ID numbers.
            </Container>
            {this.displayUATypes()}
        </Container>
    );
  }
}

export default Home;