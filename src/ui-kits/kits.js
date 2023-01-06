import React from "react";
import { MailIcon, SmsIcon, TelephoneIcon } from "../assets/icons/Icons";

export function Img(props) {
  return <img src={require(`../assets/img/${props.img}`)} alt={props.alt} />;
}
export function Icone(props) {
  return <img src={require(`../assets/icons/${props.icon}`)} alt={props.alt} />;
}

export function ButtonWithBackground(props) {
  return (
    <button className="bg-button" {...props}>
      {props.label}
    </button>
  );
}

export function Card(props) {
  return (
    <div className="card-container">
      <p className="title">{props.title}</p>
      <div className="card-el-container">
        {props.cardData.map((item, index) => (
          <React.Fragment key={"Data " + index}>{item}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

export function Profile({ profilData }) {
  let progressBar = 280.25 - 280.25 * (profilData.profilComplete / 100);
  return (
    <div className="profile">
      <div className="profile-img">
        <p>Profil Completé à {profilData.profilComplete}%</p>
        <div className="img-container">
          <Img img="profile.png" alt="profile" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="95px"
            height="95px"
          >
            <defs>
              <linearGradient id="GradientColor2">
                <stop offset="0%" stopColor="#0696DD" />
                <stop offset="100%" stopColor="#211DF8" />
              </linearGradient>
            </defs>
            <circle
              cx="47"
              cy="47"
              r="45"
              strake-linecap="round"
              style={{ strokeDashoffset: progressBar }}
            />
          </svg>
        </div>
        <ButtonWithBackground label={profilData.profilName} />
      </div>
      <div className="profilInformationContainer">
        Coordonées
        <tr>
          <td>
            <span>
              <TelephoneIcon /> Telephone 1
            </span>
          </td>
          <td>{profilData.phone1}</td>
        </tr>
        <tr>
          <td>
            <span>
              <TelephoneIcon /> Telephone 2
            </span>
          </td>
          <td>{profilData.phone2}</td>
        </tr>
        <tr>
          <td>
            <span>
              <SmsIcon /> SMS
            </span>
          </td>
          <td>{profilData.sms}</td>
        </tr>
        <tr>
          <td>
            <span>
              <MailIcon /> Email
            </span>
          </td>
          <td>{profilData.mail}</td>
        </tr>
      </div>
      <div className="profilInformationContainer">
        <tr>
          <td>Corps de métier</td>
          <td>{profilData.work}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{profilData.mailEnterprise}</td>
        </tr>
        <tr>
          <td>Tel:</td>
          <td>{profilData.phoneEnterprise}</td>
        </tr>
        <tr>
          <td>Salarié:</td>
          <td>{profilData.pay}</td>
        </tr>
        <tr>
          <td>Identification URSAFF:</td>
          <td>{profilData.id}</td>
        </tr>
      </div>
      <div className="profilInformationContainer">
        <tr>
          <td>Assurance Décenal</td>
          <td>{profilData.assurance}</td>
        </tr>
        <tr>
          <td>SIREN</td>
          <td>{profilData.siren}</td>
        </tr>
        <tr>
          <td>CODE NAF</td>
          <td>{profilData.nafCode}</td>
        </tr>
        <tr>
          <td>Conformité</td>
          <td>{profilData.conform}</td>
        </tr>
      </div>
      <div className="agentStatut">
        <Img img="agentStatut.png" alt="agent" />
      </div>
    </div>
  );
}
