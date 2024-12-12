import React, { useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import GeneratedTrip from "./GeneratedTrip";
import downloadIcon from "../img/downloadIcon.png";

const Planner = () => {
  const [destination, setDestination] = useState("California");
  const [budget, setBudget] = useState("1000");
  const [duration, setDuration] = useState("5");
  const [travelStyle, setTravelStyle] = useState("Adventure");
  const [travelerType, setTravelerType] = useState("Friends");
  const [activityType, setActivityType] = useState("Sightseeing");
  const [foodPreference, setFoodPreference] = useState("Foodie/Experimental");
  const [optionalPreferences, setOptionalPreferences] = useState("None");

  const [isLoading, setIsLoading] = useState(false);
  const [tripPlan, setTripPlan] = useState(null);

  // const navigate = useNavigate();

  

  return (
    <div className="plan-page-container">
      <div className="planner-container">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-box">
            <div className="form-title">
              Customize your experience! Fill in the details, click Generate,
              and let the adventure begin.
            </div>
            <div className="form-content">
              <div className="form-top">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="destination">Destination</label>
                    <br />
                    <input
                      type="text"
                      className="form-destination"
                      id="destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Enter destination country"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="budget">Budget (USD)</label>
                    <br />
                    <input
                      type="number"
                      className="form-budget"
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Enter budget"
                      step="0.01"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="duration">Trip duration (days)</label>
                    <br />
                    <input
                      type="number"
                      className="form-duration"
                      id="duration"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="Enter trip duration"
                      min="1"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="travelStyle">Travel Style</label>
                    <br />
                    <select
                      className="form-travel-style"
                      id="travelStyle"
                      value={travelStyle}
                      onChange={(e) => setTravelStyle(e.target.value)}
                      required
                    >
                      <option value="">Select travel style</option>
                      <option value="Cultural">Cultural</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Relaxation">Relaxation</option>
                      <option value="Beach">Beach</option>
                      <option value="City Break">City Break</option>
                      <option value="Road Trip">Road Trip</option>
                      <option value="Wildlife Safari">Wildlife Safari</option>
                      <option value="Ski">Ski</option>
                      <option value="Nature">Nature</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="activityType">Activity Type</label>
                    <br />
                    <select
                      className="form-activity-type"
                      id="activityType"
                      value={activityType}
                      onChange={(e) => setActivityType(e.target.value)}
                      required
                    >
                      <option value="">Select activity type</option>
                      <option value="Outdoors">Outdoors</option>
                      <option value="Sightseeing">Sightseeing</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Nightlife">Nightlife</option>
                      <option value="Museums">Museums</option>
                      <option value="Theme Parks">Theme Parks</option>
                      <option value="Water Sports">Water Sports</option>
                      <option value="Yoga and Wellness">
                        Yoga and Wellness
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="travelStyle">Traveler Type</label>
                    <br />
                    <select
                      className="form-traveler-type"
                      id="travelerType"
                      value={travelerType}
                      onChange={(e) => setTravelerType(e.target.value)}
                      required
                    >
                      <option value="">Select traveler type</option>
                      <option value="Solo">Solo</option>
                      <option value="Family">Family</option>
                      <option value="Friends">Friends</option>
                      <option value="Colleagues">Colleagues</option>
                      <option value="Couple">Couple</option>
                      <option value="Large Group">Large Group</option>
                      <option value="Luxury traveler">Luxury traveler</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="foodPreference">Food Preferences</label>
                    <br />
                    <select
                      className="form-food-preference"
                      id="foodPreference"
                      value={foodPreference}
                      onChange={(e) => setFoodPreference(e.target.value)}
                      required
                    >
                      <option value="">Select food preferences</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Gluten-Free">Gluten-Free</option>
                      <option value="Pescatarian">Pescatarian</option>
                      <option value="Halal">Halal</option>
                      <option value="Kosher">Kosher</option>
                      <option value="Lactose-Free">Lactose-Free</option>
                      <option value="Nut-Free">Nut-Free</option>
                      <option value="Local Cuisine">Local Cuisine</option>
                      <option value="International/Global Cuisine">
                        International/Global Cuisine
                      </option>
                      <option value="Fine Dining">Fine Dining</option>
                      <option value="Casual Dining">Casual Dining</option>
                      <option value="Foodie/Experimental">
                        Foodie/Experimental
                      </option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="optionalPreferences">
                      Optional Preferences
                    </label>
                    <br />
                    <input
                      type="text"
                      className="form-optional-preferences"
                      id="optionalPreferences"
                      value={optionalPreferences}
                      onChange={(e) => setOptionalPreferences(e.target.value)}
                      placeholder="Enter optional preferences"
                    />
                  </div>
                </div>
                <div
                  className="form-row"
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "20px",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleGenerateNewPlan}
                  >
                    Generate trip plan!
                  </button>
                </div>
              </div>

              {/* <div className="form-right">
              {isLoading ? (
                <div className="loading-spinner">Loading...</div>
              ) : (
                <div className="form-plan-container">
                  <label htmlFor="tripPlan" style={{ marginBottom: "1px" }}>
                    Trip Plan
                  </label>
                  <br />
                  <div className="form-trip-plan">
                    <ReactMarkdown>{tripPlan}</ReactMarkdown>
                  </div>
                </div>
              )}
            </div> */}
              {/* <div className="form-right">
              {tripPlan ? (
                <div className="form-plan-container">
                  <label htmlFor="tripPlan" style={{ marginBottom: "1px" }}>
                    Trip Plan
                  </label>
                  <br />
                  <div className="form-trip-plan">
                    <ReactMarkdown>{tripPlan}</ReactMarkdown>
                  </div>
                </div>
              ) : (
                <div className="loading-spinner">Loading...</div>
              )}
            </div> */}
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
        {/* THIS PART FOR NEW PAGE PLAN */}
        {/* <Routes>
        <Route path="/generated-trip" component={GeneratedTrip} />
      </Routes> */}
      </div>
      <div className="planner-container-2">
        <div className="form-bottom">
          {isLoading ? (
            // <div className="loading-spinner">Loading...</div>
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : tripPlan ? (
            <div className="form-plan-container">
              {/* <label
                htmlFor="tripPlan"
                style={{ marginBottom: "1px", fontSize: "25px" }}
              >
                Trip Plan
              </label> */}
              {/* <br /> */}
              <div className="form-trip-plan">
                <ReactMarkdown>{tripPlan}</ReactMarkdown>
              </div>

              <button
                type="button"
                className="download-button"
                onClick={handleSaveToLocal}
                style={{
                  fontSize: "13px",
                  width: "130px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  marginTop: "10px",
                  marginBottom: "15px",
                  // paddingBottom: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <i
                  class="fa-light fa-download"
                  style={{ color: "#000000" }}
                ></i> */}
                <img
                  src={downloadIcon}
                  style={{
                    width: "22px",
                    height: "20px",
                    paddingRight: "3px",
                    // paddingTop: "7px",
                    alignItems: "center",
                  }}
                />
                Download Plan
              </button>
              {/* <button
                
              >
                <div className="download-button-contents">
                  <img
                    src={downloadIcon}
                    // alt="Download_Icon"
                    style={{
                      width: "22px",
                      height: "20px",
                      paddingRight: "5px",
                      // paddingTop: "5px",
                    }}
                  />
                  <div>Download Plan</div>
                </div>
              </button> */}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Planner;