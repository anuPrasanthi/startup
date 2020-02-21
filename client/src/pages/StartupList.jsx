import React from 'react'
import api from '../api'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/list.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Card, ListGroup } from 'react-bootstrap';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class StartupList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoading: false
    }
  }
  componentDidMount = async () => {

    await api.getAllStartups().then(
      response => {
        console.log(response.data)
        this.setState({
          items: response.data.data,
          isLoading: true
        })
      }
    )

  }

  btnClick() {
    window.open("create");
  }
  render() {
    let showTable = true
    const { items, isLoading } = this.state


    if (!isLoading) {
      return <div>Loading...</div>
    }
    else {

      const getitems = <ol>{items.map(item => <li key={item.id}>{item.name}, {item.country}</li>)}</ol>
      return (
        <Router>
          <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
            <Card style={{ width: '20rem', height: '23rem' }}>
              <h6 className='header'>Welcome to Startup World</h6>
              <Wrapper>
                {showTable && (
                  <ListGroup><p>List of startups</p>
                    {getitems}
                  </ListGroup>)}
              </Wrapper>
              <Button type="button" className='button' onClick={this.btnClick}>Create New</Button>
            </Card>
          </div>
        </Router>
      )
    }
  }
}

export default StartupList