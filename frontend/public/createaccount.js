function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <div className="card">
    {/* <Card */}
      <div class="bg-info">
      <div class="card-header" status={status}><h1> Create Account</h1></div>
      
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
        </div>
    {/* /> */}
    </div>
    
  )
}

function CreateMsg(props){
  return(<>
    <h5>Your Account has been created Successfully</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');  

  function handle(){
    fetch(`/account/create/${name}/${email}/${password}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify(data)
    }).then(res =>
      res.json(),
      alert("Submitted Sucessfully"),
      // props.setStatus(''),
      props.setShow(false)
    ).then(data =>
      console.log(data)
    ).catch(err => {
      alert("error")
      console.log(err)
    }
    )
        
  }   
  return (<>
  
<div>
  <center>
  <label for="test" class="labe"> Name : </label> 
  <span>&emsp; &emsp; &emsp; &emsp;
  <input type="input" 
      className="createinput" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} />
  </span>
    <br/>

    <label for="test" class="labe"> Email Address : </label>
    <span>
    <input type="email" 
      className="createinput" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/>
    </span>
    <br/>

    <label for="test" class="labe"> password : </label>
    <span>&emsp; &emsp; &ensp;
    <input type="password" 
      className="createinput" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>
    </span>
    <br></br>
    
  </center>
  <button type="submit" 
      className="createbutton" 
      disabled={!name || !email || !password}
      onClick={handle}>Create Account</button>
  
</div>

  </>);
}