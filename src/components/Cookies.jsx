import { useState, useEffect, useRef } from "react";

export default function Cookies() {
  const [cookies, setCookies] = useState(() => {
    return JSON.parse(localStorage.getItem("cookies")) || 0;
  });
  const [cps, setCps] = useState(() => {
    return JSON.parse(localStorage.getItem("cps")) || 0;
  });
  const [Upgrade, setUpgrade] = useState(() => {
    return JSON.parse(localStorage.getItem("Upgrade")) || 0;
  });
  const [Upgrade2, setUpgrade2] = useState(() => {
    return JSON.parse(localStorage.getItem("Upgrade2")) || 0;
  });
  const [Upgrade3, setUpgrade3] = useState(() => {
    return JSON.parse(localStorage.getItem("Upgrade3")) || 0;
  });
  const [Upgrade4, setUpgrade4] = useState(() => {
    return JSON.parse(localStorage.getItem("Upgrade4")) || 0;
  });
  const [Upgrade5, setUpgrade5] = useState(() => {
    return JSON.parse(localStorage.getItem("Upgrade5")) || 0;
  });

  const clickerButtonRef = useRef(null);
  const womanButtonRef = useRef(null);
  const ranchButtonRef = useRef(null);
  const quarryButtonRef = useRef(null);
  const facilityButtonRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify(cookies));
    localStorage.setItem("cps", JSON.stringify(cps));
    localStorage.setItem("Upgrade", JSON.stringify(Upgrade));
    localStorage.setItem("Upgrade2", JSON.stringify(Upgrade2));
    localStorage.setItem("Upgrade3", JSON.stringify(Upgrade3));
    localStorage.setItem("Upgrade4", JSON.stringify(Upgrade4));
    localStorage.setItem("Upgrade5", JSON.stringify(Upgrade5));
  });

  useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => {
        return Math.round((currentCookies + cps) * 10) / 10;
      });
      console.log(cps);
    }, 1000);
    return () => {
      clearInterval(cookieInterval);
    };
  }, [cps]);

  function addCookie() {
    setCookies((currentCookies) => {
      return Math.round((currentCookies + 1) * 10) / 10;
    });
  }
  const upgradeCost1 = Math.round(15 * Math.pow(1.15, Upgrade));
  function buyUpgrade() {
    setCps((x) => Math.round((x + 0.1) * 10) / 10);
    setUpgrade((x) => x + 1);
    setCookies((x) => Math.round((x - upgradeCost1) * 10) / 10);
    //e.target.toggleAttribute("disabled");
    //console.log(e.target);
    //setTimeout(() => e.target.toggleAttribute("disabled"), 1000);
  }

  const upgradeCost2 = Math.round(100 * Math.pow(1.15, Upgrade2));
  function buyUpgrade2() {
    setCps((x) => Math.round((x + 1) * 10) / 10);
    setUpgrade2((x) => x + 1);
    setCookies((x) => Math.round((x - upgradeCost2) * 10) / 10);
    //e.target.toggleAttribute("disabled");
    //console.log(e.target);
    //setTimeout(() => e.target.toggleAttribute("disabled"), 1000);
  }
  const upgradeCost3 = Math.round(1100 * Math.pow(1.15, Upgrade3));
  function buyUpgrade3() {
    setCps((x) => Math.round((x + 8) * 10) / 10);
    setUpgrade3((x) => x + 1);
    setCookies((x) => Math.round((x - upgradeCost3) * 10) / 10);
    //e.target.toggleAttribute("disabled");
    //console.log(e.target);
    //setTimeout(() => e.target.toggleAttribute("disabled"), 1000);
  }
  const upgradeCost4 = Math.round(12000 * Math.pow(1.15, Upgrade4));
  function buyUpgrade4() {
    setCps((x) => Math.round((x + 47) * 10) / 10);
    setUpgrade4((x) => x + 1);
    setCookies((x) => Math.round((x - upgradeCost4) * 10) / 10);
    //e.target.toggleAttribute("disabled");
    //console.log(e.target);
    //setTimeout(() => e.target.toggleAttribute("disabled"), 1000);
  }
  const upgradeCost5 = Math.round(130000 * Math.pow(1.15, Upgrade5));
  function buyUpgrade5() {
    setCps((x) => Math.round((x + 260) * 10) / 10);
    setUpgrade5((x) => x + 1);
    setCookies((x) => Math.round((x - upgradeCost5) * 10) / 10);
    //e.target.toggleAttribute("disabled");
    //console.log(e.target);
    //setTimeout(() => e.target.toggleAttribute("disabled"), 1000);
  }

  function resetBtn() {
    setCookies((x) => x * 0);
    setCps((x) => x * 0);
    setUpgrade((x) => x * 0);
    setUpgrade2((x) => x * 0);
    setUpgrade3((x) => x * 0);
    setUpgrade4((x) => x * 0);
    setUpgrade5((x) => x * 0);
  }

  useEffect(() => {
    const clickerDisabled = cookies < upgradeCost1;
    if (clickerButtonRef.current) {
      clickerButtonRef.current.disabled = clickerDisabled;
    }
    const womanDisabled = cookies < upgradeCost2;
    if (womanButtonRef.current) {
      womanButtonRef.current.disabled = womanDisabled;
    }
    const ranchDisabled = cookies < upgradeCost3;
    if (ranchButtonRef.current) {
      ranchButtonRef.current.disabled = ranchDisabled;
    }
    const quarryDisabled = cookies < upgradeCost4;
    if (ranchButtonRef.current) {
      quarryButtonRef.current.disabled = quarryDisabled;
    }
    const facilityDisabled = cookies < upgradeCost5;
    if (facilityButtonRef.current) {
      facilityButtonRef.current.disabled = facilityDisabled;
    }
  }, [
    cookies,
    upgradeCost1,
    upgradeCost2,
    upgradeCost3,
    upgradeCost4,
    upgradeCost5,
  ]);

  return (
    <div id="HELLO">
      <div id="title">
        <h1>Jaffa Clicker</h1>
        <p>{cookies} Jaffas</p>
        <p>{cps} Jaffas per second</p>
      </div>
      <div id="jaffa">
        <img
          id="jaffaButton"
          src="../src/assets/jaffa-cake.png"
          onClick={addCookie}
        />
      </div>
      <div id="buttonsnstats">
        <div id="buttons">
          <button ref={clickerButtonRef} onClick={buyUpgrade}>
            Buy a Clicker
          </button>
          <button ref={womanButtonRef} onClick={buyUpgrade2}>
            Buy an Elderly Woman
          </button>
          <button ref={ranchButtonRef} onClick={buyUpgrade3}>
            Buy a Ranch
          </button>
          <button ref={quarryButtonRef} onClick={buyUpgrade4}>
            Buy a Quarry
          </button>
          <button ref={facilityButtonRef} onClick={buyUpgrade5}>
            Buy a Facility
          </button>
        </div>
        <div id="Stats1">
          <p>I have {Upgrade} Clickers.</p>

          <p>I have {Upgrade2} Elderly Women</p>

          <p>I have {Upgrade3} Ranches</p>

          <p>I have {Upgrade4} Quarries</p>

          <p>I have {Upgrade5} Facilities</p>
        </div>
        <div id="Stats2">
          <p>Next Clicker costs {upgradeCost1} Jaffas</p>
          <p>Next Elderly Woman costs {upgradeCost2} Jaffas</p>
          <p>Next Ranch costs {upgradeCost3} Jaffas</p>
          <p>Next quarry costs {upgradeCost4} Jaffas</p>
          <p>Next Facility costs {upgradeCost5} Jaffas</p>
        </div>
      </div>
      <div id="resetButton">
        <h2>CLICK THIS TO RESET ALL PROGRESS</h2>
        <button onClick={resetBtn}>RESET</button>
      </div>
    </div>
  );
}
