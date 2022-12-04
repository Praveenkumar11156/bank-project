const { json, text } = require("express");

function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  
  return (
    // <Card
    <div className="card">
    <div class="bg-info">
    <div class="card-header" status={status}><h1> WithDraw</h1></div>
      body= <br></br>{show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    </div>
      
    {/* // /> */}
    </div>
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const[email, setEmail] = React.useState('');
  const [amount, setAmount] = React.useState('');  
  const [balance, setBalance] = React.useState('');
  
          

  function handle(){
  fetch(`/account/update/${email}/-${amount}`)
  .then(res => res.text())
  .then(text =>{
    try{
      const data = JSON.parse(text)
      props.setShow(false);
      props.setAmount()
      console.log('JSON :',text)
    }catch(err){
      props.setStatus(text)
      console.log('err:', text)
    }
  })
    
  }
  return(<>
  <label for="test" class="labe"> Email  &emsp; &emsp; &emsp;: </label>
  <span>
  <input type="email"
  className="createinput"
  placeholder="Enter Your Email"
  value={email}
  onChange={e => setEmail(e.currentTarget.value)}
  />
  </span>
  

  <label for="test" class="labe"> Amount  &emsp; &emsp;: </label>
  <span>
  <input type="number" 
      className="createinput" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>
  </span>
    

    <button type="submit" 
      className="createbutton" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
}
