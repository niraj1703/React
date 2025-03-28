function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
 <div className="myorder">
        <span>Language Settings</span>
        <br /> 
        <span>Select the language you prefer for browsing, shopping and communications.</span> 
        <br />
          <label>
            <input type="radio" name="myRadio" value="option1" />
            हिन्दी - HI - अनुवाद
          </label>
          <hr />
  
          <label>
            <input type="radio" name="myRadio" value="option2" />
            English - EN
          </label>
          <br />
          <label>
            <input type="radio" name="myRadio" value="option2" />
            தமிழ் - TA - மொழிபெயர்ப்பு
          </label>
          <br />
          <label>
            <input type="radio" name="myRadio" value="option3" />
            తెలుగు - TE - అనువాదం
          </label>
          <br />
          <label>
            <input type="radio" name="myRadio" value="option2" />
            ಕನ್ನಡ - KN - ಭಾಷಾಂತರ
          </label>
          <br />
          <label>
            <input type="radio" name="myRadio" value="option3" />
            ಕನ್ನಡ - KN - ಭಾಷಾಂತರ
          </label>
          <br />
          <label>
            <input type="radio" name="myRadio" value="option2" />
            বাংলা - BN - অনুবাদ
          </label>
          <br />
          <label>
            <input type="radio" name="myRadio" value="option3" />
            मराठी - MR - भाषांतर
          </label>
          <br /> <br />
          <hr />
           <br /><br />
          <button className="stacked-button" type="submit">Submit form</button>
          <button className="stacked-button" type="submit">Submit form</button>
         
          <section> 
          <button className="stacked" type="submit">Submit form</button>
          </section>
  
  
        </div>
</>
  )
}


export default App