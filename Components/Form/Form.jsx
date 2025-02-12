

export default function Form({ setNumberOfDogs , setInputText , inputText }) {
  // How can we manage the number of dogs?
//   function handleClick(){
// setNumberOfDogs(inputText)
//   }
  return (
    <form>
      <h3>Number of cute dogs is infinite!</h3>
      <div className="mb-3">
        <label>Insert number of cute dogs</label>
        <input
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="d-grid">
        {/* <button
          onClick={(e) => {
            e.preventDefault();
            // When we click on the WOOF! button, what happens?
            handleClick()
          }}
          type="submit"
          className="btn btn-primary"
        >
          WOOF!
        </button> */}
      </div>
    </form>
  );
}
