import {
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
  MDBView,
} from "mdbreact";
import { priceFormatted } from "./helpers";
import Link from "next/link";

export const PropertySection = ({ properties }) => (
  <>
    <h2 className="h2-responsive font-weight-bold text-center my-4 globalColor">
      Notre catalogue
    </h2>
    <MDBRow>
      {properties &&
        properties.map((property) => (
          <MDBCol md="4" lg="4" key={property._id}>
            <Link href={`/property/${property.slug}`}>
              <a>
                <MDBView zoom>
                  <img
                    src={property.pictures[0]}
                    alt={property.title}
                    className="globalImg"
                  />
                </MDBView>
              </a>
            </Link>
            <MDBCardBody>
              <MDBCardTitle>{property.title}</MDBCardTitle>
              <MDBCardText>
                <strong>{priceFormatted(property.price)}</strong>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        ))}
    </MDBRow>
    <div className="text-center">
      <button className="globalButton">Afficher plus</button>
    </div>
    <hr className="my-5" />
  </>
);
