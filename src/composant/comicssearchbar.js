import '../App.css'

const ComicsSearchBar = () => {
    let handleSubmit = (event) => {
        document.location.href="../../search/comics/"+event.target[0].value;
        event.preventDefault();
        }

    return  (
        <div className='formCompo'>
            <form onSubmit={handleSubmit}>
                <input className='bar' type="text" name="" id="bar" />
                <input className='searchBtn' type="submit" />
            </form>
        </div>
    )
  }
  
export default ComicsSearchBar;