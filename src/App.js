const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const maxAmount = Math.max(...data.map((item) => item.amount));
const sum = data.reduce((total, curItem) => total + curItem.amount, 0);

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div>
        <span>My balance</span>
        <span>${sum}</span>
      </div>
      <div className="logo-cont">
        <img src="/images/logo.svg" alt="logo" className="logo" />
      </div>
    </header>
  );
}

function Main() {
  return (
    <main className="main">
      <Stats />
      <Conclusion />
    </main>
  );
}

function Stats() {
  return (
    <section>
      <div className="header">Spending - Last 7 days</div>
      <Chart />
    </section>
  );
}

function Chart() {
  return (
    <div className="chart">
      {data.map((item) => (
        <Bar
          amount={item.amount}
          day={item.day}
          key={item.day}
          maxAmount={maxAmount}
        />
      ))}
    </div>
  );
}

function Bar({ amount, day }) {
  const today = new Date().toDateString().slice(0, 3).toLowerCase();
  const bgColor = today === day ? "hsl(186, 34%, 60%)" : "";
  const maxHeight = 100;
  const barHeight = (amount / maxAmount) * maxHeight;
  return (
    <div className="bar-cont">
      <div
        className="bar"
        style={{
          height: `${barHeight}%`,
          backgroundColor: bgColor,
        }}
      >
        <p className="amount">${amount}</p>
      </div>
      <p>{day}</p>
    </div>
  );
}
function Conclusion() {
  return (
    <div className="conclusion">
      <div>
        <span>Total this month </span>
        <span>$546.33</span>
      </div>
      <div>
        <span>+2.4% </span>
        <span>from last month</span>
      </div>
    </div>
  );
}
