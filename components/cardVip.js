import { MDBCard, MDBCardImage } from "mdbreact";
import { priceFormatted } from "./helpers";
import Link from "next/link";

export const CardVip = ({ properties }) => (
  <>
    {properties &&
      properties.map((property) => (
        <MDBCard key={property._id}>
          <Link href={`/property/${property.slug}`}>
            <a>
              <MDBCardImage
                src={property.pictures[0]}
                zoom
                hover
                waves
                className="d-block w-100"
              />
            </a>
          </Link>
          <div className="imgTop">
            <button className="d-inline-flex vedette">En Vedette</button>
            <button className="d-inline-flex exclu">Exclusivité</button>
          </div>
          <div className="prix">{priceFormatted(property.price)}</div>
        </MDBCard>
      ))}
    <style jsx>
      {`
        .imgTop {
          position: absolute;
          top: 10px;
          left: 5px;
        }
        .vedette {
          background-color: #00695c;
          color: white;
          text-transform: capitalize;
          font-size: 10px;
          font-weight: bolder;
          border: 0px;
          margin-right: 5px;
        }
        .exclu {
          border: 0px;
          background-color: red;
          color: white;
          font-weight: bolder;
          text-transform: capitalize;
          font-size: 10px;
        }
        .price {
          position: absolute;
          bottom: 5px;
          left: 16px;
          font-weight: bold;
          color: white;
        }
      `}
    </style>
  </>
);
