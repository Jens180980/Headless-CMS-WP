import { Card } from "./Card";
import { List } from "./List";
import Style from "./app.module.scss";

function App() {
  return (
    <>
      <div className={Style.galleryWrapper}>
        <Card />
      </div>
      <div className={Style.listWrapper}>
        <List />
      </div>
    </>
  );
}

export default App;
