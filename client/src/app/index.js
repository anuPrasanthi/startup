import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import { NavBar } from '../components'
import { StartupList, StartupInsert} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            
            <Switch>
                <Route path="/startup/list" exact component={StartupList} />
                <Route path="/startup/create" exact component={StartupInsert} />
                
            </Switch>
        </Router>
    )
}

export default App