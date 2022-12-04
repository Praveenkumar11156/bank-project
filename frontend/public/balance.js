const { text } = require("express");

function Balance() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    // <Card
    <div className="card">
    <div class="bg-info">
    <div class="card-header" status={status}><h1> Balance</h1></div>
      body=<br></br>
      {show ?
        <BalanceForm setShow={setShow} setStatus={setStatus} /> :
        <BalanceMsg setShow={setShow} setStatus={setStatus} />}
    </div>
      </div>
    // />
  )

}

function BalanceMsg(props) {
  return (<>
    <h5>Success</h5>
    <button type="submit"
      className="btn btn-light"
      onClick={() => {
        props.setShow(true);
        props.setStatus('');

      }}>
      Check balance again
    </button>
  </>);
}

function BalanceForm(props) {
  const [email, setEmail] = React.useState('');
  const [balance, setBalance] = React.useState('');

  function handle() {
    fetch(`/account/findOne/${email}`)
      .then(res => res.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          // alert();
          // props.setStatus('');
          props.setShow(false);
          props.setBalance()
          // console.log('JSON:', data);
        } catch (err) {
          props.setStatus(text)
          console.log('err:', text);
        }
      })

  }

  return (<>

<label for="test" class="labe"> Email  &emsp; &emsp;: </label>
<span>
<input type="input"
      className="createinput"
      placeholder="Enter email"
      value={email}
      onChange={e => setEmail(e.currentTarget.value)} /><br />
</span>
    

    <button type="submit"
      className="createbutton"
      onClick={handle}>
      Check Balance
    </button>

  </>);
}