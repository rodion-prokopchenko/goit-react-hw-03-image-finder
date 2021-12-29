import { render } from "@testing-library/react";
import react, { Component } from "react";

export default class Fetch extends Component {
  state = {
    queary: null,
    qItems: [
      {
        id: 736877,
        webformatURL:
          "https://pixabay.com/get/gd6de3af03096c56e82ad0c1ee5a715b014085f21ea17497bec2b1f10e0a4f21c782125d36be01f3716e048a05a080e86_640.jpg",
      },
      {
        id: 2083492,
        webformatURL:
          "https://pixabay.com/get/gbb836de2b60799900838b6e7e88ce1523788d30d939477e38e26bc74eef838d007454b87e9b1de3b96392923386050cd1631fa8e3b833b2b4c01db43b3ba9066_640.jpg",
      },
    ],
  };

  componentDidMount() {
    console.log("в начале");

    // fetch(
    //   `https://pixabay.com/api/?q=cat&page=1&key=24010225-df2edab0854d9b7e4a5f74eca&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //   .then((res) => res.json())
    //       .then((data) => this.setState({ qItems: data.hits }));

    setTimeout(() => console.log(this.state.qItems), 1000);
  }

  onChangeQueary = (e) => {
    this.setState({ queary: e });
  };

  render() {
    const { qItems } = this.state;
    return (
      <ul>
        {qItems.map((qItems) => (
          <li key={qItems.id}>
            <img src={qItems.webformatURL} />
          </li>
        ))}
      </ul>
    );
  }
}
