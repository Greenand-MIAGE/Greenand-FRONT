import CookieConsent from "react-cookie-consent";

function ManageCookies() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="OK"
      cookieName="myAwesomeCookieName2"
      style={{ background: "#4D9940" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
    >
      {" "}
      Parlons un peu cookies ! Nous utilisons des cookies et d’autres données et
      technologies pour analyser, améliorer et personnaliser votre expérience
      sur et en dehors de Greenand. Cliquez sur « OK » pour accepter et
      continuer à utiliser Greenand. Vous pouvez gérer vos données dans vos
      paramètres de cookies.
    </CookieConsent>
  );
}

export default ManageCookies;
