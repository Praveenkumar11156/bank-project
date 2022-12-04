function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    // <Card
    <div class="card">
    <div class="bg-info">
    <div class="card-header" status={status}><h1> Deposit</h1></div>
      body= <br></br>{show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    </div>
      
    {/* // /> */}
    </div>
  )
}

function DepositMsg(props){
  
  return (<>
    <h5>Success</h5>
   
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  
  function handle(){
    fetch(`/account/update/${email}/${amount}`,{
      method:"GET",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          props.setShow(false)
          props.setAmount()
        } catch (err) {
          props.setStatus(text)
          console.log('err:', text);
        }
      }
      )
    
  }

  return(<>    

<label for="test" class="labe"> Email  &emsp; &emsp;&emsp; : </label>
<span>
<input type="email"
  className="createinput"
  placeholder="Enter Your Email"
  value={email} onChange={(e) => setEmail(e.currentTarget.value)}
  />
</span>
  
      
<label for="test" class="labe"> Amount  &emsp; &emsp;: </label>
<span>
<input type="number" 
      className="createinput" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
</span>
    

    <button type="submit" 
      className="createbutton" 
      onClick={handle}>Deposit</button>

  </>);
}