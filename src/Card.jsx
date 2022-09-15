import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Style from "./card.module.scss";

export const Card = () => {
  const [Homes, setHomes] = useState();
  const [ImgList, setImgList] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `http://test.dev-footprint.nu/backend/wp-json/wp/v2/homes`
      );
      setHomes(result.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get(
        `http://test.dev-footprint.nu/backend/wp-json/wp/v2/media`
      );
      setImgList(result.data);
    };
    getImg();
  }, []);

  return (
    <>
      <h3 className={Style.header}>Galleri over boliger</h3>
      <section className={Style.galleryWrapper}>
        {Homes &&
          Homes.map((item, index) => {
            let imgPath;
            ImgList &&
              ImgList.map((img) => {
                return item.featured_media === img.id
                  ? (imgPath = img.guid.rendered)
                  : null;
              });

            return (
              <section key={index} className={Style.wrapper}>
                <img alt="hus" src={imgPath}></img>
                <h4
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                ></h4>
                <p>Pris: {Number(item.acf.price).toLocaleString()} kr.</p>
                <p>Adresse: {item.acf.address}</p>
              </section>
            );
          })}
      </section>
    </>
  );
};
