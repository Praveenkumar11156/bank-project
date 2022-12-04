function Login(){
  
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  return (
    <div className="card">
    {/* <Card  */}
    <div class="bg-info">
    <div class="card-header" status={status}><h1> Login</h1></div>

      body= <br></br>{show ?
        <LoginForm setShow={setShow} setStatus={setStatus}/>:
        <LoginMsg setShow={setShow} setStatus={setStatus}/>
      }
      </div>
    {/* /> */}
    </div>
  ) 
}

function LoginMsg(props){  
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
  </>);
}

function LoginForm(props){
  
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  
  
  function handle(){
    fetch(`/account/login/${email}/${password}`)
    .then(res => res.text())
    .then(text =>{
      try{
        const data = JSON.parse(text);
        alert("Login Sucessfully");
        props.setStatus('');
        props.setShow(false);
       
        console.log('JSON:',data);
      }catch(err){
        props.setStatus(text)
        console.log('err:',text);
      }
    });
    
  }
  return (<>

<label for="test" class="labe"> Email  &emsp; &emsp;: </label>
<span>&emsp; &emsp; &emsp; &ensp;&emsp;
<input type="input" 
      className="createinput" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/>
</span>
    <br/>

    <label for="test" class="labe"> PassWord &ensp;: </label> 
    <span> &emsp;&emsp;&emsp;&emsp;&emsp;
    <input type="password" 
      className="createinput" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/>
    </span>
    <br/>
    <button type="submit" className="createbutton" disabled={!email || !password}onClick={handle}>Login</button>  
  </>);
}