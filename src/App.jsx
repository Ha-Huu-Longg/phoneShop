import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayoutApp from './components/Layout'
import Login from './components/Login'
import PageNotFound from './components/PageNotFound'
import Account from './components/Account'
import PageNotFoundChild from './components/PageNotFoundChild'
import Product from './components/Product'
import Bill from './components/Bill'
import AccountUser from './components/AccountUser'

function App() {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/admin' element={<LayoutApp />}>
                <Route index element={<Account />} />
                <Route path='account-user' element={<AccountUser />} />
                <Route path='product' element={<Product />} />
                <Route path='bill' element={<Bill />} />
                <Route path='*' element={<PageNotFoundChild />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default App
