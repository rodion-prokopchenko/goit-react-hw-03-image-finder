import react, { Component } from "react";
import ImageGalleryItems from "../ImageGalleryItem/ImageGalleryItem";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ childrens }) {
  return <ul className={s.ImageGallery}>{childrens}</ul>;
}
