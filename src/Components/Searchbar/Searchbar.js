import react from "react";
import { PureComponent } from "react/cjs/react.production.min";
import s from "./Searchbar.module.css";

export default class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.input = react.createRef();
  }
  state = {
    quary: null,
  };

  onSubmit = (e) => {
    e = this.input.current.value;

    this.props.changeQuery(e);
    console.log(this.input.current.value);
    // fetch(
    //   `https://pixabay.com/api/?q=${e}&page=1&key=24010225-df2edab0854d9b7e4a5f74eca&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ qItems: data.hits }));
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form>
          <button type="button" onClick={this.onSubmit}>
            <span>Search</span>
          </button>

          <input
            ref={this.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
