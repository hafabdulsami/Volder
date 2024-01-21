import routes from "./paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const adminRoutes = [
  {
    option: "middle",
    childer: [
      {
        label: "Product",
        to: "/products/" + "all"
      },
      {
        label: "Contact Us",
        to: routes.contactUs
      }
    ]
  },
  {
    option: "end",
    childer: [
      {
        label: (
          <FontAwesomeIcon
            icon={faFacebook}
            size="xl"
            style={{ color: "#345CFB" }}
          />
        ),
        to: "/product/" + "all"
      },
      {
        label: (
          <FontAwesomeIcon
            icon={faLocationDot}
            size="xl"
            style={{ color: "#345CFB" }}
          />
        ),
        to: routes.contactUs
      }
    ]
  }
];

export default adminRoutes;
