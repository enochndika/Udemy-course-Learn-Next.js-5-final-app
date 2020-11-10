import api from "../../auth/axios";
import { Layout } from "../../components/layout";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdbreact";
import { CardCarousel } from "../../components/cardCarousel";
import { Slug } from "../../components/slug";
import { CardVip } from "../../components/cardVip";
import { CardRelated } from "../../components/cardRelated";

const Property = ({ property, properties, propertyRelated }) => {
  const styles = {
    fontSize: 15,
  };

  return (
    <>
      {property && (
        <Layout>
          <MDBContainer>
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="9" lg="9">
                    <CardCarousel property={property} />
                    <Slug property={property} />
                  </MDBCol>

                  <MDBCol md="3" lg="3">
                    <h4 className="mt-5">Contactez-nous</h4>
                    <div style={styles}>
                      <MDBIcon icon="calculator" className="mr-1" />
                      10 rue des vainqueurs
                    </div>
                    <div style={styles}>
                      <MDBIcon icon="phone-alt" className="mr-1" />
                      +243 25-522-555
                    </div>
                    <div style={styles}>
                      <MDBIcon icon="mobile-alt" className="mr-1" />
                      +243 25-522-566
                    </div>
                    <div style={styles}>
                      <MDBIcon icon="envelope" className="mr-1" />
                      admin@gmail.com
                    </div>

                    <h3 className="mt-4 mb-3">Biens sponsorisés</h3>
                    <CardVip properties={properties} />
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
                <MDBRow>
                  {propertyRelated && propertyRelated.length !== 0 && (
                    <MDBCol>
                      <h2 className="mb-5">Biens similaires</h2>
                      <CardRelated properties={propertyRelated} />
                    </MDBCol>
                  )}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </Layout>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const { data } = await api.get("/api/properties?limit=100");
  const properties = data.data;
  const paths = properties.map((property) => ({
    params: { slug: property.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data: property } = await api.get(`/api/property/${slug}`);
  const { data: properties } = await api.get("/api/properties/vip");
  const { data: propertyRelated } = await api.get(
    `/api/properties/related/${property._id}`
  );

  return {
    props: {
      property,
      properties,
      propertyRelated,
    },
  };
};

export default Property;
