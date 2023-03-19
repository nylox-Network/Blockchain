import React,  { Component}from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


class App extends Component {
    state = { walletinfo: { address: '',  balance: ' 9999 '} };

    componentDidMount(){
        fetch(`${document.location.origin}/api/wallet-info`)
          .then(response => response.json())
          .then(json => this.setState({ walletinfo: json }));
    }

    

    render() {

        const { address, balance,} = this.state.walletinfo;
        return(

             
            <div >
                <img className='logo'src={logo}></img> 
                
               
             <br />
            

                <div  className='Transbox'  >
                Welcome to Nylox  Network...
                </div>

               
                <br/>

                <div><Link to='/blocks'>Blocks</Link></div>
                <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div>
                <div><Link to='/transaction-pool'>Transaction Pool</Link></div>
              <br />

             <div classNme='WalletInfo'>
                  <div > Address: {address} </div>
                  <div> Balance: {balance} </div>
            </div>
            <br />
            

            </div>

        );
    }


}

export default  App;