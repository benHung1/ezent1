import { TiGroupOutline } from "react-icons/ti";
import { MdCelebration } from "react-icons/md";
import { GiLoveSong } from "react-icons/gi";
const iconStyle = (Icon) => <Icon size="3rem" color="red" />;

export const featuresData = {
  title: "Our Programs",
  text: "Eveniet minima dolorem aperiam optio ea ab odit fugiat, cupiditate deserunt repudiandae, esse eum consectetur? Porro hic sapiente omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, sint quibusdam. Sequi fugiat, vero ipsam, iure enim, ex voluptatum quae temporibus delectus rem facilis voluptatem illum nisi. Recusandae, deleniti excepturi?",
  content: [
    {
      name: "Networking",
      desc: "Eveniet minima dolorem aperiam optio ea ab odit fugiat, cupiditate deserunt repudiandae",
      icon: iconStyle(TiGroupOutline),
      image:
        "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Best Events",
      desc: "Eveniet minima dolorem aperiam optio ea ab odit fugiat, cupiditate deserunt repudiandae",
      icon: iconStyle(GiLoveSong),
      image:
        "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      name: "Futures",
      desc: "Eveniet minima dolorem aperiam optio ea ab odit fugiat, cupiditate deserunt repudiandae",
      icon: iconStyle(MdCelebration),
      image:
        "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ],
};
