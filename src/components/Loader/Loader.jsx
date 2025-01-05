import { Oval } from "react-loader-spinner";
import s from "./Loader.module.css";
export default function Loader() {
  return (
    <div className={s.loaderWrapper}>
      <Oval
        height="80"
        width="80"
        color="#7438ff"
        secondaryColor="#7438ff"
        ariaLabel="oval-loading"
        wrapperClass={s.component}
      />
    </div>
  );
}
