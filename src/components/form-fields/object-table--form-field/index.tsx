import { LayoutItemRemark } from "../../common/layout-item-remark";
import cinema_exchangeRates from "./image-cinema-exchange-rates.png";
import cinema_sponsors from "./image-cinema-sponsors.png";
import content_castCrews from "./image-content-cast-crew.png";
import deal_points from "./image-deal-points.png";
import deal_quotaPeriods from "./image-deal-quote-period.png";
import defaultImage from "./image.png";

export function ObjectTable_FormField({
  label,
  _wireframe,
}: {
  label: string;
  _wireframe: string;
}) {
  let image: string = defaultImage;
  switch (_wireframe) {
    case "deal_quotaPeriods":
      image = deal_quotaPeriods;
      break;
    case "content_castCrews":
      image = content_castCrews;
      break;
    case "cinema_exchangeRates":
      image = cinema_exchangeRates;
      break;
    case "deal_points":
      image = deal_points;
      break;
    case "cinema_sponsors":
      image = cinema_sponsors;
      break;
  }

  return (
    <div className="relative text-black">
      <LayoutItemRemark />
      <div className="absolute top-2 left-2">{label}</div>
      <img src={image} className="w-full" />
    </div>
  );
}
