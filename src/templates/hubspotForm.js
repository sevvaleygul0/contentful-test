class HubspotForm extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7601211",
          formId: "59b42eef-4cf8-47d9-b93f-a77cf8632692",
          target: "#hubspotForm"
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div id="hubspotForm"></div>
      </div>
    );
  }
}

ReactDOM.render(<HubspotForm />, document.getElementById("content"));
