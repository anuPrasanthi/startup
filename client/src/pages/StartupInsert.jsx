import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'
import '../css/create.css'
import { Button, Card} from 'react-bootstrap';

const Label = styled.label`
margin : 5px;
`
const InputText = styled.input.attrs({
    className: 'form-inline'
})``

class StartupInsert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            country: '',
           
        }
    }
    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    handleChangeInputCountry = async event => {
        const country = event.target.value
        this.setState({ country })
    }
    handleIncludeStartup = async () => {
        const { name, country} = this.state
        const payLoad = { name, country}
        await api.insertStartup(payLoad).then(res => {
            window.alert(`Startup inserted successfully`)
            this.setState({
                name: '',
                country: '',
                
            })
        })
    }
    render(){
        const { name, country } = this.state
        return(
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
            <Card style={{ width: '23rem', height: '23rem' }}>
                <h6 className='header'>Create New Startup</h6>
                <Label>Name :</Label>
                <InputText type='text' value={name} onChange={this.handleChangeInputName} />
                <Label>Country :</Label>
                <InputText type='text' value={country} onChange={this.handleChangeInputCountry} />
                
                <Button className='button'  onClick={this.handleIncludeStartup}>Save</Button>
                
                </Card>
      </div>
        )
    }
}
export default StartupInsert