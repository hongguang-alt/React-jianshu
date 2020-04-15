import React,{ Component } from 'react'
import { Globalstyle } from './style'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter,Route ,Switch} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
class App extends Component{
    render(){
        return (
            <Provider store={store}>
                <Globalstyle />
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail' exact component={Detail}></Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App