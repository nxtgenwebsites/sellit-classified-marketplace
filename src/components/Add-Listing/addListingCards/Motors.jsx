import React, { useRef, useState } from "react";

export default function Motors() {
  // Checkbox state management
  const [checked1, setChecked1] = useState({
    checkOne: false,
    checkTwo: false,
  });
  const [checked2, setChecked2] = useState({
    checkThree: false,
    checkFour: false,
  });
  const [checked3, setChecked3] = useState({
    checkFive: false,
    checkSix: false,
  });
  const [checked4, setChecked4] = useState({
    checkSeven: false,
    checkEight: false,
  });
  // Form section references
  const forms = {
    mobiles: useRef(),
    motors: useRef(),
    "property-sale": useRef(),
    "property-rent": useRef(),
    "find-business": useRef(),
    "find-service": useRef(),
    "find-job": useRef(),
    electronics: useRef(),
    bikes: useRef(),
    animals: useRef(),
    furniture: useRef(),
    fashion: useRef(),
    books: useRef(),
    kids: useRef(),
  };

  // Checkbox handlers
  const handleChange1 = (name) =>
    setChecked1({
      checkOne: name === "checkOne",
      checkTwo: name === "checkTwo",
    });
  const handleChange2 = (name) =>
    setChecked2({
      checkThree: name === "checkThree",
      checkFour: name === "checkFour",
    });
  const handleChange3 = (name) =>
    setChecked3({
      checkFive: name === "checkFive",
      checkSix: name === "checkSix",
    });
  const handleChange4 = (name) =>
    setChecked4({
      checkSeven: name === "checkSeven",
      checkEight: name === "checkEight",
    });
  return (
    <div>
      <div
        ref={forms.motors}
        className="form-second-group w-100 py-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex justify-content-between w-100">
          <div className="label">
            <label htmlFor="make" className="w-75">
              Make
            </label>
          </div>
          <div className="select w-100">
            <select
              name="make"
              id="make"
              className="py-2 px-3 form-select w-100"
            >
              <option value="" defaultValue disabled>
                Select make
              </option>
              <option value="" disabled className="disabled">
                Popular Make
              </option>
              <option value="1">Suzuki</option>
              <option value="2">Toyota</option>
              <option value="3">Honda</option>
              <option value="4">Daihatsu</option>
              <option value="5">Nissan</option>
              <option value="" disabled className="disabled">
                Others
              </option>
              <option value="6">Adam</option>
              <option value="7">Audi</option>
              <option value="8">BAIC</option>
              <option value="9">Bentely</option>
              <option value="10">BMW</option>
              <option value="11">Buick</option>
              <option value="12">Cadiac</option>
              <option value="13">Changan</option>
              <option value="14">Chery</option>
              <option value="15">Chevrolet</option>
              <option value="16">Chrysler</option>
              <option value="17">Classic & Antiques</option>
              <option value="18">Daewoo</option>
              <option value="19">Daihatsu</option>
              <option value="20">Datsun</option>
              <option value="21">Dodge</option>
              <option value="22">Dongfeng</option>
              <option value="23">FAW</option>
              <option value="24">Flat</option>
              <option value="25">Ford</option>
              <option value="26">GMC</option>
              <option value="27">Haval</option>
              <option value="28">Hino</option>
              <option value="29">Honda</option>
              <option value="30">Honri</option>
              <option value="31">Hummer</option>
              <option value="32">Hyundai</option>
              <option value="33">Isuzu</option>
              <option value="34">JAC</option>
              <option value="35">Jaguar</option>
              <option value="36">Jeep</option>
              <option value="37">JW Forland</option>
              <option value="38">Land Rover</option>
              <option value="39">Lexus</option>
              <option value="40">Mazda</option>
              <option value="41">Mercedes</option>
              <option value="42">MG</option>
              <option value="43">Mitsubishi</option>
              <option value="44">Mushtaq</option>
              <option value="45">Nissan</option>
              <option value="46">Other Brands</option>
              <option value="47">Peugeot</option>
              <option value="48">Porsche</option>
              <option value="49">Prince</option>
              <option value="50">Proton</option>
              <option value="51">Range Rover</option>
              <option value="52">Renault</option>
              <option value="53">Seres</option>
              <option value="54">Ssangyong</option>
              <option value="55">Subaru</option>
              <option value="56">Suzuki</option>
              <option value="57">Tesla</option>
              <option value="58">Toyota</option>
              <option value="59">United</option>
              <option value="60">Volkswagen</option>
              <option value="61">ZOTYE</option>
            </select>
          </div>
        </div>
        <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="brand" className="w-75">
              Condition
            </label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkOne"
              className="checkOne"
              checked={checked1.checkOne}
              onChange={() => handleChange1("checkOne")}
            />
            <input
              type="checkbox"
              name="checkTwo"
              className="checkTwo"
              checked={checked1.checkTwo}
              onChange={() => handleChange1("checkTwo")}
            />
          </div>
        </div>
        <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="year">Year</label>
          </div>
          <div className="input w-100">
            <input
              type="number"
              name="year"
              id="year"
              className="year-input px-3 py-2 rounded-2"
              placeholder="Enter Year"
            />
          </div>
        </div>
        <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Fuel">Fuel</label>
          </div>
          <div className="select w-100">
            <select name="Fuel" id="Fuel" className="form-select px-3 py-2">
              <option value="" defaultValue disabled>
                Select Fuel
              </option>
              <option value="1">Patrol</option>
              <option value="2">Diesel</option>
              <option value="3">LPG</option>
              <option value="4">CNG</option>
              <option value="5">Hybrid</option>
              <option value="6">Electric</option>
            </select>
          </div>
        </div>
        <div className="fifth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Trasmission" className="w-75">
              Trasmission
            </label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkThree"
              className="checkThree"
              checked={checked2.checkThree}
              onChange={() => handleChange2("checkThree")}
            />
            <input
              type="checkbox"
              name="checkFour"
              className="checkFour"
              checked={checked2.checkFour}
              onChange={() => handleChange2("checkFour")}
            />
          </div>
        </div>
        <div className="sixth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Body Type" className="w-75">
              Body Type
            </label>
          </div>
          <div className="select w-100">
            <select
              name="Body Type"
              id="Body Type"
              className="form-select px-3 py-2"
            >
              <option value="" defaultValue disabled>
                Select Body Type
              </option>
              <option value="" disabled className="disabled">
                Popular Body Type
              </option>
              <option value="1">Sedan</option>
              <option value="2">Hatchback</option>
              <option value="3">Other</option>
              <option value="4">Small city car</option>
              <option value="5">SUV</option>
              <option value="" disabled className="disabled">
                Others
              </option>
              <option value="6">Convertible</option>
              <option value="6">Estate</option>
              <option value="6">Hatchback</option>
              <option value="6">MPV</option>
              <option value="6">Other</option>
              <option value="6">Pickup</option>
              <option value="6">Sedan</option>
              <option value="6">Small city car</option>
              <option value="6">Sports / Coupe</option>
              <option value="6">SUV</option>
              <option value="6">Van / Bus</option>
            </select>
          </div>
        </div>
        <div className="seventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Color">Color</label>
          </div>
          <div className="input w-100 gap-2 p-2 text-end">
            <input
              type="color"
              name="Color"
              id="Color"
              className="color-inp"
            />
          </div>
        </div>
        <div className="eighth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Number Of Seats">Number Of Seats</label>
          </div>
          <div className="input w-100">
            <input
              type="number"
              name="Number Of Seats"
              id="Number Of Seats"
              className="year-input px-3 py-2 rounded-2"
              placeholder="Enter number of seats"
            />
          </div>
        </div>
        <div className="ninth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Features" className="w-75">
              Features
            </label>
          </div>
          <div className="input w-100">
            <div className="checkbox-main w-100">
              <div className="check-1">
                <div className="row align-items-center row-gap-2">
                  <div className="col-md-6 mt-2">
                    <div className="checkboxes w-100">
                      <div className="checkbox-1 d-flex align-items-center w-100 gap-1">
                        <input
                          type="checkbox"
                          name="Features1"
                          id="Features1"
                        />
                        <span>ABS</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="checkboxes">
                      <div className="checkbox-2 d-flex align-items-center w-100 gap-1">
                        <input
                          type="checkbox"
                          name="Features2"
                          id="Features2"
                        />
                        <span>Airbags</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="checkboxes">
                      <div className="checkbox-1 d-flex align-items-center w-100 gap-1">
                        <input
                          type="checkbox"
                          name="Features3"
                          id="Features3"
                        />
                        <span>Premium Wheels</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mt-2">
                    <div className="checkboxes">
                      <div className="checkbox-2 d-flex align-items-center w-100 gap-1">
                        <input
                          type="checkbox"
                          name="Features4"
                          id="Features4"
                        />
                        <span>AM/FM Radio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tenth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Number Of Owners">Number Of Owners</label>
          </div>
          <div className="input w-100">
            <input
              type="number"
              name="Number Of Owners"
              id="Number Of Owners"
              className="year-input px-3 py-2 rounded-2"
              placeholder="Enter number of owners"
            />
          </div>
        </div>
        <div className="eleventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Car Documents" className="w-75">
              Car Documents
            </label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkFive"
              className="checkFive"
              checked={checked3.checkFive}
              onChange={() => handleChange3("checkFive")}
            />
            <input
              type="checkbox"
              name="checkSix"
              className="checkSix"
              checked={checked3.checkSix}
              onChange={() => handleChange3("checkSix")}
            />
          </div>
        </div>
        <div className="twelveth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Assembly" className="w-75">
              Assembly
            </label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkSeven"
              className="checkSeven"
              checked={checked4.checkSeven}
              onChange={() => handleChange4("checkSeven")}
            />
            <input
              type="checkbox"
              name="checkEight"
              className="checkEight"
              checked={checked4.checkEight}
              onChange={() => handleChange4("checkEight")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
