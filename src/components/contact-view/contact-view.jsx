import { Button, Form, Container, Row, Col, Image } from "react-bootstrap";
import contactCSS from './css/contact.css';
import $ from 'jquery';
import { useState } from "react";
import contactImg from "./img/contact.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export const ContactView = () => {
  const { t } = useTranslation();
  const [userFirstName, setUserFirstName] = useState({});
  const [userLastName, setUserLastName] = useState({});
  const [userPhoneNumber, setUserPhoneNumber] = useState({});
  const [userEmail, setUserEmail] = useState({});
  const [userMessage, setUserMessage] = useState({});

  const handleChange = (event) => {
    setUserFirstName(event.target.value);
    setUserLastName(event.target.value);
    setUserPhoneNumber(event.target.value);
    setUserEmail(event.target.value);
    setUserMessage(event.target.value);

  }



  return (
    <Container className="close-notification">
      <Row>
        <Col
          className="wrapper contact-main_container"
        >
          <div>
            <h1 className="about-heading">{t("contact")}</h1>
            <p className="contact-info">{t("suggestion")}</p>
            <p className="contact-info">{t("eMailMe")}</p>
            <Image className="contact-image" src={contactImg}
              alt="An image showing writing utensils and a person writing" />
          </div>
          <div>
            <br />
            <div className="formbold-builder-form themeOne">
              <form
                enctype="multipart/form-data"
                action="https://formbold.com/s/3pMe1"
                method="POST"
                className="mx-auto w-full max-w-[570px] rounded-[10px] border border-stroke bg-white p-10 themeOne"
              >
                <div className="SortableItem fb-builder-item">
                  <h3
                    className="form-heading static fade-in-up-on-scroll text-xl leading-tight sm:text-[28px]"
                  >
                    {t("contactFormHeader")}
                  </h3>
                </div>
                <div className="SortableItem fb-builder-item">
                  <div className="mb-4">
                    <label className="fade-in-up-on-scroll mb-2.5 block text-base text-black"
                    ><span className="captions">{t("firstName")}</span><span className="label-required pl-1 text-red-400">*</span></label
                    ><input
                      type="text"
                      className="w-full fade-in-up-on-scroll rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                      name="text_input_D05C7D01-55C5-42E1-8FD8-28833E685F50"
                      placeholder={t("firstNamePlaceholder")}
                      required

                    />
                  </div>
                </div>
                <div className="SortableItem fb-builder-item">
                  <div className="mb-4">
                    <label className="fade-in-up-on-scroll mb-2.5 block text-base text-black"
                    ><span className="captions">{t("lastName")}</span><span className="label-required pl-1 text-red-400">*</span></label
                    ><input
                      type="text"
                      className="fade-in-up-on-scroll w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                      name="text_input_DB0F7555-7FE7-47FF-A446-C4AFBDDCCA0E"
                      placeholder={t("lastNamePlaceholder")}
                      required
                    />
                  </div>
                </div>
                <div className="SortableItem fb-builder-item">
                  <div className="mb-4">
                    <label className="fade-in-up-on-scroll mb-2.5 block text-base text-black"
                    ><span className="captions">{t("phoneNumber")}</span></label
                    ><input
                      type="tel"
                      className="fade-in-up-on-scroll w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                      name="phone_input_043B56DD-8A30-43A5-8480-CD53C16BB98E"
                      placeholder={t("phoneNumberPlaceholder")}
                    />
                  </div>
                </div>
                <div className="SortableItem fb-builder-item">
                  <div className="mb-4">
                    <label className="fade-in-up-on-scroll mb-2.5 block text-base text-black"
                    ><span className="captions">{t("eMail")}</span
                    ><span className="label-required pl-1 text-red-400">*</span></label
                    ><input
                      type="email"
                      className="fade-in-up-on-scroll w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                      name="email_input_D31D4B26-26C7-4B1D-A2AC-FF576851FD2F"
                      placeholder={t("eMailPlaceholder")}
                      required
                    />
                  </div>
                </div>
                <div className="SortableItem fb-builder-item">
                  <div className="mb-4">
                    <label className="fade-in-up-on-scroll mb-2.5 block text-base text-black"
                    ><span className="captions">{t("messageOrComment")}</span>
                      <span className="label-required pl-1 text-red-400">*</span></label
                    ><input
                      type="text"
                      className="fade-in-up-on-scroll w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                      name="text_input_720C400E-AAA2-42F1-AA01-5009CEB08220"
                      placeholder={t("messageOrCommentPlaceholder")}
                      required
                    />
                  </div>
                </div>
                <div className="SortableItem fb-builder-item">
                  <p className="contact-form-tip fade-in-up-on-scroll static italic text-base text-body-color">
                    <span className="form-asterisk">*</span>{t("contactFormTip")} 
                  </p>
                </div>
                <div className="btn-toolbar flex items-center space-x-3">
                  <Button type="submit" className="m-auto pe-5 ps-5 fade-in-up-on-scroll send-input inline-flex cursor-pointer items-center justify-center rounded border border-primary bg-primary px-8 py-2 text-base font-medium text-white hover:bg-opacity-90">

                    <FontAwesomeIcon className="plane-icon" icon={faPaperPlane} />

                  </Button>
                </div>
              </form>
              <p className="powered fade-in-up-on-scroll mt-8 flex items-center justify-center">
              {t("contactFormPoweredBy")}
                <span className="pl-2"
                ><a href="https://formbold.com" rel="nofollow noreferrer" target="_blank"
                ><img
                      src="https://cdn.formbold.com/formbold-logo.svg"
                      alt="Formbold Logo"
                      style={{ "maxWidth": "100px" }} /></a
                  ></span>
              </p>
            </div>
          </div>
          <div className="contact-div">

          </div>


        </Col>
      </Row>
    </Container>
  )

}


