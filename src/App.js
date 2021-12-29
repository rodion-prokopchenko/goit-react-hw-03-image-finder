import logo from "./logo.svg";
import "./App.css";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import ImageGalleryItems from "./Components/ImageGalleryItem/ImageGalleryItem";
import SearchBar from "./Components/Searchbar/Searchbar";
import react, { PureComponent } from "react";
import propTypes from "prop-types";

class App extends PureComponent {
  state = {
    queary: null,
    qItems: null,
  };
  componentDidMount() {
    console.log("в начале");
  }

  reState = () => {
    return this.state.qItems;
  };

  onChangeQueary = (e) => {
    this.setState({ queary: e });
    setTimeout(() => this.onSubmit(this.state.queary), 1000);
  };

  onSubmit = (e) => {
    fetch(
      `https://pixabay.com/api/?q=${e}&page=1&key=24010225-df2edab0854d9b7e4a5f74eca&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ qItems: data.hits }));

    console.log(this.state.qItems);
  };
  render() {
    return (
      <>
        <SearchBar changeQuery={this.onChangeQueary} />
        <ImageGallery
          childrens={<ImageGalleryItems updateItems={this.state.qItems} />}
        ></ImageGallery>
      </>
    );
  }
}
// App.propTypes = {
//   childrens: propTypes.node.isRequired,
// };
export default App;
