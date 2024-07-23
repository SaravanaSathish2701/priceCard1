const data = [
  {
    name: "FREE",
    title: "$0/month",
    features: [
      { user: "Single User", isEnabled: true },
      { user: "50GB Storage", isEnabled: true },
      { user: "Unlimited Public Projects", isEnabled: true },
      { user: "Community Access", isEnabled: true },
      { user: "Unlimited Private Projects", isEnabled: false },
      { user: "Dedicated Phone Support", isEnabled: false },
      { user: "Free Subdomain", isEnabled: false },
      { user: "Monthly Status Reports", isEnabled: false },
    ],
  },
  {
    name: "PLUS",
    title: "$ 9/month",
    features: [
      { user: "5 Users", isEnabled: true },
      { user: "50GB Storage", isEnabled: true },
      { user: "Unlimited Public Projects", isEnabled: true },
      { user: "Community Access", isEnabled: true },
      { user: "Unlimited Private Projects", isEnabled: true },
      { user: "Dedicated Phone Support", isEnabled: true },
      { user: "Free Subdomain", isEnabled: true },
      { user: "Monthly Status Reports", isEnabled: false },
    ],
  },
  {
    name: "PRO",
    title: "$ 49/month",
    features: [
      { user: "Unlimited Users", isEnabled: true },
      { user: "50GB Storage", isEnabled: true },
      { user: "Unlimited Public Projects", isEnabled: true },
      { user: "Community Access", isEnabled: true },
      { user: "Unlimited Private Projects", isEnabled: true },
      { user: "Dedicated Phone Support", isEnabled: true },
      { user: "Free Subdomain", isEnabled: true },
      { user: "Monthly Status Report", isEnabled: true },
    ],
  },
];

const Subscriptions = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {data.map((val) => (
        <div
          key={val.title}
          style={{ padding: "20px", marginTop: "70px", borderRadius: "15px" }}
          className="border"
        >
          <h5
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              fontWeight: "10",
              filter: "opacity(0.5)",
              textSize: "10px",
            }}
          >
            {val.name}
          </h5>
          <h2 style={{ fontWeight: "20px", textAlign: "center" }}>
            {val.title}
          </h2>
          <hr></hr>
          {val.features.map((feat) => (
            <div key={feat.user}>
              {feat.isEnabled ? (
                <p key={feat.user} style={{ opacity: "1"}}>
                  <i className="fa-solid fa-check"></i>  {feat.user}
                </p>
              ) : (
                <p key={feat.user} style={{ opacity: "0.5"}}>
                  <i className="fa-solid fa-xmark"></i>  {feat.user}
                </p>
              )}
            </div>
          ))}
          <button className="btn">Button</button>
        </div>
      ))}
    </div>
  );
};

export default Subscriptions;


