import { useFormik } from "formik";
import { CrossIcon, Title } from "../../App.styled";
import sprite from "../../img/symbol-defs.svg";
import {
  MintBtn,
  MintDiscord,
  MintIcon,
  MintIconWrapper,
  MintInput,
  MintInputWrapper,
  MintSection,
  MintText,
} from "./Mint.styled";
import * as yup from "yup";

const Mint = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      address: "",
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .matches(/^@/, "Username must start from @")
        .min(3, "Must be 3 characters or more")
        .max(32, "Must be 15 characters or less")
        .trim()
        .required("Required"),
      address: yup
        .string()
        .max(20, "Must be 20 characters or less")
        .trim()
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <MintSection className="container">
      <Title>Are you in?</Title>
      <CrossIcon width={24} height={24}>
        <use href={`${sprite}#icon-cross`}></use>
      </CrossIcon>
      <MintText>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </MintText>
      <form onSubmit={formik.handleSubmit}>
        <MintInputWrapper>
          <MintIconWrapper>
            <MintDiscord width={24} height={24}>
              <use href={`${sprite}#icon-discord-logo`}></use>
            </MintDiscord>
          </MintIconWrapper>
          <MintInput
            // type="email"
            name="username"
            placeholder="@username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={formik.touched.username && formik.errors.username}
          />
          {/* {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null} */}
        </MintInputWrapper>
        <MintInputWrapper>
          <MintIconWrapper>
            <svg width={24} height={24}>
              <use href={`${sprite}#icon-fox`}></use>
            </svg>
          </MintIconWrapper>
          <MintInput
            type="text"
            name="address"
            placeholder="Wallet address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            $error={formik.touched.address && formik.errors.address}
          />
          {/* {formik.touched.address && formik.errors.address ? (
            <div>{formik.errors.address}</div>
          ) : null} */}
        </MintInputWrapper>
        <MintBtn type="submit">MINT</MintBtn>
      </form>
    </MintSection>
  );
};

export default Mint;
