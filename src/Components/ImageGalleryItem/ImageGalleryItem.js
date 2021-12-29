import react, { PureComponent } from "react";
import s from "./ImageGalleryItem.module.css";

export default class ImageGalleryItems extends PureComponent {
  state = {
    qItems: undefined,
  };

  updateItems = () => {
    if (this.props.updateItems) {
      this.setState({ qItems: this.props.updateItems });
    }
  };

  renderItems = (e) => {
    return e.map((qItems) => (
      <li className={s.ImageGalleryItem} key={qItems.id}>
        <img className={s.ImageGalleryItem_image} src={qItems.webformatURL} />
      </li>
    ));
  };

  render() {
    this.updateItems();
    let { qItems } = this.state;
    return (
      <>
        {this.state.qItems
          ? this.renderItems(qItems)
          : console.log(this.props.updateItems)}
      </>
    );
  }
}
// {
//   qItems.map((qItems) => (
//     <li className={s.ImageGalleryItem} key={qItems.id}>
//       <img className={s.ImageGalleryItem_image} src={qItems.webformatURL} />
//     </li>
//   ));
// }
