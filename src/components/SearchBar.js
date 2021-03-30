import React, {useState} from 'react';


const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);
    }

    return (
            <div className="search-bar ui segment">
                <form onSubmit={onSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" blah="blah" onChange={onInputChange} value={term} />
                    </div>
                </form>
            </div>
        ) //end return
}

export default SearchBar;


// class SearchBar extends React.Component {

//     state = { term: ''};

//     onInputChange = (event) => {
//        this.setState( {term: event.target.value} );
//     };

//     onFormSubmit = (event) => {
//         event.preventDefault();
    
//         //TODO: make sure we call callback from parent component
//         this.props.onFormSubmit(this.state.term);
//     }

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input type="text" blah="blah" onChange={this.onInputChange} value={this.state.term} />
//                     </div>
//                 </form>

//             </div>

//         ) 
//     }
// }

