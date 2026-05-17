const apiKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;


console.log('my key is', apiKey);

function SecretTest() {
  return <div>Secret Test</div>;
}

export default SecretTest;