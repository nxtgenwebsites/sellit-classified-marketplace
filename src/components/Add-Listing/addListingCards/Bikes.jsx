import React, { useRef, useState } from "react";

export default function Bikes() {
  const handleChange8 = (name) =>
    setChecked8({
      checkFifteen: name === "checkFifteen",
      checkSixteen: name === "checkSixteen",
    });
  const handleChange9 = (name) =>
    setChecked9({
      checkSeventeen: name === "checkSeventeen",
      checkEighteen: name === "checkEighteen",
    });
  const handleChange10 = (name) =>
    setChecked10({
      checkNinteen: name === "checkNinteen",
      checkTwenty: name === "checkTwenty",
      checkTwentyOne: name === "checkTwentyOne",
    });
  const handleChange11 = (name) =>
    setChecked11({
      checkTwentyTwo: name === "checkTwentyTwo",
      checkTwentyThree: name === "checkTwentyThree",
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
  const [checked8, setChecked8] = useState({
    checkFifteen: false,
    checkSixteen: false,
  });
  const [checked9, setChecked9] = useState({
    checkSeventeen: false,
    checkEighteen: false,
  });
  const [checked10, setChecked10] = useState({
    checkNinteen: false,
    checkTwenty: false,
    checkTwentyOne: false,
  });
  const [checked11, setChecked11] = useState({
    checkTwentyTwo: false,
    checkTwentyThree: false,
  });
  return (
    <div>
      <select className="form-select px-3 py-2">
        <option value="select-subcategory" selected disabled>
          Select Sub-Category
        </option>
        <option value="1">Motorcycles</option>
        <option value="2">Spare Parts</option>
        <option value="3">Bike Accessories</option>
        <option value="4">Bicycles</option>
        <option value="5">ATV & Quads</option>
        <option value="6">Scooters</option>
      </select>
      <div
        ref={forms.bikes}
        className="form-sixth-group w-100 p-3 my-3 rounded-2"
      >
        <div className="first-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Make">Make</label>
          </div>
          <div className="select w-100">
            <select
              name="Make"
              id="Make"
              className="px-3 py-2 form-select w-100"
            >
              <option value="" disabled selected>
                Select Make
              </option>
              <option value="" disabled className="disabled">
                Popular Make
              </option>
              <option value="1">Honda</option>
              <option value="2">Yamaha</option>
              <option value="3">Suzuki</option>
              <option value="4">United</option>
              <option value="5">Road Prince</option>
              <option value="" className="disabled" disabled>
                Others
              </option>
              <option value="6">Honda</option>
              <option value="7">Yamaha</option>
              <option value="8">United</option>
              <option value="9">Suzuki</option>
              <option value="10">Road Prince</option>
              <option value="11">Unique</option>
              <option value="12">Super Power</option>
              <option value="13">Super Star</option>
              <option value="14">Metro</option>
              <option value="15">Crown</option>
              <option value="16">Kawasaki</option>
              <option value="17">Power</option>
              <option value="18">Ravi</option>
              <option value="19">Eagle</option>
              <option value="20">Habib</option>
              <option value="21">Ghani</option>
              <option value="22">Sohrab</option>
              <option value="23">Beneli</option>
              <option value="24">Derbi</option>
              <option value="25">Zongshen</option>
              <option value="26">CF Moto</option>
              <option value="27">Cineco</option>
              <option value="28">Qingqi</option>
              <option value="29">Hero</option>
              <option value="30">Hi Speed</option>
              <option value="31">Lifan</option>
              <option value="32">Pak Hero</option>
              <option value="33">Safari</option>
              <option value="34">Super Asia</option>
              <option value="35">Toyo</option>
              <option value="36">Treet</option>
              <option value="37">Union Star</option>
            </select>
          </div>
        </div>
        <div className="second-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Model">Model</label>
          </div>
          <div className="input w-100">
            <input
              type="text"
              name="Model"
              id="Model"
              placeholder="Enter Model"
              className="input-text py-2 px-3 rounded-2"
            />
          </div>
        </div>
        <div className="third-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Year">Year</label>
          </div>
          <div className="input w-100">
            <input
              type="text"
              name="Year"
              id="Year"
              placeholder="Enter Year"
              className="input-number py-2 px-3 rounded-2"
            />
          </div>
        </div>
        <div className="fourth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Engine Type">Engine Type</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkFifteen"
              className="checkFifteen"
              checked={checked8.checkFifteen}
              onChange={() => handleChange8("checkFifteen")}
            />
            <input
              type="checkbox"
              name="checkSixteen"
              className="checkSixteen"
              checked={checked8.checkSixteen}
              onChange={() => handleChange8("checkSixteen")}
            />
          </div>
        </div>
        <div className="fifth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Engine Capacity">Engine Capacity</label>
          </div>
          <div className="select w-100">
            <select
              name="Engine Capacity"
              id="Engine Capacity"
              className="form-select py-2 px-3"
            >
              <option value="" disabled selected>
                Select Engine Capacity
              </option>
              <option value="" className="disabled">
                Popular Engine Capacity
              </option>
              <option value="1">100cc - 149cc</option>
              <option value="2">70cc</option>
              <option value="3">150cc - 199cc</option>
              <option value="4">200cc - 249cc</option>
              <option value="5">50cc</option>
              <option value="" className="disabled">
                Others
              </option>
              <option value="6">50cc</option>
              <option value="7">70cc</option>
              <option value="8">100cc - 149cc</option>
              <option value="9">150cc - 199cc</option>
              <option value="10">200cc - 249cc</option>
              <option value="11">250cc - 299cc</option>
              <option value="12">300cc - 499cc</option>
              <option value="13">500cc - 699cc</option>
              <option value="14">700cc - 999cc</option>
              <option value="15">1000cc</option>
              <option value="16">Above 1000cc</option>
            </select>
          </div>
        </div>
        <div className="sixth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="KM's Driven">KM's Driven</label>
          </div>
          <div className="input w-100">
            <input
              type="number"
              name="KM's Driven"
              id="KM's Driven"
              placeholder="Enter km's driven"
              className="input-number py-2 px-3 rounded-2"
            />
          </div>
        </div>
        <div className="seventh-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Ignition Type">Ignition Type</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkSeventeen"
              className="checkSeventeen"
              checked={checked9.checkSeventeen}
              onChange={() => handleChange9("checkSeventeen")}
            />
            <input
              type="checkbox"
              name="checkEighteen"
              className="checkEighteen"
              checked={checked9.checkEighteen}
              onChange={() => handleChange9("checkEighteen")}
            />
          </div>
        </div>
        <div className="eighth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Origin">Origin</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkNinteen"
              className="checkNinteen"
              checked={checked10.checkNinteen}
              onChange={() => handleChange10("checkNinteen")}
            />
            <input
              type="checkbox"
              name="checkTwenty"
              className="checkTwenty"
              checked={checked10.checkTwenty}
              onChange={() => handleChange10("checkTwenty")}
            />
            <input
              type="checkbox"
              name="checkTwentyOne"
              className="checkTwentyOne"
              checked={checked10.checkTwentyOne}
              onChange={() => handleChange10("checkTwentyOne")}
            />
          </div>
        </div>
        <div className="ninth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Condition">Condition</label>
          </div>
          <div className="d-flex gap-2 align-items-center condition-group">
            <input
              type="checkbox"
              name="checkTwentyTwo"
              className="checkTwentyTwo"
              checked={checked11.checkTwentyTwo}
              onChange={() => handleChange11("checkTwentyTwo")}
            />
            <input
              type="checkbox"
              name="checkTwentyThree"
              className="checkTwentyThree"
              checked={checked11.checkTwentyThree}
              onChange={() => handleChange11("checkTwentyThree")}
            />
          </div>
        </div>
        <div className="tenth-form-dropdown d-lg-flex justify-content-between w-100 my-3">
          <div className="label">
            <label htmlFor="Registration City">Registration City</label>
          </div>
          <div className="select w-100">
            <select
              name="Registration City"
              id="Registration City"
              className="form-select py-2 px-3"
            >
              <option value="" selected disabled>
                Select Registration City
              </option>
              <option value="" className="disabled">
                Popular Registration City
              </option>
              <option value="1">Lahore</option>
              <option value="2">Karachi</option>
              <option value="3">Punjab</option>
              <option value="4">Islamabad</option>
              <option value="5">Rawalpindi</option>
              <option value="" className="disabled" disabled>
                Others
              </option>
              <option value="6">Unregistered</option>
              <option value="6">Abbottabad</option>
              <option value="7">Ahmadpur East</option>
              <option value="8">Ali Masjid</option>
              <option value="9">Arifwala</option>
              <option value="10">Askoley</option>
              <option value="11">Attock</option>
              <option value="12">Badin</option>
              <option value="13">Bagh</option>
              <option value="14">Bahawalnagar</option>
              <option value="15">Bahwalpur</option>
              <option value="16">Bannu</option>
              <option value="17">Batargram</option>
              <option value="18">Bela</option>
              <option value="19">Bhakkar</option>
              <option value="20">Bhimber</option>
              <option value="21">Buner</option>
              <option value="22">Burewala</option>
              <option value="23">Charsadda</option>
              <option value="24">Chilas</option>
              <option value="25">Chiniot</option>
              <option value="26">Chistian Mandi</option>
              <option value="27">Chitral</option>
              <option value="28">Dadu</option>
              <option value="29">Darra Adam Khel</option>
              <option value="31">Daska</option>
              <option value="32">Dera Ghazi Khan</option>
              <option value="33">Dera Ismail Khan</option>
              <option value="34">Faisalabad</option>
              <option value="35">Ghanche</option>
              <option value="36">Ghizer</option>
              <option value="37">Gilgit</option>
              <option value="38">Gojra</option>
              <option value="39">Gujranwala</option>
              <option value="40">Gujrat</option>
              <option value="41">Gwadar</option>
              <option value="42">Hafizabad</option>
              <option value="43">Hala</option>
              <option value="44">Hangu</option>
              <option value="45">Haripur</option>
              <option value="46">Hasilpur</option>
              <option value="47">Haveli lakha</option>
              <option value="48">Hyderabad</option>
              <option value="49">Islamabad</option>
              <option value="50">Jacobabad</option>
              <option value="51">Jamrud</option>
              <option value="52">Jamshoro</option>
              <option value="53">Jandola</option>
              <option value="54">Jaranwala</option>
              <option value="55">Jhang Sadar</option>
              <option value="56">Jhelum</option>
              <option value="57">Jiwani</option>
              <option value="58">Kalat</option>
              <option value="59">Kamoke</option>
              <option value="60">Kandhura</option>
              <option value="61">Karachi</option>
              <option value="62">Karak</option>
              <option value="63">Kasur</option>
              <option value="64">Khairpur</option>
              <option value="65">Khanewala</option>
              <option value="66">Khanpur</option>
              <option value="67">Khaplu</option>
              <option value="68">Khushsab</option>
              <option value="69">Khuzdar</option>
              <option value="70">Kohat</option>
              <option value="71">Kohistan</option>
              <option value="72">Kot Addu</option>
              <option value="73">Lahore</option>
              <option value="74">Lakki Marwat</option>
              <option value="75">Landi Kotal</option>
              <option value="76">Larkhana</option>
              <option value="77">Lasbela</option>
              <option value="78">Layyah</option>
              <option value="79">Lower Dir</option>
              <option value="80">Malakand</option>
              <option value="81">Mandi Bahauddin</option>
              <option value="82">Mansehra</option>
              <option value="83">Mardan</option>
              <option value="84">Mianwali</option>
              <option value="85">Mingora</option>
              <option value="86">Mingora</option>
              <option value="87">Miram Shah</option>
              <option value="88">Mirpur</option>
              <option value="89">Mirpur Khas</option>
              <option value="90">Mithi</option>
              <option value="91">Multan</option>
              <option value="92">Muridike</option>
              <option value="93">Muzaffarabad</option>
              <option value="94">Nawabshah</option>
              <option value="95">Nowshera</option>
              <option value="96">Okara</option>
              <option value="97">Ormama</option>
              <option value="98">Pakpattan</option>
              <option value="99">Parachinar</option>
              <option value="100">Pasni</option>
              <option value="101">Peshawar</option>
              <option value="102">Pirmahal</option>
              <option value="103">Punjab</option>
              <option value="104">Quetta</option>
              <option value="105">Rahimyar Khan</option>
              <option value="106">Ratodero</option>
              <option value="107">Rawalpindi</option>
              <option value="108">Sadiqabad</option>
              <option value="109">Safar Abad</option>
              <option value="110">Sahiwal</option>
              <option value="111">Sargodha</option>
              <option value="112">Sheikhupura</option>
              <option value="113">Shikarpur</option>
              <option value="114">Sialkot</option>
              <option value="115">Sindh</option>
              <option value="116">Skardu</option>
              <option value="117">Sukkar</option>
              <option value="118">Sukkur</option>
              <option value="119">Swabi</option>
              <option value="120">Swat</option>
              <option value="121">Tando Adam</option>
              <option value="122">Tank</option>
              <option value="123">Thatta</option>
              <option value="124">Toba Tek Singh</option>
              <option value="125">Torkham</option>
              <option value="126">Upper Dir</option>
              <option value="127">Vehari</option>
              <option value="128">Wah</option>
              <option value="129">Wana</option>
              <option value="130">Wazirabad</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
