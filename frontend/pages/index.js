import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const [countdown, setCountdown] = useState("");
  const [age, setAge] = useState("");
  const [isBirthday, setIsBirthday] = useState(false);
  const name = "Vivek";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/birthday");
      const data = await res.json();
      setCountdown(data.countdown);
      setAge(data.age);
      const birthdayNow = data.countdown.includes("0 Days 0 Hours 0 Minutes 0 Seconds");
      if (birthdayNow && !isBirthday) {
        setIsBirthday(true);
        launchConfetti();
      }
    };

    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, [isBirthday]);

  const launchConfetti = () => {
    const duration = 5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff7b00', '#ffcc00', '#ffffff']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff7b00', '#ffcc00', '#ffffff']
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <>
      <div className="container">
        <h1 className="heading">
          {isBirthday
            ? `Happy Birthday, ${name}! 🎉`
            : `${countdown} remaining`}
        </h1>
        {!isBirthday && (
          <p className="age-text">You will be {age} years old</p>
        )}
      </div>

      <style jsx global>{`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: #0e0e0e;
    font-family: Arial, sans-serif;
  }

  body {
    position: fixed;
    inset: 0;
  }

  .container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: radial-gradient(circle at center, #1e1e1e, #0e0e0e);
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }

  .heading {
    font-size: 4rem;
    font-weight: 700;
    color: #ff7b00;
    animation: fadeIn 1s ease-in-out;
  }

  .age-text {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: #d3d3d3;
    font-weight: 500;
    opacity: 0.8;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>

    </>
  );
}
