import { useState } from 'react'

function Palindrome() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  function checkPalindrome(payload) {
    const isPalindrome = payload.split('').reverse().join('')
    console.log(isPalindrome, '<<<< palindrome')
    if (isPalindrome === payload) {
      return setResult(`<p>The word you entered <b> ${payload} </b> is a palindrome</p>`)
    }
    else {
      return setResult(`<p>The word you entered <b> ${payload} </b> is not a palindrome</p>`)
    }
  }
  function handleChange(e) {
    setInput(e.target.value)
  }
  function submitForm(e) {
    e.preventDefault()
    // console.log(e.target.value)
    checkPalindrome(input)
    setInput('')
  }
  return (
    <div>
      <form style={{ marginTop: '100px' }} onSubmit={(e) => submitForm(e)}>
        <input style={{ width: '290px', height: '35px', borderRadius: '10px', marginRight: '10px', border: '2px solid blue' }} type="text" value={input} onChange={(e) => handleChange(e)} />
        <button style={{ padding: '10px', marginLeft: '10px', background: '#0ff1ce', borderRadius: '10px' }} type="submit">Submit</button>
      </form>
      {result ? <div dangerouslySetInnerHTML={{ __html: result }}></div> : null}
    </div>
  )
}

export default Palindrome