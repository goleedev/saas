const benefits = [
  {
    title: 'One low price',
    subtitle: 'Save big. Get everything with a super low monthly subscription.',
  },
  {
    title: 'Cancel anytime',
    subtitle: 'No contracts. No hidden fees. No stress.',
  },
  {
    title: 'Unlimited access',
    subtitle: 'Access all the products you want. 24/7.',
  },
];

export default function Benefits() {
  return (
    <div className="bg-black">
      <div className="column-padding">
        <div className="content-grid xl">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="spacing-base">
              <h3>
                {benefit.title}
                <br />

                <div></div>
              </h3>
              <div>{benefit.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
