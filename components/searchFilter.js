import { useState } from "react";
import { MDBIcon } from "mdbreact";
import api from "../auth/axios";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => api.get(url).then((res) => res.data);

const CategoryList = ({ options }) => {
  return (
    options &&
    options.map((option) => (
      <option name={Option._id} key={option._id} value={option._id}>
        {option.name}
      </option>
    ))
  );
};

export const SearchFilter = () => {
  const router = useRouter();

  const { data } = useSWR("/api/categories", fetcher);

  const [values, setValues] = useState({
    title: "",
    category: "",
  });

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/property/search?${values.title && `title=${values.title}`}${
        values.category && `&category=${values.category}`
      }`
    );
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-6 firstCol">
            <div className="input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text customColor">
                  <MDBIcon icon="list-ul" />
                </span>
                <select
                  name="category"
                  onChange={handleChange("category")}
                  value={values.category}
                  className="form-control form-field"
                >
                  <option value="selected">Categorie</option>
                  {data && <CategoryList options={data} />}
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-7 col-6 secondCol">
            <div className="input-group-sm mb-3">
              <div className="input-group-prepend">
                <input
                  name="title"
                  onChange={handleChange("title")}
                  placeholder="Recherche"
                  className="form-control form-field"
                />
                <span className="input-group-text customColor">
                  <MDBIcon icon="search" onClick={onSubmit} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
      <style jsx>
        {`
          .firstCol {
            padding-right: 1px;
          }
          .secondCol {
            padding-left: 1px;
          }
          .container {
            margin-top: 30px;
          }
          .form-field {
            background-color: #f5f5f5;
          }
          @media screen and (min-width: 768px) {
            .container {
              width: 50%;
              margin-top: 30px;
            }
            .customColor {
              background-color: white;
            }
          }
        `}
      </style>
    </div>
  );
};
