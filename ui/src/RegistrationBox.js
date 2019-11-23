import React from 'react';
import {Container, Segment, Grid, Column, Dropdown, Form, Checkbox, Button } from 'semantic-ui-react';



const countyOptions = [{
    value: "Adams County",
    text: "Adams County"
  }, {
    value: "Alamosa County",
    text: "Alamosa County"
  }, {
    value: "Arapahoe County",
    text: "Arapahoe County"
  }, {
    value: "Archuleta County",
    text: "Archuleta County"
  }, {
    value: "Baca County",
    text: "Baca County"
  }, {
    value: "Bent County",
    text: "Bent County"
  }, {
    value: "Boulder County",
    text: "Boulder County"
  }, {
    value: "City & County of Broomfield",
    text: "City & County of Broomfield"
  }, {
    value: "Chaffee County",
    text: "Chaffee County"
  }, {
    value: "Cheyenne County",
    text: "Cheyenne County"
  }, {
    value: "Clear Creek County",
    text: "Clear Creek County"
  }, {
    value: "Conejos County",
    text: "Conejos County"
  }, {
    value: "Costilla County",
    text: "Costilla County"
  }, {
    value: "Crowley County",
    text: "Crowley County"
  }, {
    value: "Custer County",
    text: "Custer County"
  }, {
    value: "Delta County",
    text: "Delta County"
  }, {
    value: "City and County of Denver",
    text: "City and County of Denver"
  }, {
    value: "Dolores County",
    text: "Dolores County"
  }, {
    value: "Douglas County",
    text: "Douglas County"
  }, {
    value: "Eagle County",
    text: "Eagle County"
  }, {
    value: "Elbert County",
    text: "Elbert County"
  }, {
    value: "El Paso County",
    text: "El Paso County"
  }, {
    value: "Fremont County",
    text: "Fremont County"
  }, {
    value: "Garfield County",
    text: "Garfield County"
  }, {
    value: "Gilpin County",
    text: "Gilpin County"
  }, {
    value: "Grand County",
    text: "Grand County"
  }, {
    value: "Gunnison County",
    text: "Gunnison County"
  }, {
    value: "Hinsdale County",
    text: "Hinsdale County"
  }, {
    value: "Huerfano County",
    text: "Huerfano County"
  }, {
    value: "Jackson County",
    text: "Jackson County"
  }, {
    value: "Jefferson County",
    text: "Jefferson County"
  }, {
    value: "Kiowa County",
    text: "Kiowa County"
  }, {
    value: "Kit Carson County",
    text: "Kit Carson County"
  }, {
    value: "La Plata County",
    text: "La Plata County"
  }, {
    value: "Lake County",
    text: "Lake County"
  }, {
    value: "Larimer County",
    text: "Larimer County"
  }, {
    value: "Las Animas County",
    text: "Las Animas County"
  }, {
    value: "Lincoln County",
    text: "Lincoln County"
  }, {
    value: "Logan County",
    text: "Logan County"
  }, {
    value: "Mesa County",
    text: "Mesa County"
  }, {
    value: "Mineral County",
    text: "Mineral County"
  }, {
    value: "Moffat County",
    text: "Moffat County"
  }, {
    value: "Montezuma County",
    text: "Montezuma County"
  }, {
    value: "Montrose County",
    text: "Montrose County"
  }, {
    value: "Morgan County",
    text: "Morgan County"
  }, {
    value: "Otero County",
    text: "Otero County"
  }, {
    value: "Ouray County",
    text: "Ouray County"
  }, {
    value: "Park County",
    text: "Park County"
  }, {
    value: "Phillips County",
    text: "Phillips County"
  }, {
    value: "Pitkin County",
    text: "Pitkin County"
  }, {
    value: "Prowers County",
    text: "Prowers County"
  }, {
    value: "Pueblo County",
    text: "Pueblo County"
  }, {
    value: "Rio Blanco County",
    text: "Rio Blanco County"
  }, {
    value: "Rio Grande County",
    text: "Rio Grande County"
  }, {
    value: "Routt County",
    text: "Routt County"
  }, {
    value: "Saguache County",
    text: "Saguache County"
  }, {
    value: "San Juan County",
    text: "San Juan County"
  }, {
    value: "San Miguel County",
    text: "San Miguel County"
  }, {
    value: "Sedgwick County",
    text: "Sedgwick County"
  }, {
    value: "Summit County",
    text: "Summit County"
  }, {
    value: "Teller County",
    text: "Teller County"
  }, {
    value: "Washington County",
    text: "Washington County"
  }, {
    value: "Weld County",
    text: "Weld County"
  }, {
    value: "Yuma County",
    text: "Yuma County"
}];

class RegistraionBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: {
        lastName: '',
        email: '',
        mobile: '',
        hotline: '',
        county: '',
        ivrCode: '',
        tos: ''
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(require('util').inspect(this.state, { showHidden: false, depth: 2, colorize: true }));
  }

  onCheckboxCheck(e, {checked}) {
    this.setState({
      fields: {
        ...this.state.fields,
        tos: true
      }
    })
  }

  onInputChange(e, select) {
    let name = e.target.name ? e.target.name : select.name;
    let value = e.target.name ? e.target.value : select.value;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      }
    })
  }

  render() {
    return (
      <Container>
        <Grid columns="3" centered>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Segment text very padded>
              <Form
                ref="form"
                onSubmit={(e)=>{this.handleSubmit(e)}}
              >
                <Form.Input
                  fluid
                  type="text"
                  name="lastName"
                  onChange={(e)=>{this.onInputChange(e)}}
                  placeholder="Last name"
                />
                <Form.Input 
                  fluid
                  type="text"
                  name="email"
                  onChange={(e)=>{this.onInputChange(e)}}
                  placeholder="Email Address"
                />
                <Form.Input 
                  fluid
                  type="text"
                  name="mobile"
                  onChange={(e)=>{this.onInputChange(e)}}
                  placeholder = "Mobile Number"
                />
                <Form.Input 
                  type="text"
                  name="hotline"
                  onChange={(e)=>{this.onInputChange(e)}}
                  placeholder="Hotline Number"
                />
                <Form.Input 
                  type="text"
                  name="ivrCode"
                  onChange={(e)=>{this.onInputChange(e)}}
                  placeholder="ID Number"
                />
                <Form.Dropdown
                  placeholder='Select Country'
                  fluid
                  search
                  name="county"
                  onChange={this.onInputChange.bind(this)}
                  selection
                  options={countyOptions}
                />
                <Checkbox
                  name="tos"
                  label='I agree to the Terms and Conditions'
                  onChange = {
                    this.onCheckboxCheck.bind(this)
                  }
                />
                <br></br>
                <Button
                  fluid
                  basic
                  color="blue"
                  disabled={
                    !this.state.fields.lastName
                    || !this.state.fields.email
                    || !this.state.fields.mobile
                    || !this.state.fields.hotline
                    || !this.state.fields.county
                    || !this.state.fields.ivrCode
                    || !this.state.fields.tos 
                  }
                  type="submit" >
                  FINISH
                </Button>
            </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default RegistraionBox;