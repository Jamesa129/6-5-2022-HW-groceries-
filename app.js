class Part extends React.Component {
    render() {
        let obj = this.props.obj


        return (
            <div className='item'>
                <h5>Receipt List</h5>
                <h1>{obj.person}</h1>
                <p><span>Item:</span> {obj.order.item}</p>
                <p><span>Brand:</span> {obj.order.brand}</p>
                <p><span>Units:</span> {obj.order.units}</p>
                <p><span>Quantity:</span> {obj.order.Quantity}</p>
            </div>
        )
    }
}




class App extends React.Component {
    state = {
        receipts: receiptList,
        isPurchased:true,
        toggleisPurchased:true
    }


  
    render() {
        return (
            <div className='item'>
                <h1>Shopping Center Receipt</h1>

               


                <div className="container">

{/*this filters out the isPurchased and not isPurchased*/}
                {this.state.receipts.filter(item => item.isPurchased!=false).map(receipt => <Part obj={receipt}/>)}
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)